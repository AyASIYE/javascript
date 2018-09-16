/* Classes
Suppose that you are working in a small town administration, and you are in charge of two town elements:
1-Parks
2-Streets
It is a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (formula: number of trees / park area)
3. The name of the park that has more than 1000 trees
5. Size classification of all streets: tiny/small/normal/big/huge. 
All the report data should be printed to the console.
Hint: Use some of the ES6 features: classes, subclasses, template strings, maps, arrow functions, destructing, etc
*/

// This one will be a superClass
class SuperClass {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

// Parks will be a subclass which will inherit name and buildyear by super key from superlcass
class Park extends SuperClass {
    constructor(name, buildYear, numberTrees, parkArea) {
        super(name, buildYear);
        this.numberTress = numberTrees;
        this.parkArea = parkArea;
    }

    treeDensity() {
        let density = this.numberTress / this.parkArea;
        console.log(`${this.name} Park's tree density is ${density}/km2`)
    }
}

// Streets also will be a subclass which will inherit name and buildYear from superclass
class Street extends SuperClass {
    constructor(name, buildYear, streetLenght, streetSize = 3) {
        super(name, buildYear);
        this.streetLenght = streetLenght;
        this.streeSize = streetSize;
    }

    streetClassification() {
        let classification = new Map();
        classification.set(1, "tiny");
        classification.set(2, "small");
        classification.set(3, "normal");
        classification.set(4, "big");
        classification.set(5, "huge");

        console.log(`${this.name} street, (${this.buildYear}) is a ${classification.get(this.streetSize)} street.`)
    }
}

const Parks = [
    new Park("Central", 1898, 456, 0.6),
    new Park("Robinson", 1986, 166, 0.2),
    new Park("Picnic", 1966, 1566, 1.2),
    new Park("Hide", 1899, 2890, 1.7)
];

const Streets = [
    new Street("Tesla Avenue", 1964, 1.3, 4),
    new Street("Edison Boulevard", 1945, 2.2, 5),
    new Street("Liberty Street", 1986, 0.9),
]

// This function reduces Parks and Streets array to one element by using reduce(), calculates sum of array.
function calculation(array) {
    let sumArray = array.reduce((previous, current, index) => previous + current, 0);

    return [sumArray, sumArray / array.length];
}

function parkReport(park) {
    console.log("***********GENERAL PARK REPORT*************")

    // treeDensity
    park.forEach(element => element.treeDensity());


    // Average age of parks
    let ages = park.map(element => new Date().getFullYear() - element.buildYear);
    let [totalAge, averageAge] = calculation(ages);
    console.log(`Average age of ${park.length} parks is ${averageAge} years`);

    // Parks which have more than 1000 trees
    let index = park.map(element => element.numberTrees).findIndex(element => element >= 1000);
    // console.log(index);
    // console.log(`${park[index].name} has more than 1000 trees.`)
}
 
function streetReport(street) {

    console.log("************ STREET REPORTS ***************");

    // Total and average length of the streets

    let [totalLength, averageLength] = calculation(street.map(element => element.length));
    console.log(`${street.length} streets have a total length of ${totalLength} km and average is ${averageLength} km`)

    // Size classification
    street.forEach(element => element.streetClassification());
}

parkReport(Parks);
streetReport(Streets);