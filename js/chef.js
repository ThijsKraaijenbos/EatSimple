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
        let ul = document.createElement('ul')

        ul.classList.add('chef-ul')
        div.classList.add('chef-div');

        let tableNumberP = document.createElement("h2");
        tableNumberP.innerText = `Tafel: ${data[i].table}`;
        div.appendChild(tableNumberP);

        let productNameP = document.createElement("p");
        productNameP.innerText = `Product naam: ${data[i].name}`;
        ul.appendChild(productNameP);

        let productAmountP = document.createElement("p");
        productAmountP.innerText = `Aantal: ${data[i].amount}`;
        ul.appendChild(productAmountP);

        div.appendChild(ul);

        let productButton = document.createElement("button");
        productButton.innerText = `Klaar`;
        productButton.dataset.index = data[i].order_variant_id;
        productButton.addEventListener('click', orderReady);
        div.appendChild(productButton);

        chefList.appendChild(div);

    }
}

//

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