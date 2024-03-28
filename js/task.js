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
    main = document.querySelector("main")

    createCart()


    for (let product in products) {
        // create the elements
        const productContainer = document.createElement("article")
        const productName = document.createElement("h1")
        const productButton = document.createElement('button');
        const productImage = document.createElement("img")


        // Classes & ID
        productImage.classList.add("product-image-size")
        productButton.classList.add("product-button")

        // Dataset, Src, InnerText
        productImage.src = products[product].img
        productButton.dataset.name = products[product].name
        productButton.innerText = "Bestel";
        productName.innerText = products[product].name

        // Eventlisteners
        productButton.addEventListener("click", addToCart)

        // AppendSections
        productContainer.appendChild(productImage)
        productContainer.appendChild(productName)
        productContainer.appendChild(productButton);
        container.appendChild(productContainer)
        main.appendChild(container)

    }
}


function createCart(){
    // create Cart + cart Counter
    const cartDiv = document.createElement("div")
    const cartIcon = document.createElement("span")
    let cartCounter = document.createElement("span")

    // Classes & Id
    cartDiv.id = "add-to-cart"
    cartIcon.id = "cart-icon"
    cartCounter.id = "cart-count"

    // Dataset, Src, InnerText
    cartCounter.innerText = " 0"
    cartIcon.innerHTML = " &#128722;"

    // AppendSections
    cartDiv.appendChild(cartIcon)
    cartDiv.appendChild(cartCounter)
    cartDiv.addEventListener('click', openModal)
    main.appendChild(cartDiv)
}

function addToCart(e) {
    console.log(e.target.dataset.name)
    let productType = e.target.dataset.name

    let cartCountElement = document.getElementById("cart-count")
    cartCountElement.innerHTML = productType

    // when you click the button add the item where you clicked to the cart


    // Put the dataset in a variable and save it to localstorage in this case the cart


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