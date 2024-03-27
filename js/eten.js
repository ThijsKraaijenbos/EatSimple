window.addEventListener("load", () => init())

const productPath = "../webservice/actions.php"

//Init functie
const init = () => {
    console.log("Alle elementen zijn geladen")
    AJAXRequest(productPath,loadAllProducts)
}

const AJAXRequest = (location, successCallback) => {
    fetch(location)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(successCallback)
        .catch(errorHandler);
}



// maak een functie waar je de producten ophaalt van het anchor tag die je hebt gedrukt



const loadAllProducts = (data) => {
    console.log(data)
}

const errorHandler = (error) => {
    console.error("An error occurred:", error);
}

