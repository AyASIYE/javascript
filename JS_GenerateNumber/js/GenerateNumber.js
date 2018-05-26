// Generate a number between two numbers
function generateNumber() {
    let max = Number(document.getElementById("firstNumber").value);
    let min = Number(document.getElementById("secondNumber").value);
    let number = 0;
    //source stackoverflow
    number = Math.floor(Math.random() * (max - min + 1)) + min;
    showResult(number);
}

function showResult(number) {
    document.getElementById("result").innerHTML = number;
}

