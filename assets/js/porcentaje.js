function calculateDiscount(price, discount) {
  let priceWithDiscount = (price * (100 - discount)) / 100;
  return priceWithDiscount;
}

function handlerOnChangeCalculateDiscount() {
  let priceInput = document.getElementById("price");
  let discountInput = document.getElementById("discount");
  let result = calculateDiscount(priceInput.value, discountInput.value);
  document.getElementById("result").innerText = `$${result.toFixed(2)}`;
}
