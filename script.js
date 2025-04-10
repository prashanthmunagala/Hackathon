document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to all quantity buttons
    document.querySelectorAll('.quantity-btn.minus').forEach(button => {
        button.addEventListener('click', function() {
            updateQuantity(this, -1);
        });
    });

    document.querySelectorAll('.quantity-btn.plus').forEach(button => {
        button.addEventListener('click', function() {
            updateQuantity(this, 1);
        });
    });

    // Place Order button
    document.querySelector('.submit-btn').addEventListener('click', calculateTotal);

    // Back to Menu button
    document.querySelector('.back-btn').addEventListener('click', goBack);
});

function updateQuantity(button, change) {
    const quantityInput = button.parentElement.querySelector('.quantity-input');
    let newValue = parseInt(quantityInput.value) + change;
    if (newValue < 0) newValue = 0;
    quantityInput.value = newValue;
}

function calculateTotal() {
    const quantityInputs = document.querySelectorAll('.quantity-input');
    const selectedList = document.getElementById('selectedItems');
    const totalDisplay = document.getElementById('totalAmount');
    const gstDisplay = document.getElementById('gstAmount');
    const grandTotalDisplay = document.getElementById('grandTotal');
    const summarySection = document.getElementById('orderSummary');
    const menuForm = document.getElementById('menuForm');
    const submitBtn = document.querySelector('.submit-btn');

    let total = 0;
    let gst = 0;
    const gstRate = 0.20;

    // Clear previous order summary
    selectedList.innerHTML = '';

    quantityInputs.forEach((input) => {
        const quantity = parseInt(input.value);
        if (quantity > 0) {
            const itemName = input.getAttribute('data-name');
            const itemPrice = parseInt(input.getAttribute('data-price'));
            const itemTotal = quantity * itemPrice;
            total += itemTotal;

            // Add item to the order summary list
            const listItem = document.createElement('li');
            listItem.textContent = `${itemName} (${quantity}) - ₹${itemTotal}`;
            selectedList.appendChild(listItem);
        }
    });

    // If no items selected, show alert
    if (total === 0) {
        alert('Please select at least one item to place an order.');
        return;
    }

    // Calculate GST
    gst = total * gstRate;
    const grandTotal = total + gst;

    // Display the subtotal, GST, and grand total
    totalDisplay.textContent = `Subtotal: ₹${total.toFixed(2)}`;
    gstDisplay.textContent = `GST (20%): ₹${gst.toFixed(2)}`;
    grandTotalDisplay.textContent = `Grand Total: ₹${grandTotal.toFixed(2)}`;

    // Show the order summary and hide the menu form
    summarySection.style.display = 'block';
    menuForm.style.display = 'none';
    submitBtn.style.display = 'none';
}

function goBack(event) {
    event.preventDefault();
    document.getElementById('orderSummary').style.display = 'none';
    document.getElementById('menuForm').style.display = 'grid';
    document.querySelector('.submit-btn').style.display = 'block';
}