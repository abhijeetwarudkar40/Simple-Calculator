const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let expression = display.value;
   
        expression = expression.replace(/\^/g, "**");

        expression = expression.replace(/√(\d+(\.\d+)?)/g, "Math.sqrt($1)");

        display.value = eval(expression);
    } catch {
        display.value = "Error";
    }
}
