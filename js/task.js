window.addEventListener('load', init);

let id = new URLSearchParams(window.location.search).get('id');
let customUrl = "webservice/actions.php?id=" + id;
const container = document.getElementById('container');

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

function populateSite(data) {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        let foodCard = document.createElement('div');
        foodCard.innerHTML = `${data[i].name}`;

        let foodButton = document.createElement('button');
        foodButton.dataset.index = `${data[i].type_id}`;
        foodButton.addEventListener('click', addToCart)
        foodButton.innerHTML = `Bestel`;

        foodCard.appendChild(foodButton);

        container.appendChild(foodCard);
    }
}

function addToCart(e) {
    console.log(e.target.dataset.index)
}

function errorMessage(message) {
    console.log(message);
}