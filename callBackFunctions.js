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

let y = function (callback) {
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

let add = function (a, b) {
    return a + b;
}

let multiply = function (a, b) {
    return a * b;
}

let divide = function (a, b) {
    return a / b;
}

// call the function by giving the parameter
let calc = function (num1, num2, callback) {
    if (typeof callback === "function") { // check type of callback
        return callback(num1, num2);
    }

}

console.log(calc(3, 2, add));
console.log(calc(8, 4, multiply));
console.log(calc(5, 2, divide));

console.log(calc(7, 3, function (a, b) { // anonymous function, if we don't use again, we use anonymous function.
    return a - b;
}));

// ********************************************************

let students = [{
        name: "Mary",
        score: 90,
        school: "East"
    },
    {
        name: "James",
        score: 100,
        school: "east"
    },
    {
        name: "Steve",
        score: 40,
        school: "East"
    },
    {
        name: "Gabe",
        score: 90,
        school: "West"
    },
    {
        name: "Racheal",
        score: 85,
        school: "East"
    },
    {
        name: "Smith",
        score: 95,
        school: "West"
    },
];

let processStudents = function (data, callback) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].school.toLowerCase() == "east") {
            if (typeof callback == "function") {
                callback(data[i]);
            }
        }
    }
}

processStudents(students, function(x){
    if (x.score > 60) {
        console.log(`${x.name} passed!`)
    }
})

/*
Write a function that computes the total of all the scores together for east and also 
count how mans students are in our east
*/

let determineTotal = function() {
    let total = 0;
    let count = 0;

    processStudents(students, function(x){
        total = total + x.score;
        count++;
    })

    console.log(`Total score ${total},  Total count: ${count}`)
}

// call the determineTotal()
determineTotal();
