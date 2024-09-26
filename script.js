function calculateTotal() {
    let total = 0;
    // Get all quantity input fields
    const quantities = document.querySelectorAll('.quantity');
    
    // Loop through each item and calculate the total
    quantities.forEach(function(item) {
        const price = parseFloat(item.getAttribute('data-price')); // Get the price from the data-price attribute
        const quantity = parseInt(item.value); // Get the entered quantity
        total += price * quantity; // Add to the total
    });

    // Display the total
    document.getElementById('total').innerText = total.toFixed(2);
}