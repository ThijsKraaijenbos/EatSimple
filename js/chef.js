window.addEventListener('load', init);

let chefList = document.querySelector('.main');

function init() {
    getApi('./webservice/data.php', populateSite);
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
        let div = document.createElement('div');
        div.classList.add('chef-div');

        let productNameP = document.createElement("p");
        productNameP.innerText = `Tafel: ${data[i].table} - Product naam: ${data[i].name} - Aantal: ${data[i].amount}`;
        div.appendChild(productNameP);

        let productButton = document.createElement("button");
        productButton.innerText = `Klaar`;
        productButton.dataset.index = data[i].order_variant_id;
        productButton.addEventListener('click', orderReady);
        div.appendChild(productButton);

        chefList.appendChild(div);
    }
}

function errorMessage(data) {
    console.log(data);
}

function orderReady(e) {
    console.log(e.target.dataset.index);
    console.log('./webservice/editChef.php?id=' + e.target.dataset.index);
    getApi('./webservice/editChef.php?id=' + e.target.dataset.index, next);//"webservice/actions.php?id=" + id;
    window.location.href = 'chef.html';
    window.close();
}

function next(data) {
    console.log('item removed');
}