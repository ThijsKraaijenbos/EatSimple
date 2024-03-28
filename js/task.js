window.addEventListener('load', init);

let id = new URLSearchParams(window.location.search).get('id'); // URLSearchParams haalt de url op
let customUrl = "webservice/actions.php?id=" + id;
let container // Roshan changed
let main
let dialog;

function init() {
    getApi(customUrl, populateSite);
}

function getApi(url, nextFunction) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error (${response.status}): ${response.statusText}`);
            }
            return response.json();
        })
        .then(nextFunction)
        .catch(errorMessage);
}


function populateSite(products) {

    // load all products of the anchor tag that has been clicked
    console.log(products);
    container = document.getElementById('container-producten');
    main = document.querySelector("main");

    createCart();


    for (let product in products) {
        // create the elements
        const productContainer = document.createElement("article");
        const productName = document.createElement("h1");
        const productButton = document.createElement('button');
        const productImage = document.createElement("img");


        // Classes & ID
        productImage.classList.add("product-image-size");
        productButton.classList.add("product-button");

        // Dataset, Src, InnerText
        productImage.src = products[product].img;
        productButton.dataset.name = products[product].name;
        productButton.dataset.type_id = products[product].type_id;
        productButton.dataset.img = products[product].img;
        productButton.innerText = "Bestel";
        productName.innerText = products[product].name;

        // Eventlisteners
        productButton.addEventListener("click", addToCart);

        // AppendSections
        productContainer.appendChild(productImage);
        productContainer.appendChild(productName);
        productContainer.appendChild(productButton);
        container.appendChild(productContainer);
        main.appendChild(container);

    }
}


function createCart() {
    // create Cart + cart Counter
    const cartDiv = document.createElement("div");
    const cartIcon = document.createElement("span");
    let cartCounter = document.createElement("span");

    // Classes & Id
    cartDiv.id = "add-to-cart";
    cartIcon.id = "cart-icon";
    cartCounter.id = "cart-count";

    // Dataset, Src, InnerText
    cartCounter.innerText = " 0";
    cartIcon.innerHTML = " &#128722;";


    // AppendSections
    cartDiv.appendChild(cartIcon)
    cartDiv.appendChild(cartCounter)
    cartDiv.addEventListener('click', openModal)
    main.appendChild(cartDiv)
}

function addToCart(e) {
    let productId = parseInt(e.target.dataset.type_id);
    let productName = e.target.dataset.name;
    let productAmount = 1;  // Default amount is 1
    let productImg = e.target.dataset.img;

    let cartCountElement = document.getElementById("cart-count");
    cartCountElement.innerHTML = productName;

    // Retrieve the cart from local storage or initialize it as an empty array
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    // Check if the product already exists in the cart
    let existingProduct = cart.find(item => item[0] === productId);

    if (existingProduct) {
        // If the product exists, increase the amount
        existingProduct[2]++;
    } else {
        // If the product doesn't exist, add it to the cart
        cart.push([productId, productName, productAmount, productImg]);
    }

    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function openModal() {
    dialog = document.querySelector('.products-modal')
    dialog.addEventListener('click', closeModal)
    dialog.showModal();
}

function closeModal(e) {
    const clickedItem = e.target;

    if (clickedItem.nodeName !== 'BUTTON') {
        return;
    }

    dialog.close();
}



function errorMessage(message) {
    console.log(message);
}