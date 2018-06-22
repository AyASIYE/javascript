/**
 * The following code contans TDD (test driven development) approach.
 * the follwing functions are the part of a TDD-Framework.
 * - describe(...)
 * - it(..)
 *
 * Please concantrate on the body of it(...) functions and fix them!
 */

describe('Array', function () {

    describe('#arithmetic', function () {
        it('should result the right number', function () {
            let c = [3, 4, 9, 12];
            c.shift();
            c[0].should.equal(4);
        });
        it('should be equal to the second item', function () {
            let c = new Array(23, 46); // do not touch this
            c.pop(); //removes the last item of array
            c.push(35); // adds 35 as last item to array
            (c[0] + 12).should.equal(c[1]);
        });
        it('should result the fourth element in the array', function () {
            let c = [3, 3, 3, 9]; // do not touch this
            // Needs to be c[0] = 6 
            c.splice(0, 1, 6); // Remove 1 item from index 0 and adds 6
            (c[0] + c[1]).should.equal(c[3]);
        });
        it('should give the result by using the combination of two arrays', function () {
            let c = new Array(2, 3); // do not touch this
            let a = new Array(4, 6); // do not touch this
            // Needs to be a[0] = 6
            a.shift(); // Remove first item of array
            (a[0] / 2).should.be.equal(c[1]);
        });
        it('should give the result by using the combination of two arrays', function () {
            let c = new Array("it", "switzerland", "training"); // do not touch this
            let a = ["Java", "script", "club"]; // do not touch this
            //Needs to be a[3] = "club"
            a.unshift("add-item"); //Adds an item to beginning of array
            (c[0] + a[3]).should.equal("itclub");
        });
        it('should find the right array slot', function () {
            let c = new Array(5); // do not touch this
            //Needs to insert 5 to c[0]
            c.unshift(5);
            c[0].should.be.equal(5);
        });
        it('should find and remove the item 2', function () {
            let c = [10, 22, 2, 34, 15, 3]; // do not touch this!
            let indexOf2 = c.indexOf(2); //Returns the index of 2
            c.splice(indexOf2, 1); // Removes 1 item from the index of 2 
            c.should.be.deepEqual([10, 22, 34, 15, 3]);
        });

    });

    describe('#string-operation', function () {
        it('should create a string with given parameter as seperator', function () {
            let c = ['i', 't', 'c', 'l', 'u', 'b']; // do not touch this
            c.join('+').should.equal("i+t+c+l+u+b"); // Merges items with + sign 
        });
        it('should create a string with manipulated content', function () {
            let c = ['i', 't', 'c', 'l', 'u', 'b']; // do not touch this
            let processed = c.join('').replace('c', 'C'); // Merges items by changing c with C
            processed.should.equal("itClub");
        });
    });

    describe('#join()', function () {
        it('should create a string with given parameter as seprator', function () {
            let c = ['i', 't', 'c', 'l', 'u', 'b']; // do not touch this
            c = c.join('+-').concat('+-'); // Merges items with +- signs
            c.should.equal("i+-t+-c+-l+-u+-b+-");
        });
    });

    describe('#length', function () {
        it('should give the number of elements in the array', function () {
            let c = ["it", "club", "schweiz", "Java"]; // do not touch this
            c.unshift("newItem"); // Add an item to have 5 item in the array
            c.length.should.equal(5);
        });
    });

    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            let c = [1, 2, 3]; // do not touch this
            c = c.indexOf(5); // If there is no item at 5. returns -1  
            c.should.be.equal(-1);
        });
    });

    describe('#sort()', function () {
        it('should sort the array in ascending order', function () {
            let c = [9, 2, 6, 0, -1]; // do not touch this
            c.sort(); // Sorts on ascending order
            c.should.be.deepEqual([-1, 0, 2, 6, 9]);
        });
        it('should sort the array in descending order', function () {
            let c = [-1, 1, 3, 2]; // do not touch this
            c.sort(); // Sorts on ascending order
            c.reverse(); // Reverse it as descending order
            c.should.be.deepEqual([3, 2, 1, -1]);
        });
    });

    describe('#concat()', function () {
        it('should merge the given arrays', function () {
            let c = [4, 5]; // do not touch this
            let a = [8, 9]; // do not touch this
            let processed;
            a.pop(); //Remove last item (9)
            a.unshift(7); // Adds 7 as first item
            processed = c.concat(a); // Merges c and a
            processed.should.be.deepEqual([4, 5, 7, 8]);
        });
        it('should merge the given arrays', function () {
            let c = ["A", "B"]; // do not touch this!
            let a = ["C", "D", "E"]; // do not touch this!
            c = c.concat(a); // Merges c and a and returns to c
            let processed = c;
            processed.should.be.deepEqual(["A", "B", "C", "D", "E"]);
        });

    });

    describe('#push()', function () {
        it('should insert item at the end of the array', function () {
            let c = [10]; // do not touch this!
            c.push(11, 12); // Push adds item to the end of array
            let processed = c;
            processed.should.be.deepEqual([10, 11, 12]);
        });
    });

    describe('#shift()', function () {
        it('should remove item at the front of the array', function () {
            let c = [10, 12, 13]; // do not touch this!
            c.shift(); // Shift removes first item of array
            let processed = c;
            processed.should.be.deepEqual([12, 13]);
        });
    });

    describe('#unshift()', function () {
        it('should insert item in the begin of the array', function () {
            let c = [12, 13]; // do not touch this!
            c.unshift(10); //Unshift adds an item to beginning of array
            let processed = c;
            processed.should.be.deepEqual([10, 12, 13]);
        });
        it('should insert item as the first item in the array', function () {
            let c = [12, 13]; // do not touch this!
            c.unshift(1, 10, 13); // Unshift adds items to beginning of array
            let processed = c; // manuîpulate only this line
            processed.should.be.deepEqual([1, 10, 13, 12, 13]);
        });
    });

    describe('#reverse()', function () {
        it('should change the order of items', function () {
            let c = [2, 101, 55]; // do not touch this!
            c.reverse(); // Reverses an array
            let processed = c;
            processed.should.be.deepEqual([55, 101, 2]);
        });
        it('should reverse a string', function () {
            let c = "bulcti"; // do not touch this!
            c = c.split('').reverse().join(''); // First split the array by , then reverses it, then joins
            let processed = c;
            processed.should.be.deepEqual("itclub");
        });
    });


    describe('#array methods', function () {
        it('can be used together', function () {
            let c = new Array(); // do not touch this
            c.push(1); // [1]
            c.pop(); //  []
            c.push(23); // [23]
            c.push(37); // [23, 37]
            c.shift(); // [37]
            c.unshift(5); // [5, 37]
            c.pop(); // [5]
            c.push(36); // [5, 36]   
            (c[1] % c[0]).should.be.equal(1);
        });
        it('should give number of people rest in the queue', function () {
            let c = []; // do not touch this
            c.push('john'); // ['john']
            c.push('paul'); // ['john', 'paul']
            c.push('maria'); // [john, paul, maria]
            c.pop(); // [john, paul]
            c.reverse(); // [paul, john]
            c.shift(); // [john]
            c.unshift('george'); // ['george', 'john']
            c.should.be.deepEqual(['george', 'john']);
        });
    });

    describe('#looping', function () {
        it('should increment the counter one by one', function () {
            let counter = 0; // do not touch this
            for (let index = 0; index < 5; index += 1) {
                counter += 1; // Endof loop counter = 5
            }
            counter += 3 // counter + 3
            counter.should.be.equal(8);
        });
        it('should increment the counter by array items', function () {
            let c = new Array(1, 2, 3, 4, 6);
            let counter = 0; // do not touch this!

            for (let index = 0; index < 5; index += 1) {
                counter += c[index]; // At the end, counter = 16
            }
            counter -= 1
            counter.should.be.equal(15);
        });
        it('should increment the counter randomly', function () {
            let c = []; // do not touch this!
            let maxNumber = 6;

            for (let index = 0; index < maxNumber; index += 1) {
                c[index] = Math.round(index * Math.random());
            }
            c.length.should.be.equal(6);
            c[0].should.be.equal(0);
        });
        it('should change the array items indiviually', function () {
            let c = ["a", 'n', ' ', 'a', 't', "c", "l", 'u', 'b']; // do not touch this!

            for (let index = 0; index < c.length; index += 1) {
                if (c[index] === 'a') { // Check index and change a to i
                    c[index] = 'i';
                }
            }
            c = c.join('');
            c.should.be.equal('in itclub');
        });
        it('should select only the even numbers', function () {
            let c = new Array(1, 2, 3, 4, 5, 6); // do not touch this!
            let a = [];

            for (let index = 0; index < c.length; index += 1) {
                if ((c[index] % 2) === 0) {
                    a.push(c[index]); // a[2, 4, 6]
                }
            }
            a.should.be.deepEqual([2, 4, 6]);
        });
        it('should help to find the maximum number', function () {
            let c = [10, 21, 82, 23, 64, 15, 6]; // do not touch this!
            let max = 34; // get maximum number
            /*for (let index = 0; index < c.length; index += 1) {
                max = c[index]

            }*/
            max = Math.max(...c); // Finds maximum number in an array
            max.should.be.equal(82);
        });
        it('should help to find the minimum number', function () {
            let c = [10, 21, 82, 23, 64, 15, 6]; // do not touch this!
            let min = 34; // get minimum number
            /*   for (let index = 0; index < c.length - 1; index += 1) {
                min = c[index];
            }
        */
            min = Math.min(...c); // Finds minimum number in an array
            min.should.be.equal(6);
        });
        it('should help to find the median', function () {
            let c = [13, 21, 82, 23, 64, 15, 6]; // do not touch this!
            let median = 34; // get median f.i [6,1,5] => 6+1+5/(number of element = 3) = 4,
            // you can use reduce function but you dont have to.

            function sumOfArray(sum, numbers) { // Get sum of array
                return sum + numbers;
            }
            median = c.reduce(sumOfArray) / c.length; //The reduce() method reduces the array to a single value.
            median.should.be.equal(32);
        });
        it('should help to find the numbers factor of three ', function () {
            let c = [9, 21, 80, 23, 60, 11, 6]; // do not touch this!
            let theNumbers = [];

            for (let index = 0; index < c.length; index = index + 1) {
                if (c[index] % 3 === 0) { // If the number can be divided 3 
                    theNumbers.push(c[index]); // Add the c[index] as last item to theNumbers array
                }
            }
            theNumbers = theNumbers.sort(function (a, b) { //The sort() method sorts the items of an array. Syntx: array.sort(compareFunction)
                return a - b
            });
            theNumbers.should.be.deepEqual([6, 9, 21, 60]);
        });
        it('should help to find the numbers which can be divided by 2 or 3', function () {
            let c = [9, 21, 80, 23, 60, 11, 6, 4]; // do not touch this!
            let theNumbers = [];

            for (let index = 0; index < c.length; index += 1) {
                if (c[index] % 2 == 0 || c[index] % 3 == 0) { //If c[index] can be divided 2 or 3
                    theNumbers.push(c[index]); // Add to thenumbers array as last item
                }
            }

            function sortNumbers(a, b) { //Compares the numbers
                return a - b;
            }
            theNumbers.sort(sortNumbers); // Sorts theNumber array 
            theNumbers.should.be.deepEqual([4, 6, 9, 21, 60, 80]);
        });
        it('should help to find the numbers which can be divided by both 2 and 3', function () {
            let c = [9, 21, 80, 23, 60, 11, 6, 4]; // do not touch this!
            let theNumbers = [];

            for (let index = 0; index < c.length; index += 1) {
                if (c[index] % 2 == 0 && c[index] % 3 == 0) { //If c[index] can be divided 2 and 3
                    theNumbers.push(c[index]); // Add to thenumbers array as last item
                }
            }
            theNumbers.sort(); // Sorts the numbers in theNumbes array
            theNumbers.should.be.deepEqual([6, 60]);
        });
        it('should help to find the strings which containing the word "el"', function () {
            let c = ['elveda', 'selami', 'hadi', 'itclub', 'kel', 'heyelan', 'oooo!', 'saral', 'peri', 'deli']; // do not touch this!
            let theString = []; //New array that we copy the first array

            for (let index = 0; index < c.length; index += 1) {
                if (c[index].match(/el/) != undefined) { //The match() method searches a string for a match 
                    //against a regular expression, and returns the matches, as an Array object.
                    theString.push(c[index]);
                }
            }
            theString.should.be.deepEqual(['elveda', 'selami', 'kel', 'heyelan', 'deli']);
        });
        it('should help to find repeating numbers', function () {
            let c = [10, 21, 10, 23, 64, 21, 6]; // do not touch this!
            let processed = [];
            for (let index1 = 0; index1 < c.length; index1 += 1) { // Use 2 loops for comparing numbers
                for (let index2 = 0; index2 < c.length; index2 += 1) {
                    if (index1 != index2 && c[index1] == c[index2] && processed.indexOf(c[index1]) == -1) {
                        processed.push(c[index1]);
                        continue;
                    }
                }
            }
            processed.should.be.deepEqual([10, 21]);
        });
        it('should find the numbers less then 100', function () {
            let c = [10, 83, 100, 1000]; // do not touch this!
            let processed = [];
            let index = 0;
            while (index < c.length) { // Checks all array elements
                if (c[index] <= 100) { // If number is <= 100  then adds at the end of processed array
                    processed.push(c[index]);
                }
                index += 1;
            }
            processed.should.be.deepEqual([10, 83, 100]);
        });
    });


    describe('#conditionals', function () {
        it('should choose one one value', function () {
            let c = true; // do not touch this
            let processed = 1;
            if (c === false) { //Checks the value of c, if c is false processed will be 2
                processed = 2;
            }
            processed.should.be.equal(1);
        });
        it('should evaluate the condition to a boolean', function () {
            let c = Number.isNaN('NaN'); // do not touch this
            let processed = 0;
            if (c == true) { // c is not true so the value of processed will not change
                processed = 2;
            } else {
                processed = 0;
            }
            processed.should.be.equal(0);
        });
        it('should evaluate the condition with else-if to a boolean', function () {
            let c = 'john'; // do not touch this
            let processed = null;

            if (c === 'sam') {
                processed = 'progress';
            } else if (c === 'john') {
                processed = 'take it easy'; //Changed 'take easy' to 'take it easy'
            } else {
                processed = 'go forward';
            }

            processed.should.be.equal('take it easy');
        });
        it('should evaluate the ternary operator to a value', function () {
            let c = 'iskender'; // do not touch this
            let processed = c != 'iskender' ? "AC KALDIK YINE" : 'ENFESS'; // if c is not 'iskender' then returns 'Ac kaldik yine' 

            processed.should.be.equal('ENFESS');
        });
        it('should evaluate the nested ternary operator to a value', function () {
            let c = 'mezut'; // do not touch this

            let processed = c === 'mezut' ? // If c is 'mezut' then processed equals to 'adana'
                'adana' : c === 'ferdi' ?
                'giresun' : c === 'mustafa' ?
                'antalya' : c === 'gurbet'

            processed.should.be.equal('adana');
        });
        it('should evaluate switch case ', function () {
            let city = 'adana';
            let country = null;
            city = 'luzern'; // if city = 'zurih' or 'st.gallen' or 'luzern' then country = 'CH'
            switch (city) {
                case 'adana':
                case 'istanbul':
                    country = 'NK';
                    break;
                case 'newyork':
                    country = 'US';
                    break;
                case 'zurich':
                case 'st.gallen':
                case 'luzern':
                    country = 'CH'
            }
            country.should.be.equal('CH');
        });
    });
});