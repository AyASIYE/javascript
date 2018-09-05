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

console.log(x);


