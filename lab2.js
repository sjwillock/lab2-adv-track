'use strict';

// LAB 2: SORTING AND CAMPY SCI-FI

// Welcome to Lab 2 =)

// Be sure to read all the comments!

// All of the instructions are inline with the assignment below.
// Look for the word TODO in comments.  Each TODO will have a
// description of what is required.

// To run this file (in the terminal) use: node lab2.js

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.

*/

function Blob() {
}

var blob = new Blob();

var population = 1000;
var hoursToConsumeEntireTown = 0;
while (population > 0) {
  population = population - hoursToConsumeEntireTown;
  hoursToConsumeEntireTown++;
}

var hoursSpentInDowington = hoursToConsumeEntireTown; // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

function hoursToOoze(population, peoplePerHour) {
  var newPopulation = population;
  var hours = 0;
  while (newPopulation > 0) {
    newPopulation = newPopulation - (hours * peoplePerHour);
    hours++;
  }
  return hours;
  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.
}

hoursToOoze(1000, 1);

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  var newPopulation = population;
  var hours = 0;
  while (newPopulation > 0) {
    newPopulation = newPopulation - (hours * peoplePerHour);
    hours++;
  }
  return hours;
};

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

assert(blob.hoursToOoze(10000, 3) === 0);
assert(blob.hoursToOoze(750, 2) === 0);
assert(blob.hoursToOoze(10000000, 1) === 0);

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  federationStandard: 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

function SentientBeing(homePlanet, language) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.homePlanet = homePlanet;
  this.language = language;
}

// sb is a SentientBeing object
var sb = new SentientBeing('Qo\'noS', 'klingon');

function sayHello(sb) {
    switch (hello[SentientBeing.language]) {

      case 'klingon':
        console.log(hello.klingon);
        break;

      case 'romulan':
        console.log(hello.romulan);
        break;

      case 'federationStandard':
        console.log(hello.federationStandard);
        break;

      default:
        break;

    }
    return hello[sb.language];
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    //TODO: put this on the SentientBeing prototype
  }

sayHello(sb);

SentientBeing.prototype.sayHello();

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

function Klingon() {
}

Klingon.prototype = new SentientBeing();

function Human() {
}

Human.prototype = new SentientBeing();

function Romulan() {
}

Romulan.prototype = new SentientBeing();

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert((new Romulan()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');

assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');

assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');

assert((new Klingon()).sayHello(new Human()) === 'hello',
  'the human should hear hello');

assert((new Romulan()).sayHello(new Human()) === 'hello',
  'the human should hear hello');

//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one (the assertions are how you
// will test your code)
//*********************************************************

var stringArray = ['lukas', 'sharon', 'steve'];
var stringArray2 = ['mothballs', 'led zepplin', 'machu pichu'];
function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    if (a.slice(-1) < b.slice(-1)) {
      return -1;
    } else if (a.slice(-1) > b.slice(-1)) {
      return 1;
    } else {
      return 0;
    }
  }
  stringArray.sort(byLastLetter);
  return stringArray;
}
lastLetterSort(stringArray);

assert(lastLetterSort(stringArray) === ['steve', 'sharon', 'lukas'],
  'stringArray should be sorted by the last letter of each string');

assert(lastLetterSort(stringArray2) === ['led zeplin', 'mothballs', 'machu pichu'],
  'stringArray should be sorted by the last letter of each string');

    //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // Read this about how the sort function works:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // this byLastLetter function is a "compare function"
    // And check out the "comparing strings" section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

var numberArray = [1, 2, 3, 4];
var numberArray2 = [85, 2000, 567, 5049290];

function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using forEach
  var arraySum = function(element) {
    sum = sum + element;
  };
  numberArray.forEach(arraySum);
  return sum;
}
sumArray(numberArray);
sumArray(numberArray2);

assert(sumArray(numberArray) === 10, 'sum of numberArray = 10 should return');

assert(lastLetterSort(stringArray2) === 5051942, 'sum of numberArray2 (5,051,942) should return');

var arrayOfArrays = [[576, 37, 985], [1, 3, 7], [56, 220, 181]];
var arrayOfArrays2 = [[2, 15, 489], [1, 2, 3], [8, 7], [1987, 45, 236]];
var numberArray = [];

function sumArray(numberArray) {
  var sum = 0;
  var arraySum = function(element) {
    sum = sum + element;
  };
  numberArray.forEach(arraySum);
  return sum;
}
sumArray(numberArray);

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(a, b) {
    if (sumArray(a) < sumArray(b)) {
      return -1;
    } else if (sumArray(a) > sumArray(b)) {
      return 1;
    } else {
      return 0;
    }
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
  });
  return arrayOfArrays;
}
sumSort(arrayOfArrays);

assert(sumSort(arrayOfArrays) === [[1, 3, 7], [56, 220, 181], [576, 37, 985]],
  'should sort the arrays within the arrays by the sum of the elements');

assert(sumSort(arrayOfArrays2) === [[1, 2, 3], [8, 7], [2, 15, 489], [1987, 45, 236]],
  'should sort the arrays within the arrayOfArrays2 by the sum of the elements');

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
