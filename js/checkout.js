window.addEventListener('load', init);

let submit = document.querySelector('.checkout');
submit.addEventListener('click', submitList)

function init() {
    //getApi(customUrl, populateSite);
    populateSite()
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

function populateSite() {
    let cartList = document.querySelector('#cart-list');

    if (!cartList) {
        console.error('Cart list not found');
        return;
    }

    cartList.innerHTML = '';

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach(item => {
        let [productId, productName, productAmount] = item;
//<--<img src="path_to_product_image/${productId}.jpg" alt="${productName}" class="product-image">-->
        let productHTML = `
            <div class="list-item">
                <p class="product-name">${productName}</p>
                <p class="product-amount">Amount: ${productAmount}</p>
                <button class="add-button" data-product_id="${productId}">+1</button>
                <button class="remove-button" data-product_id="${productId}">-1</button>
            </div>
        `;

        cartList.innerHTML += productHTML;
    });

// let checkOut = document.querySelector('.checkout');
// checkOut.addEventListener('click', openCheckOut)

    let removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeItem);
    });

    let addButtons = document.querySelectorAll('.add-button');
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

function submitList() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cart)

    cart.forEach(item => {
        let [productId, productName, productAmount] = item;
        console.log(`${productId} ${productAmount}`)
    });


}