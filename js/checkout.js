window.addEventListener('load', init);

let submit = document.querySelector('.bestellen');
submit.addEventListener('click', submitList)
let backButton = document.querySelector('#general-back-button')
let pageId = localStorage.getItem('pageId')

function init() {
    //getApi(customUrl, populateSite);
    populateSite()
    backButton.addEventListener('click', goBack);
}

function populateSite() {
    let cartList = document.querySelector('.product-items');

    if (!cartList) {
        console.error('Cart list not found');
        return;
    }

    cartList.innerHTML = '';

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach(item => {
        let [productId, productName, productAmount, productImg] = item;
//<--<img src="path_to_product_image/${productId}.jpg" alt="${productName}" class="product-image">-->
        const div = document.createElement("div")
        div.classList.add("list-item")

        const productImageP = document.createElement("img");
        productImageP.classList.add("product-image-checkout");
        productImageP.src = `${productImg}`
        div.appendChild(productImageP);

        const productNameP = document.createElement("p")
        productNameP.classList.add("product-name-checkout")
        productNameP.innerText =`${productName}`
        div.appendChild(productNameP)

        const productAmountP = document.createElement("p")
        productAmountP.classList.add("product-amount-checkout")
        productAmountP.innerText = `Amount: ${productAmount}`
        div.appendChild(productAmountP)

        const addButton = document.createElement("button")
        addButton.classList.add("add-button-checkout")
        addButton.dataset.product_id = `${productId}`
        addButton.innerText = `+1`
        div.appendChild(addButton)

        const removeButton = document.createElement("button")
        removeButton.classList.add("remove-button-checkout")
        removeButton.dataset.product_id = `${productId}`
        removeButton.innerText = `-1`
        div.appendChild(removeButton)

        cartList.appendChild(div)
    });

// let checkOut = document.querySelector('.checkout');
// checkOut.addEventListener('click', openCheckOut)

    let removeButtons = document.querySelectorAll('.remove-button-checkout');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeItem);
    });

    let addButtons = document.querySelectorAll('.add-button-checkout');
    addButtons.forEach(button => {
        button.addEventListener('click', addItem);
    });
}

function removeItem(e) {
    let productIdToRemove = parseInt(e.target.dataset.product_id);

    // Retrieve the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Find the index of the item to remove
    let indexToRemove = cart.findIndex(item => item[0] === productIdToRemove);

    if (indexToRemove !== -1) {
        // Decrease the amount of the item by 1
        cart[indexToRemove][2]--;

        // If the amount becomes 0, remove the item from the cart
        if (cart[indexToRemove][2] === 0) {
            cart.splice(indexToRemove, 1);
        }

        // Save the updated cart back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Re-open the modal to reflect the changes
        populateSite()
    }

}

function addItem(e) {
    let productIdToRemove = parseInt(e.target.dataset.product_id);

    // Retrieve the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Find the index of the item to remove
    let indexToAdd = cart.findIndex(item => item[0] === productIdToRemove);

    if (indexToAdd !== -1) {
        // Decrease the amount of the item by 1
        cart[indexToAdd][2]++;

        // If the amount becomes 0, remove the item from the cart
        if (cart[indexToAdd][2] === 0) {
            cart.splice(indexToAdd, 1);
        }

        // Save the updated cart back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Re-open the modal to reflect the changes
        populateSite()
    }
}

function goBack(){
    window.location.href = `http://localhost/EatSimple/products.php?id=${pageId}`;
}

function submitList() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!cart) {
        return
    }

    let order_id = JSON.parse(localStorage.getItem('order_id')) || [];
    console.log(cart)

    let items = []

    for (let i = 0; i < cart.length; i++) {
        items.push([order_id, cart[i][0]])
        // for (let j = 0; j < cart[i][1]; j++) {
        //
        // }
    }
    console.log(items)

    fetch("./webservice/checkout.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // Change the content type
        },
        body: 'data=' + encodeURIComponent(JSON.stringify(items)), // Stringify and send the data under 'data' key
    })

    localStorage.setItem('cart', [])

    window.location.href = 'types.html';
    window.close();
}