var displayNum = "";
var storedNum = "";
var operation = 0;
var queuedOperation = 0;
var calculationFinished = false;

function form_reset() {
  var display = document.getElementById("screen");

  displayNum = "";
  storedNum = "";
  operation = 0;
  queuedOperation = 0;
  display.value = displayNum;
}

function update(num) {
  var display = document.getElementById("screen");
  if (num === "+" || num === "-" || num === "*" || num === "/") {
    displayNum = display.value;
    var evalDisplay = +displayNum;
    var evalStored = +storedNum;

    if (queuedOperation === 0) {
      storedNum = display.value;
    } else if (queuedOperation === 1) {
      storedNum = evalStored + evalDisplay;
    } else if (queuedOperation === 2) {
      storedNum = evalStored - evalDisplay;
    } else if (queuedOperation === 3) {
      storedNum = evalStored * evalDisplay;
    } else if (queuedOperation === 4) {
      storedNum = evalStored / evalDisplay;
    }

    if (num === "+") {
      operation = 1;
    } else if (num === "-") {
      operation = 2;
    } else if (num === "*") {
      operation = 3;
    } else if (num === "/") {
      operation = 4;
    }

    queuedOperation = operation;
    display.value = num;
  } else {
    if (display.value === null && num === 0) {
      return;
    } else if (calculationFinished === true) {
      display.value = num;
      calculationFinished = false;
    } else {
      display.value += num;
    }
  }
}

function result() {
  var display = document.getElementById("screen");
  var a = (display.value).slice(1);
  displayNum = a;
  alert
  var evalDisplay = +displayNum;
  var evalStored = +storedNum;

  if (operation === 1) {
    displayNum = evalStored + evalDisplay;
  } else if (operation === 2) {
    displayNum = evalStored - evalDisplay;
  } else if (operation === 3) {
    displayNum = evalStored * evalDisplay;
  } else if (operation === 4) {
    displayNum = evalStored / evalDisplay;
  }
  display.value = displayNum;
  if (operation !== 0) calculationFinished = true;
  operation = 0;
  queuedOperation = 0;
  displayNum = "";
  storedNum = "";
}