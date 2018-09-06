//  CALL - APPLY - BIND

// CALL

let obj = {
    num: 2
}

let obj2 = {
    num: 10
}

let obj3 = {
    num: 13
}

let addToThis = function (a) {
    return this.num + a;
}

// let x = addToThis.call(obj, 3);
// console.log(x);

let y = addToThis.call(obj2, 3);
console.log(y);


let addToThis2 = function (a, b, c) {
    return this.num + a + b + c;
}

// let z = addToThis2.call(obj3, 1, 2, 3); // functionName.call(objectName, functionArguments)
// console.log(z);

// Apply
let obj4 = {
    num: 10
}

let arr = [1, 2, 3];
let x = addToThis2.apply(obj4, arr);
console.log(x);

// bind() returns a new function
let obj5 = {
    num: 5
}

let addToThis3 = function (a, b, c) {
    return this.num + a + b + c;
}

let arr3 = [1, 2, 3];

let k = addToThis3.bind(obj5);
console.log(k(1, 2, 3));
console.log(k(...arr3));


