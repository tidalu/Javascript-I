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



// Black JAck game

let hasBlackjack = false;
let isALive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEL = document.querySelector("#sum-el");
let cardsEl = document.querySelector('#cards-el');
console.log(messageEl)
let random = Math.floor(Math.random() * (11 - 2 + 1)) + 1;
let firstCard = random;
let secondCard = random;
cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
let sum = firstCard + secondCard;
sumEL.textContent = "Sum: " + sum;


function startGame() {

    if (sum <= 20) {
        message = "Do u wanna draw a new card?";
        hasBlackjack = false;
    } else if (sum === 21) {
        message = "wohoo! you have got blackjack!";
        hasBlackjack = true;
    } else {
        message = "you have busted!";
        isALive = true;
    }


    messageEl.textContent = message;





    // cash out the money
    if (hasBlackjack) {
        console.log("you win!");
    } else if (isALive) {
        console.log("you lost!");
    } else {
        console.log("you tied!");
    }
}

function newCard() {
    let card = 7;
    // message = "You got a new card!";
    cardsEl.textContent += '\-' + card;
    sum += card;
    // sumEL.textContent = "Sum: " + sum;
    // messageEl.textContent = message;
    startGame();

}





// let age = prompt("How old are you? ");

// if (age < 21 ){
//     console.log("You are over 21, so u cannot enter here!");
// }else{
//     console.log("You are under 21, so u can enter here!");
// }


///

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

//