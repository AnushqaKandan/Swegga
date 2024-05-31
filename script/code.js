let fPrice = document.getElementById('fmalePrice')
let fQnty = document.getElementById('female-quantity')
let fTotal = document.getElementById('female-total')

let mPrice = document.getElementById('malePrice')
let mQnty = document.getElementById('male-quantity')
let mTotal = document.getElementById('male-total')

let calc = document.getElementById('calculate')
let Total = document.getElementById('final-total')


calc.addEventListener('click', (event)=>{
    event.preventDefault()
    calculation()
})
function calculation() {
   let total1 = eval(fPrice.innerText * fQnty.value)
   let total2 = eval(mPrice.innerText * mQnty.value)
   let total3 = total1 + total2

   fTotal.innerText = total1.toFixed(2)
   mTotal.innerText = total2.toFixed(2)
   Total.innerText = total3.toFixed(2)
   
}