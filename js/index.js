window.addEventListener("load", () => init())

let home_page_button = document.querySelector('.home_page_button')
home_page_button.addEventListener('click', openAdminPanel)

let submit = document.querySelector('.submit')
submit.addEventListener('click', submitButton)

let dialog = document.querySelector('.admin-modal')
let order_id = document.querySelector('#order_id')
let password = document.querySelector('#password')


//Init functie
const init = () => {
    console.log("Alle elementen zijn geladen")
}

function openAdminPanel() {
    if (localStorage.getItem('order_id')){
        window.location.href = 'types.html';
    } else {
        let closeButton = document.querySelector('.modal-close')
        closeButton.addEventListener('click', closeModal)
        dialog.showModal();
    }
}

function submitButton() {

    if (password.value == 'admin') {
        localStorage.setItem('order_id', order_id.value.toString());
        dialog.close()
    }else if(order_id.value == 0 && password.value == "chef"){
        window.location.href = "chef.html";
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

function closeModal() {
    dialog.close();
}



const buttonStorage = document.getElementById("clear-storage")
buttonStorage.addEventListener("click",clearStorage)
function clearStorage(){
    localStorage.removeItem('order_id');
}


