function calculateTotalPrice () {
    let femaleQuantity = parseInt(document.getElementById('female-quantity').value) || 0;
    let maleQuantity = parseInt(document.getElementById('male-quantity').value) || 0;

    let femalePrice = 150.95;
    let malePrice = 180.95;

    let femaleTotal = femaleQuantity * femalePrice;
    let maleTotal = maleQuantity * malePrice;
    let orderTotal = femaleTotal + maleTotal;

    document.getElementById('female-total').innerText = `R ${femaleTotal.toFixed(2)}`;
    document.getElementById('male-total').innerText = `R ${maleTotal.toFixed(2)}`;
    document.getElementById('order-total').innerText = `R ${orderTotal.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', calculateTotal);
