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
let completed  = 0;

function increment(){
    completed++;
    countEl.textContent = completed;
}

function reset(){
    countEl.textContent = 0;
    completed = 0;
}

function save(){
    let countstr = completed  + " - ";
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

