/* Functions are first class objects 
Functions have ability to: 
1. Be assigned to variable
2. Have other functions in them
3. Return other functions to be called later.


A Callback function is a function passed into another function as an argument



*/

let x = function () {
    console.log("I am called from inside a function");
}

let y = function(callback) {
    console.log("do something");
    callback();
}

y(x);

console.log("------------------------");

//An example of callback function
var array1 = [1, 4, 9, 16];

// pass a callback function to map
const map1 = array1.map(a => a * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

console.log("------------------------");

// let calc = function (num1, num2, calcType) {
//     if (calcType == "add") {
//         return num1 + num2;
//     } else if (calcType == "multiply") {
//         return num1 * num2;
//     }
// }

// console.log(calc(2, 3, "add"));

let add = function(a, b) {
    return a + b;
}

let multiply = function (a, b) {
    return a * b;
}

let divide = function(a, b) {
    return a / b;
}

// call the function by giving the parameter
let calc = function(num1, num2, callback) {
    return callback(num1, num2);
}


console.log(calc(3, 2, add));
console.log(calc(8, 4, multiply));
console.log(calc(5, 2, divide));






