let depositBtn = document.getElementById("deposit-btn");

let withdrawBtn = document.getElementById("withdraw-btn");

// Common Function ------------------------------------------------

function setTotalAmmount(inputId, currentAmmountId) {
  let inputAmount = document.getElementById(inputId);
  let currentAmount = document.getElementById(currentAmmountId);
  let balanceAmount = document.getElementById("balance-amount");
  let input = parseInt(inputAmount.value);
  let current = parseInt(currentAmount.innerText);
  let balance = parseInt(balanceAmount.innerText);

  if (input > 0) {
    if (inputId == "deposit-input") {
      let newBalance = balance + input;
      balanceAmount.innerText = newBalance;
    } else if (inputId == "withdraw-input" && input <= balance) {
      let newBalance = balance - input;
      balanceAmount.innerText = newBalance;
    } else {
      alert("You have not Sufficiant Balance");
      input = 0;
    }
    let totalAmount = current + input;
    currentAmount.innerText = totalAmount;
  } else {
    alert("Please Give a Positive Number");
  }
  inputAmount.value = "";
}

// ----------------------------------------------------------------

depositBtn.addEventListener("click", function () {
  setTotalAmmount("deposit-input", "deposit-amount");
});

withdrawBtn.addEventListener("click", function () {
  setTotalAmmount("withdraw-input", "withdraw-amount");
});
