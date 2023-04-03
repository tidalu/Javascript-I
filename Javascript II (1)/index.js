console.log("hello world");


var number = 5; // here variable is initialized to 5, now i am writing comment

/*
but herer it is multiline comment
*/

var number = 9;

// data types and variables

// undefined is smth whic is undefined
// null is smth whic is null( empty )
// boolean is smth whic is true or false
// string is smth which is a sentence actually
// number is smth which is a number


// to declare var is one way is using var keyword

var number = 5;
var myName = "John";
var isCool = true;
var isAwesome = false;

// second way is using let keyword
let ourName = "freecodecamp ";

const pi = 3.14;// cosntant is a variable that can't be changed


// difference of the var and let is var is global and let is local

// assigning variable
var a;
var b = 2;
a = 7;
a = b;
a = "hello";
b = 2;
console.log(a);
console.log(b);//
//

var a = 7;
var b = 2;
var c = "I am a";

//variable names and functioon names in javascript is casensitive
var studioRoom = "studio room";

console.log(studioroom); //it will give  an error

//increment and decrement

var a = 5;

a++; // increment

console.log(a);

a--; // decrement

console.log(a);

// decimal numbers

var d = 3.14;

console.log(d);
var e = 3.14;

console.log(e);

// 

// argumented math operators

var a = 5;
var b = 2;
var c = 12;



a = a + 12; // a += 12;
b = a - 12; // b -= 12;
c = c * 12; // c *= 12;

// declaring string variables

var myName = "John";
var myname = "freecodecamp";

var hisname = "john";
var hername = "freecodecamp";

// escaping literal quotes

var str = "I'm a string but here inside there is a \" quotes\"";
var STR = 'I\'m a string but here inside there is a \' quotes\'';
var literal = ` it is good but it has some problems probably ${argument}`;

///////

// \' // single quote
// \" // double quote
// \n // new line
// \t // tab
// \r // carriage return
// \b // backspace
// \f // form feed
// \0 // null
// \x00 // null
// \u0041 // a
// \\ backslash

console.log(str);
// 

function wordblack(myNoun, myAdjective, myAdverb, myAdverb) {
    var result = "";
    result += myNoun + " " + myAdjective + " " + myAdverb + " " + myAdverb;

    return result;

}


console.log(wordblack());


var ourArr = [1, 2, 3, 4, 5, "hello"];

var myNoun = ["Quincy", 1];
var myAdjective = new Array();


/// uwaga it is nested arrays are coming out

var ourArray = [["the universe", 24], ["the stars", 12]];

var myNoun = [["Quincy", 1], ["Quincy", 1]];


// access multi-dimensional arrays
var multiArray = [["the universe", 24], ["the stars", 12], [7, 8, 9], [[10, 11, 12], 13, 14]];
multiArray.push(["the universe", 24]);
multiArray.pop();
multiArray.shift();
multiArray.unshift(["the universe", 24]);

var mydata = multiArray[0][0];
var mydata = multiArray[0][1];
var mydata = multiArray[1][0];
var mydata = multiArray[1][1];
var mydata = multiArray[2][0];
var mydata = multiArray[2][1];
var mydata = multiArray[2][2];
var mydata = multiArray[3][0][0];
var mydata = multiArray[3][0][1];
var mydata = multiArray[3][0][2];
var mydata = multiArray[3][1];
var mydata = multiArray[3][2];


// shopping list

var list = [["milk", 2], ["sugar", 3], ["chocolate chips", 3], ["eggs", 12]];


function nextinline(arr, item) {
    var item = arr[0];
    return item;
}


//booleans

function isCool() {
    return true;
}


/// equality operators

function isEqual(a, b) {
    if (a == b) // it is preferable to use ===, double == is actualy temp to use the same typpes, but tripple oone doesnot care at all
    {
        return true;
    }
    else // !== is the opposite of ===
    {
        return false;
    }
}

// logical order in if else statements

// be careful with the order of if else statements

//switch statements

var day = "sunday";

switch (day) {
    case "monday":
        console.log("monday");
        break;
    case "tuesday":
        console.log("tuesday");
        break;
    case "wednesday":
        console.log("wednesday");
        break;
    case "thursday":
        console.log("thursday");
        break;
    case "friday":
        console.log("friday");
        break;
    case "saturday":
        console.log("saturday");
        break;
    case "sunday":
        console.log("sunday");
        break;
    default:
        console.log("not a valid day");

}

//return boolean statements from fucctions

function isless(a, b) {
    if (a < b) {
        return true;
    }
    else {
        return false;
    }
}

//objects

var ourdog = {
    name: "Quincy",
    legs: 4,
    tails: 4,
    isTall: [true, false]
};

// there are two ways of accessing to the object, one is dot notation -person.name
// and the other is bracket notation -person['name of the property']

// we can u use dot notation to change the value of a property

mydog.name = "happy code";

// we can add property to an object using bracket/doot notation

mydog.newproperty = "new property"; //or mydog.['new property'] = "new property";

//  deleting object properties

delete mydog.isTall;

// object for loookup


function phoneticlookup(val) {
    var result = '';


    var lookup = {
        alpha: "monday",
        beta: "tuesday",
        gamma: "wednesday",
        delta: "thursday",
        epsilon: "friday",
        zeta: "saturday",
        eta: "sunday"
    };

    switch (day) {
        case "monday":
            console.log(lookup.alpha);
            break;
        case "tuesday":
            console.log(lookup.beta);
            break;
        case "wednesday":
            console.log(lookup.gamma);
            break;
        case "thursday":
            console.log(lookup['delta']);
            break;
        case "friday":
            console.log(lookup.epsilon);
            break;
        case "saturday":
            console.log(lookup.zeta);
            break;
        case "sunday":
            console.log(lookup['eta']);
            break;
        default:
            console.log("not a valid day");

    }
}

//manipulating complex objects

var complex = [
    {
        "name": "Quincy",
        "age": 12,
        "isTall": true
    },
    {
        "career": "teacher",
        "name": "Quincy",
        "age": 12,
        "isTall": true,
        "formats": ["music", "movies", "books"]
    }
]

console.log(complex[0].name, complex[1].career, complex[1].formats[2]);


//nested objects
var mystorage = {
    "car": {
        "inside": {
            "name": "Ford",
            "model name": "Mustang",
            "year": 1964
        },
        "outside": {
            "name": "Ford",
            "model": "Mustang",
            "year": 1964
        }
    }
}



var mystorage1 = mystorage.car.inside["model name"];


// accessing nested arrays

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "lily"
        ]
    },
    {
        type: "trees",
        list: [
            "pine",
            "birch",
            "oak"
        ]
    }
];

var secondTree = myPlants[1].list[1];

//record collections

var collections = {
    "2548": {
        "album": "The Wall",
        "artist": "Pink Floyd",
        "tracks": [
            "Sgt. Pepper's Lonely Hearts Club Band",
            "The Beatles",
            "Abbey Road",
            "The Beatles"
        ]
    },
    "2468": {
        "album": "Sgt. Pepper's Lonely Hearts Club Band",
        "artist": "The Beatles",
        "tracks": [
            "Abbey Road",
            "The Beatles"
        ]
    },
    "2348": {
        "album": "Abbey Road",
        "artist": "The Beatles",
        "tracks": [

        ]
    },
    "2468": {
        "album": "The Beatles",
        "artist": "The Beatles",
        "tracks": [
            "Abbey Road",
            "The Beatles"
        ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};


var collectionCopy = JSON.parse(JSON.stringify(collections)); // it is to copy the object  just a fancy way in javascript


function updateRecords(id, prop, value) {
    if (value === "") {
        delete collectionCopy[id][prop];
    } else if (prop === "tracks") {
        collections[id][prop] = collections[id][prop] || [];
        collections[id][prop].push(value);
    } else {
        collections[id][prop] = value;
    }

    return collections;



}


// iterate with while loops

var myARR = [];
var i = 0;

while (i < 5) {
    myARR.push(i);
    i++;
}

console.log(JSON.stringify(myARR));


// odd numbers with for loops

var theirArr = [];
for (var i = 1; i < 10; i += 2) {
    theirArr.push(i);
}
console.log(theirArr);
// for (var i = 0; i < 10; i++) {
//     theirArr.push(i);
// }

// console.log(theirArr);

// iterate through an array with a for loop
var newrr = [9, 10, 11, 12];
var ototal = 0;

for (var i = 0; i < newrr.length; i++) {
    ototal += newrr[i];
}

console.log(ototal);

var _hello = [2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < _hello.length; i++) {
    total += _hello[i];
}


// nesting for loops

function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product += arr[i][j];
        }
    }
    return product;
}

var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


//iterate do...while loop

var i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);

// profile lookups
function lookupProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) { // contacts is here an object i did not write cuz it was tonns of lines
        if (contacts[i].name === name) {
            return contacts[i][prop];
        } else {
            return "not found";
        }
    }
    return "not found such contact";
}

//random fractions and whole numbers

function randomFunction() {
    var num1 = Math.floor(Math.random() * 100);
    var num2 = Math.floor(Math.random() * 100);
    var num3 = Math.floor(Math.random() * 100);
    var num4 = Math.floor(Math.random() * 100);
    var num5 = Math.floor(Math.random() * 100);
    var num6 = Math.floor(Math.random() * 100);
    var num7 = Math.floor(Math.random() * 100);
    var num8 = Math.floor(Math.random() * 100);
    var num9 = Math.floor(Math.random() * 100);
    var num10 = Math.floor(Math.random() * 100);
    var num11 = Math.floor(Math.random() * 100);

    return num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10 + num11;
} //

// random numbers range in javascript 

var rnd = Math.floor(Math.random() * (max - min + 1)) + min;



// parseINT function returns a number takes string

function converttoInt(str) {
    return parseInt(str)// parseInt(str, 10) returns a decimal number
}

converttoInt("1234");

// ternary operator 
// condition ? statement-if-true : statement-if-false;

function checkEqual(a, b) { // 
    if (a == b)
        return true; //return a === b? true: false;
    return false;
}

// var vs let
//The difference between let and var is in the scope of the variables they create: Variables declared by let are only available inside the block where they're defined. Variables declared by var are available throughout the function in which they're declared.


const myVar = "hello";// it is constant and it is impossible variable

// mutate an array declated with const

const s = [1, 2, 3];  // it is possible to reassign array even if it is declared as const

function editinplace() {
    "use strict";


    s[0] = 10;
};


// prevent object mutation


function freezeObj() {
    " use strict";
    const Math_conts = {
        PI: 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679
    };
    Object.freeze(Math_conts); // this will prevent the object from being mutated

    try {
        Math_conts.PI = 99; // after this onject will  be mutatted, to revent this we should use Object.freeze(Math_conts)
    } catch (ex) {
        console.log(ex);
    }
    return Math_conts.PI;

};

console.log(Math_conts.PI);


// Arrow Functions---Arrow functions introduce concise body syntax, or implicit return. This allows the omission of the curly brackets and the return keyword. Implicit return is useful for creating succinct one-line operations in map , filter , and other common array methods.

var magic = function () { // var magic = () => {};
    return new Data();
};

// modeified function
// const magic = () => new Data();



var MYConcat = function (arr1, arr2) {
    return arr1.concat(arr2);
}

// modified to arrow function

// const MYConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(MYConcat([1, 2, 3], [4, 5, 6]));


// higher order functions

const realNumberArr = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2.71];

const squareList = (arr) => {
    const sqauredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x); // filter returns a new array with all the elements of the original array that pass the test implemented by the provided function;
    return sqauredIntegers;
};

const squaredIntegers = squareList(realNumberArr);
console.log(squaredIntegers);


// Default parameters

const increment = (function () {
    return function increment(number, value = 1) {
        return number + value;
    };
})();

console.log(increment(5, 2));
console.log(increment(5));


//// rest operator - What Exactly Is the Rest Operator? The rest operator is used to put the rest of some specific user-supplied values into a JavaScript array. The three dots ( ... ) in the snippet above symbolize the rest operator. The text after the rest operator references the values you wish to encase inside an array

const sum = (function () {
    return function sum(...args) {
        args = [x, y, z];
        return args.reduce((a, b) => a + b, 0);
    };
})();

console.log(sum(1, 2, 3));


/// spread operator-- he JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

const arr1 = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
let arr2;
(function () {
    arr2 = [...arr1];  //
    arr1[0] = 'potato'
})();
console.log(arr2);


// Destructiong assignments 

// var voxel = {
//     x: 3.6,
//     y: 7.4,
//     m: 6.54
// };

// var x = voxel.x;  // x = 3.6
// var y = voxel.y;  // y = 7.4 -- it is old way of desturcting voxel 
// var m = voxel.m;  // z = 6.54


// const { x: h, y: k, z: p } = voxel;  // a = 3.6, b = 7.4, c = 6.54  -- it is new way of desturcting voxel

const AVG_TEMPERATURE = {
    today: 77.5,
    tomorrow: 78.5
};

function getTempOfTmrw(avgTempratures) {
    " use strict";
    //
    const { tomorrow : tempOfTomorrow } = avgTempratures;

    //

    return tempOfTomorrow;
}


/// 

const LOCAL_FORECAST = {
    today : {
        min: 72,
        max: 90
    },
    tomorrow : {
        min: 73,
        max: 91
    }
}

function getMaxofTmrw(avgTempratures) {
    " use strict";

    const {tomorrow: {max :maxOfTomorrow}} = forecast;

    return maxOfTomorrow;
}

console.log(getMaxofTmrw(LOCAL_FORECAST));


///
const [z, x] = [1, 2, 3, 4, 5, 6];
console.log(z, x);

let an = 8, bn = 6;

(() => {
    "use strict";
    [an, bn] = [bn, an];


})();
console.log(an);
console.log(bn);


//use destruct operator with the rest operator

const source = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10];

function removeFirsttwo(list) {
    const [  , , ...arr] = list ;
    return arr;
}
const arr = removeFirsttwo(source);
console.log(arr);
console.log(source);

// use destructing assignment to pass aan object as a function's paramenters

const stats = {
    max: 0,
    standardDeviation: 0,
    median: 0,
    mode: 0,
    min: 0,
    average: 0
};

const half = (function() {
    return function half({max, min}) {
        return (max + min) / 2.0;
    };

})();

console.log(stats);
console.log(half(stats));

//// create strings using template literals

var perqson = {
    name : "Ali",
    age : 25,
    gender : "male"

};
const greeting = `hello ${perqson.name} 
you are ${perqson.age} years old and you are a ${perqson.gender}`;
console.log(greeting);


// simple Fields

const person = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };

    //simpler method
};
// const createPerson = ( name , age, gender) => ( {name , age, gender});

console.log(person("Ali", 25, "male"));


// write concise declarative functions

// const bicycle = {
//     gear: 2
//     setGear: function(newGear) {
//         "use strict";
//         this.gear = newGear;
//     }
// };
//simpler way
// const bicycle = {
//     gear: 2,
//     setGear(newGear) {
//         this.gear = newGear;
//     }
// }
// bicycle.setGear(3);
// console.log(bicycle.gear);


// use class syntax to deine a cosntructor function

var  spaceShuttle = {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}


// simpler method
class  spaceShuttle1 {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}

var zeus = new spaceShuttle("neptune");

console.log(zeus.targetPlanet);

//
function makeClass(){
    class vegetable {
        constructor(name) {
            this.name = name;
        }
    }
    return vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
console.log(carrot.name);


//getters and setters


class book  {
    construct(author) {
        this.author = author;
    };

    get writer() {
        return this._author;
    };

    set writer(updateAuthor){
        this._author = updateAuthor;
    }
};

function makeClass() {

    class Thermostat{
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature() {
            return this._temp;
        }
        set temperature(updateTemp) {
            this._temp = 5/9 * (updateTemp - 32);
        }
    }

    return Thermostat;
}

const Thermostat = makeClass();
const thermostat = new Thermostat(76);
let temp = thermostat.temperature;
thermostat.temperature = 20;
temp = thermostat.temperature;
console.log(temp);


// disfference between import and require
import {
    capitalizeString
} from "./string.function.js";
const cap = capitalizeString("hello");

console.log(cap);




// inport everything from a file

import * as capitalizeString from "string.function.js";


// create  an Export Fallback with export default
export default function subtract(a, b) {
    return a - b;
}
