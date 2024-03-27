window.addEventListener('load', init);

let customUrl = "/webservice/actions.php";

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
    console.log("Test alles is geleden");

}

function errorMessage(message) {
    console.log(message);
}