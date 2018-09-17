/* Callbacks

You are in the market to buy a car and visited a dealer

1- create a dealer array with some objects inside. 
Objects will have car informations like make,model,year,mileage,and state.
2- Create a function that checks if the car state is VA
3- print all the cars where the year is more than 2010 that belongs to va 
4- print total mileage of the cars that belongs to va 

Hint: Use callbacks
*/

// 1. 1- create a dealer array with some objects inside. 
// Objects will have car informations like make,model,year,mileage,and state.

let arrayCars = [{
        make: "Honda",
        model: "Civic",
        year: 2015,
        mileage: 35000,
        state: "VA"
    },
    {
        make: "Toyota",
        model: "Corolla",
        year: 2018,
        mileage: 5000,
        state: "WA"
    },
    {
        make: "Opel",
        model: "Vectra",
        year: 2012,
        mileage: 70000,
        state: "VA"
    },
    {
        make: "VW",
        model: "Passat",
        year: 2018,
        mileage: 12000,
        state: "va"
    },
]

// 2 - Create a function that checks if the car state is VA
function checkState(Cars, callback) {
    for (let car of Cars) {
        if (car.state.toLowerCase() == "va") {
            if (typeof callback == "function") {
                callback(car);
            }
        }
    }
}

// 3- print all the cars where the year is more than 2010 that belongs to va 

checkState(arrayCars, year => {
    if (year.year > 2010) {
        console.log(`${year.make} ${year.model}'s year is ${year.year} and belongs to state ${year.state}`)
    }
});

// 4- print total mileage of the cars that belongs to va 

let totalMileage = function () {
    let total = 0;
    let carCount = 0;
    checkState(arrayCars, a => {
        total += a.mileage;
        carCount++
    });
    console.log(`Total mileage of the cars from VA is: ${total} and total cars is ${carCount}`);

}

totalMileage();