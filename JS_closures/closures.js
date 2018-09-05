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

let something = youSayGoodBye();
// console.log(something);

youSayGoodBye();
// something();

// Closures get involved when the returned innner function is not SELF-cONTAINED. 

function stopWatch() {
    let startTime = Date.now();

    function getDelay() {
        let elapsedTime = Date.now() - startTime;
        console.log(elapsedTime);
    }
    return getDelay;
}

let timer = stopWatch();
timer();

/* JavaScript runtime keeps track of all of your variables, memory usage, references, and so.
When it detects that an inner function relies on variables stored by an outer function, it ensures 
those variables are available even if the outer function goes away. 
*/

