// function greeting(firstName) {
//     alert('Hello ' + firstName);
// }

// function processUserInput(callFunction) {
//     let anyName = prompt('Please enter your name: ');
//     callFunction(anyName);
// }

// processUserInput(greeting);


// Closures : An inner function has always access to the variables and parameters of its outer function, 
// even after the outer function is returned.

function showName (firstName, lastName) {
    let nameIntro = "Your name is ";

    function makeFullName() {
        return nameIntro + firstName + " " + lastName;
    }
    return makeFullName();
 }

 console.log(showName ("Michael", "Jackson"));

 