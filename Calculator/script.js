const display = document.getElementById("display");
let memory = 0;

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendCharacter(char) {
    display.value += char;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function calculateSquareRoot() {
    display.value = Math.sqrt(parseFloat(display.value));
}

function calculateSquare() {
    display.value = Math.pow(parseFloat(display.value), 2);
}

function calculateInverse() {
    display.value = 1 / parseFloat(display.value);
}

function calculatePercentage() {
    display.value = parseFloat(display.value) / 100;
}

function saveToMemory() {
    memory = parseFloat(display.value);
}

function recallMemory() {
    display.value = memory;
}
