let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    total += price;

    updateCart();

    document.getElementById("order-message").textContent = "";
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    cartItems.innerHTML = "";

    cart.forEach(function(item) {
        const li = document.createElement("li");

        li.textContent = `${item.name} - ₹${item.price}`;

        cartItems.appendChild(li);
    });

    totalElement.textContent = total;
}

function placeOrder() {
    const orderMessage = document.getElementById("order-message");

    if (cart.length === 0) {
        orderMessage.textContent =
            "Please add food items to your cart before placing an order.";
        return;
    }

    const orderId = Math.floor(100000 + Math.random() * 900000);

    orderMessage.textContent =
        `Order #${orderId} placed successfully! Thank you for ordering with Foodie Express.`;

    cart = [];
    total = 0;

    updateCart();
}
