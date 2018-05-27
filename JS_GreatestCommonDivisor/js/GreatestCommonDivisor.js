// Uses basic arithmetic functions
function math() {

    let first = Number(document.getElementById("firstNumber").value);
    let second = Number(document.getElementById("secondNumber").value);
    let temp = 0;

    while ((first % second) > 0) {
        temp = first % second;
        first = second;
        second = temp;
    }

    document.getElementById("result").innerHTML = "Result is " + second;


}