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