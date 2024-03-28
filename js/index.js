window.addEventListener("load", () => init())

let home_page_button = document.querySelector('.home_page_button')
home_page_button.addEventListener('click', openAdminPanel)

let dialog = document.querySelector('.admin-modal')

//Init functie
const init = () => {
    console.log("Alle elementen zijn geladen")
}

function openAdminPanel() {
    console.log('hi');
    dialog.showModal();
}




