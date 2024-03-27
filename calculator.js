let displayValue = "0";
let resultFlag = false;

function display() {
    const updateDisplay = document.querySelector(".display");
    updateDisplay.textContent = displayValue;
}


function changeDisplay(buttonValue) {
    if (displayValue === "0" || resultFlag === true) {
        displayValue = buttonValue;
    }

    else {
        displayValue = displayValue + buttonValue;
    }
    resultFlag = false;

    display();
}


function clearDisplay() {
    displayValue = "0";
    display();
}

function clearLastValue() {
    displayValue = displayValue.slice(0, displayValue.length - 1);

    if (displayValue === "") {
        displayValue = "0";
    }

    display();
}

function result() {
    let res = 0;
    try {
        if (displayValue !== "0") {
            res = eval(displayValue);
        }
        displayValue = res.toString();
    }
    catch (error) {
        displayValue = "faulty input!!";
    }
    resultFlag = true;
    display();
}

function forOperators(buttonValue) {
    if (displayValue === "0" || displayValue === "faulty input!!") {
        displayValue = buttonValue;
    }

    else {
        displayValue = displayValue + buttonValue;
    }
    resultFlag = false;
    display();
}

