window.addEventListener("load", () => init())

let home_page_button = document.querySelector('.home_page_button')
home_page_button.addEventListener('click', openAdminPanel)

let submit = document.querySelector('.submit')
submit.addEventListener('click', submitButton)

let username = document.querySelector('#username')
let password = document.querySelector('#password')


let dialog = document.querySelector('.admin-modal')

//Init functie
const init = () => {
    console.log("Alle elementen zijn geladen")
}

function openAdminPanel() {
    dialog.showModal();
}

function submitButton() {
    if (username.value == 'admin' && password.value == 'admin') {
        console.log('u mag inloggen');
    }

}




