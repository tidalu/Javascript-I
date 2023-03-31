//document.getElementById("count-el").innerText = 5;

// let firstBarch = 5
// let secondBarch = 3
// let count = firstBarch + secondBarch
// console.log(count)


// task 
// let myAge = 19
// console.log(myAge)

// let yourAge = 35
// console.log(yourAge)


// let myAge = 19
// let humanDogRation = 7
// let myDogAge = myAge * humanDogRation

// console.log(myDogAge);

// let count = 5
// count = 3

// count = 7
// count += 1

// console.log(count)

// let bonusPoints = 50

// console.log(bonusPoints)
// bonusPoints += 50
// console.log(bonusPoints)

// bonusPoints -= 75
// console.log(bonusPoints)

// bonusPoints += 50
// console.log(bonusPoints)

//initialize the count as 0

//listen the clicks on the incerement button
//increment the count variable when it is clicked 
//change the count-el in the HTML to reflect to the new count


// function increment() {
//     console.log("increment");
// }


//setting up the racing 

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)

// }

// countdown();


//go 

//players are ruung the race 

//race is finished

//get ready for new race

// countdown();


// //passenger counter app

// function myLogger(){
//     console.log(42);
// }

// myLogger();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;


// function sumNumbers(){
//     let totalLapTimes = lap1 + lap2 + lap3;
//     console.log(totalLapTimes);
// }

// totalLapTimes();


//  app starts here
let countEl = document.getElementById('count-el'); // to pass in argument
let saveEl = document.getElementById('save-el');
let completed = 0;

function increment() {
    completed++;
    countEl.textContent = completed;
}

function reset() {
    countEl.textContent = 0;
    completed = 0;
}

function save() {
    let countstr = completed + " - ";
    saveEl.textContent += countstr;


}

// app end here

// let username = "per";
// let message = " You have three new notifications"
// let messageToUser = message + ", " + username + "!";
// console.log(messageToUser);  


// let name = 42;
// let greeting = "Hi, my name is ";

// let myGreeting = greeting + name;

// console.log(myGreeting);


// let points = 4;
// let bounsPoints = "10";

// let total = points + bounsPoints;
// console.log(total);

// console.log(4 + 5);
// console.log('2' + '4');
// console.log('5'+ 1);
// console.log(100 + '100');


// let welcomeEl = document.getElementById("welcome-el");

// let name = "Ulugbek";
// let greet = "welcome back ";
// welcomeEl.innerText = greet + " " + name;

// welcomeEl.innerText += '👋';



// ////////////////

let firstName = "ULUGBEK ";
let lastName = "NORBUTAEV";
let greet = " Hi there";

let fullName = firstName + lastName;

console.log(fullName);
function greetme() {
    let all = greet + ", " + fullName + "!";
    console.log(all);
}

greetme();


let myPoint = 3;

function add3Point() {
    myPoint += 3;
}


function remove1Point() {
    myPoint -= 1;
}
add3Point();
add3Point();
add3Point();

remove1Point();
remove1Point();
console.log(myPoint);


//////////////////////////////////////////////////////////////////////////////////
console.log("2" + 2); //22
console.log(11 + 7);//18
console.log(6 + "5"); //65
console.log("My points: " + 5 + 9); //my points: 59
console.log(2 + 2); // 4 
console.log("11" + "14");  //1114


///

let errorPar = document.getElementById("error");

function purchase() {
    errorPar.textContent = "Something went wrong, please try again!";
}


//////////////////////////////
let num1 = 8;
let num2 = 2;

num1 = document.getElementById("num1-el");
num2 = document.getElementById("num2-el");


let sumEl = document.getElementById("sum-el");

function add() {
    let result = num1 + num2;
    sumEl.textContent = "Sum: " + result;
}

function subtract() {
    let result = num1 - num2;
    sumEl.textContent = "Sum: " + result;
}

function multiply() {
    let result = num1 * num2;
    sumEl.textContent = "Sum: " + result;
}

function divide() {
    let result = num1 / num2;
    sumEl.textContent = "Sum: " + result;
}



// Black Jack game
let random = Math.floor(Math.random() * (11 - 2 + 1)) + 1;
let firstCard = random;
let secondCard = random;
let cards_array = [firstCard, secondCard]; // array
let hasBlackjack = false;
let isALive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEL = document.querySelector("#sum-el");
let cardsEl = document.querySelector('#cards-el');

let player = {
    name:  "Tilda",
    chips:  145
}


let playerEl = document.getElementById("player-el");
let playerChipsEl = document.getElementById("player-chips");
playerChipsEl.textContent = player.chips;
playerEl.textContent = player.name + ": $";
playerEl.appendChild(playerChipsEl);



function startGame() {
    isALive = true;
    renderGame();
}

function getRandomCard() {
    let varr = Math.floor(Math.random() * 13) + 1;
    if (varr === 1) {
        return 11;

    } else if (varr === 11 || varr === 12 || varr === 13) {
        return 1;
    } else {
        return varr;
    }
}

function renderGame() {
    // render out 1st and second card
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards_array.length; i++) {
        cardsEl.textContent += cards_array[i] + "  ";
    }
    // all cards we have
    let sum = firstCard + secondCard;
    sumEL.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        isALive = true;
    } else if (sum === 21) {
        message = "Woohoo! You have got blackjack!";
        hasBlackjack = true;
        isALive = true;
    } else if (sum > 21) {
        message = "You have busted!";
        isALive = false;
    }else {
        message = "Invalid sum";
    }

    messageEl.textContent = message;

    // cash out the money
    if (hasBlackjack === true) {
        console.log("You win!");
    } else if (isALive === true) {
        console.log("Draw!");
    } else if (isALive === false) { 
        console.log("Over!");
    }
}

function newCard() {
    if (isALive === true && hasBlackjack === false) {
        if (cards_array.length === 3) { // check if there are already 3 cards in the array
            cards_array.shift(); // remove the first card from the array
        }
        let card = getRandomCard(); // get a random card 
        cards_array.push(card); // add the new card to the end of the array
        console.log(cards_array);
        cardsEl.textContent += cards_array[2]; // render out the new card
        let sum_arr = 0;
        for (let i = 0; i < cards_array.length; i++) {
            sum_arr += cards_array[i];
        }
        renderGame();
        sumEL.textContent = "Sum: " + sum_arr;
        if (sum_arr <= 20) {
            message = "Do you want to draw a new card?";
            hasBlackjack = false;
        } else if (sum_arr === 21) {
            message = "Woohoo! You have got blackjack!";
            hasBlackjack = true;
        } else if (sum_arr > 21) {
            message = "You have busted!";
            isALive = false;
        }
    
        messageEl.textContent = message;
    
    }
    
}

// arrays
// zero indexed every langauegs
let featuredPost =
    ["check out my netlify clone",
        "here is the code my project",
        "I've just relaunched my portfolio"
    ];

let aboutMe = ["I have no experience",
    "I am a full stack developer",
    "I am a self taught developer",
    "I am a self taught developer"];

let messagees = "Same here!";
aboutMe.push(messagees);
console.log(aboutMe[4]);

aboutMe.pop();


let mix = new Array("featuredPost", 24, "ulugbek", true, false, 'two', 54);
let push = [7, 4];
push.push(9);
console.log(push);

// let age = prompt("How old are you? ");

// if (age < 21 ){
//     console.log("You are over 21, so u cannot enter here!");
// }else{
//     console.log("You are under 21, so u can enter here!");
// }



//for loops in javascript
for (let i = 0; i <= 20; i++) {
    console.log(i + " ");
}


for (let i = 10; i <= 100; i += 10) {
    console.log(i + " ");
}


let looArrays = [];
for (let i = 0; i < 10; i++) {
    // looArrays[i] = prompt("ENter the element of the array: ");

}

console.log(looArrays);
///

let again = [7, 3, 9];

for (let i = 0; i < again.length; i++) {
    console.log(again[i] + " ");
}

console.log(again.length);



//

let sentence = ["Hello", "my", "name", "is", "tidalu"];
let greeting_el = document.createElement("greeting-el");

for (let i = 0; i < sentence.length; i++) {
    greeting_el.textContent = sentence[i] + " ";
}
// let kingage = prompt("How old are you? ");

// if (kingage < 100) {
//     console.log("not eligible");
// }else if (kingage === 100){
//     console.log("Here is your borthday card form the king");

// }else if(kingage > 200){
//     console.log("are u crazy? how is it possoble, we should meet")
// }else{

//     console.log("not eligible, u have already gotten one");
// }


let player1Time = 102;
let player2Time = 107;

function totalTime() {
    return player1Time + player2Time;
}


let total = totalTime();

console.log(total);
//
// // / / / / / // / / / / / // // / / / ///// // / / // // / / / / / / //





function rollDice() {
    let randomNumber = Math.floor(Math.random() * (6)) + 1;
    return randomNumber;
}

console.log(rollDice());


///////////////////////////////

let hasSolvedChallenge = false;
let hasHinsLeft = false;

if (hasSolvedChallenge === false && hasHinsLeft === false) {
    showSolution();
}

function showSolution() {
    console.log("SHowing the solution...");
}

////

let likesDocumentaries = false;
let likesStartups = true;

if(likesDocumentaries === true || likesStartups === true) {
    recommendMovies();
}

function recommendMovies() {
    console.log("Hey check out the new movies, you like them!");
}
//\\/\/\/\/\//\/\/\/\/\/\/\\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

// objects

let course =  {
    title: "Learn css grid for free",
    lessons: 16,
    creator: "tidalu",
    length: "1 hour",
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}

console.log(course.length);
console.log(course.tags);
console.log(course.creator);
console.log(course.tags[1]);


let castle= {
    name: "Penthouse Eagles Nest - breathtaking views over",
    reviews: 22,
    rating: 4.82,
    isParkingFree : true,
    free : function(){
        console.log("Free parking is available");
    },
    offers: ["parking", "wifi", "kitchen", "air conditioning", "heating", "internet"]
}


console.log(castle.rating);
castle.free();

///////////////////


let individual = {
    name: "tidalu",
    age: 20,
    country: "Uzbekistan"
}

function logData(){
    console.log(individual.name + " is " + individual.age + " years old and lives in " + individual.country)
}
logData();

//// 
// let age_pass = prompt("How old are you? ");

// if (age_pass <= 6) {
//     console.log("You are a baby, so  it is free");
// }else if (age_pass > 6 && age_pass <= 17) {
//     console.log("you have child discount");
// }else if (age_pass > 17 && age_pass <= 26) {
//     console.log("you have a student discount");
// }else if (age_pass > 26 && age_pass <= 66) {
//     console.log("Full prices should be paid");
// }else {
//     console.log("You are a adult, so you are free");

// }

let largeCountries = [ "china", "india", "usa", "russia", "pakistan"];

for (let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i]);
}

largeCountries.pop();
largeCountries.shift();

largeCountries.push("monaco");
largeCountries.unshift("brazil");
for (let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i]);
}

/////

console.log("================================================");

let elements = ["rock", "paper", "scissors"];

function A(){
    let random_el = Math.floor(Math.random() * elements.length);
    const item = elements[random_el];
    return item;
}

console.log(A());


//////

let fruit = ["apple",  "orange", "apple", "apple", "orange"];

