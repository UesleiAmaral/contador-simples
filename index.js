const currentNumberWrapper = document.getElementById("currentNumber");
let currentNumber = 0;

function inecrement() {
    currentNumber += 1;
    if (currentNumberWrapper.classList.value == "subtrair") {
        currentNumberWrapper.classList.value = "adcionar";

    }
    currentNumberWrapper.innerHTML = currentNumber;

}

function decrement() {
    currentNumber -= 1;
    if (currentNumberWrapper.classList.value == "adcionar") {
        currentNumberWrapper.classList.value = "subtrair";

    }
    currentNumberWrapper.innerHTML = currentNumber;

}
console.log(currentNumberWrapper.classList.value)

