window.addEventListener('load', init);

let id = new URLSearchParams(window.location.search).get('id'); // URLSearchParams haalt de url op
let customUrl = "webservice/actions.php?id=" + id;
let container // Roshan changed
let main

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
    console.log(products);
    container = document.getElementById('container-producten');
    main = document.querySelector("main")
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
        productButton.dataset.type =  products[product].type_id
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

function addToCart(e) {
    console.log(e.target.dataset.type)
    // Put the dataset in a variable and save it to localstorage in this case the cart
    const productType = e.target.dataset.type

}



function errorMessage(message) {
    console.log(message);
}