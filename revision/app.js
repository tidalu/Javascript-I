//============================================================================
// alerts
//alert means display in  alert box
// alert is case sensitive
// Javascript ignores spaces exept in text string
// it is better to omit some spaces before and after parentheses and commas and semi-colons, colons and commas


// alert('thanks for your effort'); 
// window.alert('thanks for your effort'); // window.alert is very formal and perfectly correct way to write alert it does not matter which one to use
// var score = prompt('what is your name?');
// alert('your score is ' + score);
// console.log(score);


//=====================================================================
//Variables for Strings

var name = 'Mark  Zuckerberg';
var country = 'United States';
var city = 'New York';
var isMarried = false;
var isSingle = true;
var nationality = 'American';
var language = 'English';
var isAlive = true;
var isDead = false;
var isMarried = false;
var isSingle = true;
var nationality = 'American';
var language = 'English';


// 

var hisName;
hisName = 'Mark  Zuckerberg';

console.log(name + " " + hisName);

// javascript variable names can have the same value it wont be a problem



var weight = 150;

var sum = weight + 500;
weight = weight + 500;
weight += 500;
console.log(weight);
console.log(sum);


//===================================================================
// variable names legal and illegal

// -variable name cannot contain any spaces
// -variable name can be only letters,numbers,$ and underscores
// - through a varible name cannot be any of javascript's keywords, it can only contain keywords like userAlert and myVar are legal.
// - capital letters are fine but be careful, varibale names are case sensitive. A rose != Rose
// - it is better to use all the time camelCase convention for variables do  it all the time.

//===================================================================
// Math Expressions

var popularNumber = 4;
var popularNumber = 2 + 2;
alert(2 + 2);
var popularNumber = 12 - 24;
var popularNumber = 3 * 12;


var num = 10;
var popularNumber = num + 200;

var num = 20;
var anotherNumber = 1;
var popularNumber = num + anotherNumber;
var whatsLeftOver = 10 % 3; // modulus operator to find the reminder




//===================================================================
// Math expressons. Unfamiliar operations

num++;  // num = num + 1;
num--;  // num = num - 1;


num = 1;
var newNum = num++; // here we will get NewNUm = 1 becasue increament will be applied after, 

var newNum = ++num; // here we will get NewNUm = 2 becasue increament will be applied before,

var newNum = num--; // here we will get NewNUm = 1 becasue increament will be applied after,

var newNum = --num; // here we will get NewNUm = 2 becasue increament will be applied before,

//===================================================================
// Math Expressions Eliminating ambiguity
var totalCost = 1 + 3 * 4;
var totalCost = (1 + 3) * 4;
var totalCost = (1 + 3) * (4);
var totalCost = 1 + (3 * 4);

var resultOfComputation = (2 * 4) * 4 + 2;


//===================================================================
// concatenating text Strings

alert("Thanks for your input");

var messageOFf = "Thanks for your input";
alert(messageOFf);


alert("2" + "2");
// ...displays the message "22".


alert("2 plus 2 equals " + 2 + 2);
// ...JavaScript automatically converts the numbers to strings, and displays the message "2 plus 2 equals 22".


//===================================================================
//Promps 
// A promp box asks the user for some information and provides a response field for her answer.

var prom = prompt('What is your name?');
//If the user enters nothing and clicks OK, the variable is assigned an empty string: ""
// If the user clicks Cancel, the variable is assigned a special value, null.

//another alternative way of writing prompt is window.prompt() it does not matter

//===================================================================

//if statement
var n = Africa;
if (x === "Vatican City") {
    alert("You are from " + n);
}

var cooorect = "Vatican";
if (x === cooorect) {
    score++;
    UserIQ = "genious";
    window.alert("correct!");

}


//===================================================================
// COmparison Operators
if (fullName === "Mark" + " " + "Zuckerberg") { // !== means not equal
    alert("correct!"); // it is highly recommended to use triple rather than double there is a slight difference between them but it wil be true vene if u ise all the time the tripple one there wont be any problem 

}


//===================================================================
// If else and else if statements
if (score >= 10) {
    alert("You are a genius");
} else {
    alert("You are not a genius");
}


var y = "Vatican City";
if (y === "Vatican City") {
    alert("You are from " + n);
} else if (y !== "Vatican") {
    alert("You are not from " + n);
} else {
    alert("You are from somewhere which i dont really know");
}


//===================================================================
//Testing sets of conditions
// && and || are logical operators
if (weight > 300 && time < 60) {
    alert("You are healthy");
} else {
    alert("You are not healthy");
}


// we can chain any number of conditions together using && and ||
if (weight > 300 && time < 60 && isAlive) {
    alert("You are healthy");
} else {
    alert("You are not healthy");
}

if (SAT > avg || GPA > 2.5 || sport === "football") {
    alert("Welcome to Bubba State!");
}
else {
    alert("Have you looked into appliance repair?");

}

// In the following code, if the subject is over 65 and living anywhere, it's a pass. Or, if the
// subject is under 21 and living in the U.S., it's a pass.
if (age > 65 || (age < 21 && res === "U.S.")) {
    alert("You are a pass");
} else {
    alert("You are not a pass");
}


//===================================================================

//if statement nested
if (c === d) {
    if (x === y) {
        g = h;
        
    }
    else if (a === b) {
        g = h;
        
    }
    else {
        e = f;
        
    }
    
}
else {
    e = f;
    
}


// Arrays

var cities = ["New York", "Los Angeles", "Chicago"];
var fruits = ["apple", "orange", "banana"];
var numbers = [1, 2, 3, 4, 5];
var mixed = [1, "apple", "orange", "banana"];
