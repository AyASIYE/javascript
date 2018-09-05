// CLOSURES

/* How functions can return a function
*/

function calcRectangleArea(lenght, width) {
    return lenght * width
}

let room = calcRectangleArea(10, 20);

function youSayGoodBye() {
    console.log("Good Bye");

    function andISayHello() {
        console.log("Hello");
    }
    return andISayHello;
}