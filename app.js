'use strict';

// Amount of bill input
const billInput = document.querySelector('#bill-amount');
// Tip % input
const rateService = document.querySelector('#select-service');
// Amount of people paying the bill
const splitAmount = document.querySelector('#split-amount');
// Calculate button
const calculateBtn = document.getElementById('calc-btn');
// Final message (after calc)
const outputMessage = document.getElementById('message-display');

// Hide visibility of final output message
outputMessage.style.display = 'none';

function calculateTip() {
  // Show alert if any of the fields is missing a value
  if (
    billInput.value === '' ||
    splitAmount.value === '' ||
    rateService.value === 0
  ) {
    alert('All fields required');
  } else {
    // display results message once all fields meet criteria
    outputMessage.style.display = 'block';
  }

  // Convert each input value to a decimal number
  const people = parseFloat(splitAmount.value);
  const billAmount = parseFloat(billInput.value);
  const serviceQuality = parseFloat(rateService.value);

  // Will disappear the -each- span if only 1 person pays
  if (people <= 1) {
    document.getElementById('each').style.display = 'none';
  } else {
    document.getElementById('each').style.display = 'block';
  }

  // Amount to pay (each)
  const amountEach = document.getElementById('total-amount');
  // Get percentage
  const tip = billAmount * serviceQuality;
  // Add percentage to bill amount
  let billPlusTip = billAmount + tip;
  // Divide by amount of people paying
  let total = billPlusTip / people;
  // Will only show 2 decimal places
  total = total.toFixed(2);
  amountEach.innerHTML = total;
}

calculateBtn.addEventListener('click', calculateTip);
