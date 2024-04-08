window.addEventListener('load', init);

let chefList = document.querySelector('.main');
function init() {
    getApi(populateSite);
}

function getApi(nextFunction) {
    fetch('./webservice/data.php')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error (${response.status}): ${response.statusText}`);
            }
            return response.json();
        })
        .then(nextFunction)
        .catch(errorMessage);
}

function populateSite(data) {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        let productNameP = document.createElement("p")
        productNameP.innerText =`Tafel: ${data[i].table} - Product naam: ${data[i].name} - Aantal: ${data[i].amount}`
        chefList.appendChild(productNameP)

        let productButton = document.createElement("button")
        productButton.innerText =`Klaar`
        productButton.dataset.index = data[i].order_variant_id
        productButton.addEventListener('click', orderReady)
        chefList.appendChild(productButton)
    }
}

function errorMessage(data) {
    console.log(data);
}

function orderReady() {

}