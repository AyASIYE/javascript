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

// first();
// second();
// third();


// ASYNCHRONOUS
// JavaScript is a Async language

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

// JavaScript handle this situation with callback functions

function first(callback) {
    setTimeout(function(){    // setTimeout set the time to wait 
        console.log("First one");
        callback(third); // second(third)
    }, 2000)  //  wait 1 second
}
function second(callback) {
    console.log("Second one");
    callback();  // third()
}
function third() {
    console.log("Third one");
}

first(second);
second();
third();

const async = function (number, callback) {
    const result = number + 2;
    callback(result);
}

async (2, function (result) {
    console.log(result);
    async (4, function (result) {
        console.log(result);
        async (6, function (result) {
            console.log(result);
        })
    })
});


// Callback Hell / Pyramid of Doom
function prepareTea() {
    setTimeout(function () {
        console.log("1. Find the vessel");

        setTimeout(function () {
            console.log("2. Put water, sugar and tea");

            setTimeout(function () {
                console.log("3. Bring the mixture to a boil");

                setTimeout(function () {
                    console.log("4. Filter the tea");

                    setTimeout(function () {
                        console.log("5. Serve the tea");
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}

prepareTea();