try {
    console("Hello");
    console.log(sayHello());
    console.log("This is an error!")
} catch (e) {
    console.log("Description" + e.description);
    console.log("Message" + e.message);
    console.log("Stack trace" + e.stack);
} finally {
    console.log("This line is guaranteed to execute.");
}

function divide() {
    let num1 = parseInt(prompt("Enter num1"));
    let num2 = parseInt(prompt("Enter num2"));

    try {
        if (num2 == 0) {
            throw {
                error: "Divide by zero error",
                message: "Number can not be zero!"
            }

        } else {
            console.log(`Result = ${num1/num2}`)
        }
    } catch (error) {
        console.log(error.error);
        console.log(error.message);
    }
}

divide();

function f() {

    try {
        console.log(0);
        console.log(name2);
    } catch (e) {
        console.log(1);
        return true;
        console.log(2);
    } finally {
        console.log(3);
        return false;
        console.log(4);
    }
    console.log(5);
}
console.log(f());

