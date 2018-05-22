// Uses basic arithmetic functions
function math() {
    // Define variables
    let first = document.getElementById("firstNumber").value;
    let second = document.getElementById("secondNumber").value;
    let sign = document.getElementById("operation").value;
    let result = 0;

    // Math operation
    
    if (sign == "+") {
        result = (+first) + (+second);
        showResult(result);
    }
    else if (sign == "-") {
        result = (+first) - (+second);
        showResult(result);

    }
    else if (sign == "*") {
        result = (+first) * (+second);
        showResult(result);
    }
    else if (sign == "/") {
        result = (+first) / (+second);
        showResult(result);
    }
    else if (sign !== ("+" || "-" || "*" || "/")) {
        alert("This sign is not an operation sign, try again with + - * /");
    }

    function showResult(result) {
        alert(result);

    }

}