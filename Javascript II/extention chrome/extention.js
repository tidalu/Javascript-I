



// project code



const inputBtn = document.querySelector('#input-btn');
const deleteBtn = document.querySelector('#delete-btn');
const tabBtn = document.querySelector('#tab-btn');
const ulEL = document.querySelector('#ul-el');
let myLead = [];

// myLead = JSON.parse(myLead);
// myLead.push("Norbutaev Ulugbek");
// myLead = JSON.stringify(myLead);
// console.log(typeof myLead);


const inputEl = document.querySelector('#input-el');

const leadFromLocalStorage = JSON.parse(localStorage.getItem("myLead"));



if(leadFromLocalStorage !== null){ // or just if(leadFromLocalStorage)
    
    myLead = leadFromLocalStorage;
    render(myLead);
}

function render(leads){
    let listItems = ""
    for(let i = 0; i < leads.length; i++){
        listItems += `<li>
                        <a href='${leads[i]}' target='_blank'>
                        ${leads[i]}
                        </a>
                    </li>`;
        // console.log(listItems);
        // second way
        // const li = document.createElement('li');
        // li.textContent = myLead[i];
        // ulEl.append(li);
    }
    ulEL.innerHTML = listItems;
    
}

inputBtn.addEventListener("click", function(){
    myLead.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLead", JSON.stringify(myLead));
    // console.log(myLead);
    render(myLead);
    console.log( localStorage.getItem("myLead"));
})

deleteBtn.addEventListener("dblclick", function(){
    myLead = [];
    localStorage.clear();
    render(myLead);
})

tabBtn.addEventListener("click", function(){
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    //     myLead.push(tabs[0].url);
    //     localStorage.setItem("myLead", JSON.stringify(myLead));
        
    // });
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        
        myLead.push(tabs[0].url);
        localStorage.setItem("myLead", JSON.stringify(myLead));
        render(myLead);
    } )
    // myLead.push(tabs.url1);
    // localStorage.setItem("myLead", JSON.stringify(myLead));
    // render(myLead);
    // console.log(tabs.url1);
});










///// practise for new topics on the course


// const scr = document.createElement('script');

// scr.textContent = "alert('hello')";
// body.append('script')







// function save() {
//     console.log('clicked');
// }

// let inputBtn = document.getElementById('input-btn');

// inputBtn.addEventListener("click", function(){
//     console.log('clicked bu whatever')
// })













//template strings/literals

// const recipient = "John";
// const sender = "Jane Doe "; 

// const main = `
// hey ${recipient} 
// !how are you 
// doing today? ${sender}`;

// console.log(main);







// let box = document.getElementById('box');

// box.addEventListener("click", function(){
//     console.log('I want to open the box');
// })

// const playerName = "per";
// let credits = 45;
// credits = credits - 10;


// const basePrice = 520;
// const discount = 120;
// let shippingCost = 12;
// let shippingTime = "5 - 12 days";

// shippingCost = 15;
// shippingTime = "7-14 days";


// let fullPrice = basePrice - discount + shippingCost;

// console.log(fullPrice);

// const container = document.getElementById('container');

// container.innerHTML = "<button onclick='buy()'> Click Me </button>";


// function buy() {
//     container.innerHTML += "<p>Thank you for your purchase!</p>";
// }











//truthy and falsy 

// const fund =  0;

// if(fund > 0){
//     console.log('you have money');
// }else{
//     console.log('you dont have money');
// }

// truthy 
//falsy statements un js

//false
//0
//""
//null
//undefined
//NaN

// let currentViewers = null;

// currentViewers = [ "John", "Jane", "Mark"];
// currentViewers.push("Norbutaev Ulugbek");
// if(currentViewers){
//     console.log('you have a viewer');
// }else{
//     console.log('you dont have a viewer');
// }



// console.log( Boolean("")); //false
// console.log( Boolean("0")); // true
// console.log( Boolean(100)); // true
// console.log( Boolean(null)); //false
// console.log( Boolean([0])); // true
// console.log( Boolean(0)); // true

// localStorage.clear();




const welcomeEL = document.querySelector('#welcome-el');
// let nameUser = prompt("Enter your name");

function showWelcome(greeting, person, emodji){
welcomeEL.textContent = `${greeting}  ${person}${emodji}`;
}

showWelcome("Assalomu alaykum", "","");


//





// function addNumbers(num1, num2){
//     return num1 + num2;
// }

// console.log(addNumbers(2,3));
// console.log(addNumbers(2,4));
// console.log(addNumbers(2,5));
// console.log(addNumbers(2,6));
// console.log(addNumbers(2,7));
// console.log(addNumbers(2,8));



// let array = [1,2,3,4,5,6,7,8,9,10];


// function getFirst(arr){
//     return arr[0];
// }

// console.log(getFirst(array));


///////RECAP


// const
// const name = document.querySelector('#name');
// const age = 25;
// const isSingle = false;
// const isMarried = false;
// const city = "Tashkent";
// const country = "Uzbekistan";
// const languages = ["uz", "ru", "en"];


//addEventListener
// name = addEventListener("click", function(){
//     name.textContent = "John Doe";
//})

// innerHTML- it is actually to render elements, tags inside of the HTML file as it's own element not as string, but it's a string


//input.value -- to get the value of the input


// function.parameters

//template strings 
// const message = `Hello ${name}`;



// localStorage
// localStorage.setItem("name", "Norbutaev Ulugbek");
// localStorage.setItem("age", 25);
// localStorage.getItem("name");
// localStorage.removeItem("age");
// localStorage.clear();
// console.log(localStorage.getItem("age"));
// console.log(localStorage.getItem("name"));
// console.log(localStorage.length);
// console.log(localStorage.key(0));
// console.log(localStorage.key(1));
// console.log(localStorage.key(2));
// console.log(localStorage.key(3));
// console.log(localStorage.key(4));
// console.log(localStorage.key(5));


// JSON object -- to turn array to JSON
// JSON.parse(localStorage.getItem("myLead"));
// JSON.parse(localStorage.getItem("myLead"));
// JSON.stringify(localStorage.getItem("myLead"));


// objects in arrays
// const myLead = JSON.parse(localStorage.getItem("myLead"));
// console.log(myLead);
// console.log(myLead[0]);
// let person = {
//     name: "Norbutaev Ulugbek",
//     age: 25,
//     isSingle: false,
//     isMarried: false,
//     city: "Tashkent",
//     country: "Uzbekistan",
//     languages: ["uz", "ru", "en"]
// }
// console.log(person.name);
// console.log(person.age);
// console.log(person.isSingle);
// console.log(person.isMarried);
// console.log(person.city);
// console.log(person.country);



