// Finds the month in an array

function getMonthByNumber (monthNumber) {
    let months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    if (monthNumber > 0 && monthNumber < 13) {
        return months[monthNumber - 1];
    } else {
        return "Enter a number 1 to 12"
    }
}

console.log(getMonthByNumber(2)); //returns February