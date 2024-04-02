window.addEventListener("load", () => init())

let home_page_button = document.querySelector('.home_page_button')
home_page_button.addEventListener('click', openAdminPanel)

let submit = document.querySelector('.submit')
submit.addEventListener('click', submitButton)

let dialog = document.querySelector('.admin-modal')
let table = document.querySelector('#table')
let password = document.querySelector('#password')


//Init functie
const init = () => {
    console.log("Alle elementen zijn geladen")
}

function openAdminPanel() {
    if (localStorage.getItem('table')){
        window.location.href = 'types.html';
        window.close();
    } else {
        dialog.showModal();
    }
}

function submitButton() {

    if (password.value == 'admin') {
        localStorage.setItem('table', table.value.toString());
    }

    //localStorage.setItem('table', cardCount.toString());

    //playersAmount = localStorage.getItem('table');

    // klikt eerst op button
    // checkt of er een tafel nummer is ingevuld
    //  ja
    //      wordt naar types gestuur
    //  nee
    //      open modal
    //      check of waardes correct zijn
    //      zet tafel nummer naar tafel waarden in local
}




