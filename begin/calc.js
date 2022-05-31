let runningTotal = 0;
let buffer = "0";
let previousOperator;
const screen = document.querySelector(".screen");


function buttonClick(value) {
    if (isNaN(parseInt(value))) {
      handleSymbol(value);
    } else {
      handleNumber(value);
    }
    rerender();
  }


function handleNumber(value) {
    if (buffer === "0") {
      buffer = value;
    } else {
      buffer += value;
    }
  }


function HandleMath(symbol) {
if (buffer === '0') {
    return;
}

const intBuffer = +buffer;

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    previousOperator = symbol;
    buffer = '0';
    console.log(previousOperator)
}  

function flushOperation(intBuffer) {
    if (previousOperator === '+') {
        runningTotal += intBuffer;
    } else if (previousOperator === '-') {
        runningTotal -= intBuffer;
    } else if (previousOperator === 'x') {
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }
    console.log(runningTotal)
 }
 

function handleSymbol(symbol) {
if (symbol === "C") {
    buffer = '0';
    runningTotal = 0;
}
if (previousOperator === null) {
    return;
} else if (symbol === '='){
    flushOperation(parseInt(buffer));
    let previousOperator = null;
    buffer = runningTotal;
    runningTotal = 0;
}
 if (symbol === '+') {
    HandleMath(symbol);
} else if (symbol === '-') {
    HandleMath(symbol);
} else if (symbol === 'x') {
    HandleMath(symbol);
} else if (symbol === '÷') {
    HandleMath(symbol);
}
}


function rerender() {
    screen.innerText = buffer;
  }


  function init() {
    document
      .querySelector(".calc-buttons")
      .addEventListener("click", function(event) {
        buttonClick(event.target.innerText);
      });
  }
init();