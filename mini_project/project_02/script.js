const btn = document.getElementById("calculate-btn");
const amountInput = document.getElementById("amount");
const tipInput = document.getElementById("tip");
const totalSpan = document.querySelector(".total");

function calculateTotal() {
  const amountValue = amountInput.value;
  const tipValue = tipInput.value;
  const totalValue = amountValue * (1 + tipValue / 100);
  totalSpan.innerText = totalValue.toFixed(2);
}

btn.addEventListener("click", calculateTotal);