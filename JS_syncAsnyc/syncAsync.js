// SYNCHRONOUS

function first() {
    console.log("First one");
}
function second() {
    console.log("Second one");
}
function third() {
    console.log("Third one");
}

first();
second();
third();


// ASYNCHRONOUS

function first() {
    setTimeout(function(){    // setTimeout set the time to wait 
        console.log("First one");
    }, 1000)  //  wait 1 second
}
function second() {
    console.log("Second one");
}
function third() {
    console.log("Third one");
}

first();
second();
third();