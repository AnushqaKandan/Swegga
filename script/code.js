function calculateTotalPrice () {
    const femaleQuantity = parseInt(document.getElementById('female-quantity').value) || 0;
    const maleQuantity = parseInt(document.getElementById('male-quantity').value) || 0;

    const femalePrice = 150.95;
    const malePrice = 180.95;

    const femaleTotal = femaleQuantity * femalePrice;
    const maleTotal = maleQuantity * malePrice;
    const orderTotal = femaleTotal + maleTotal;

    document.getElementById('female-total').innerText = `R ${femaleTotal.toFixed(2)}`;
    document.getElementById('male-total').innerText = `R ${maleTotal.toFixed(2)}`;
    document.getElementById('order-total').innerText = `R ${orderTotal.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', calculateTotal);
