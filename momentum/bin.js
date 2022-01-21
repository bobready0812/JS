function sayHello(nameOfPerson, age) {
    console.log("Hello my name is"+ nameOfPerson+ "and I'm")    
}
    sayHello("nico", 10);
    sayHello("dal", 23);
    sayHello("lynn", 21);

function plus(firstnumber,secondnumber) {
    console.log(firstnumber+secondnumber);
    }

function divide(a,b){
    console.log(a/b);
}
divide(98,20);
plus(8,60);

const player = {
    name: "nico",
    sayHello: function(otherPersonsName) {
        console.log("hello! "+ otherPersonsName + " nice to meet you");
    },
};



console.log(player.name)
player.sayHello("edin");
player.sayHello("nico");

const calculater = {
    plus: function (a,b) {
    return a+b;
    },
    minus: function (a,b) {
    return a-b;
    },
    times: function (a,b) {
    return a*b;
    },
    divide: function (a,b) {
    return a/b;
    },
    power: function (a,b) {
    return a**b;
    },  
};




const toBuy = ["potato", "tomato", "pizza"]
toBuy[2]
console.log(toBuy[2]);
toBuy[2]="water";
toBuy.push("meat");

const days = ["mon","tue","wed","thu","fri","sat","sun"];
console.log(days[2]);
console.log(days[0]);
days[3]="edin";
console.log(days[3]);
days.push("Boom");
console.log(days);

const gamePlayer  = {
    name: "Edin",
    age: 20,
};
gamePlayer.name="Edin Ryu";
gamePlayer.sexy="soon"
console.log(gamePlayer);

function plus(you,I) {
    console.log(you,I);
}
plus(28228454545+9979);

function minusFive(number){
    console.log(number -5)
}
    minusFive(29840,29874,2395785968);

const calculatorAgain = {
    plus: function(a,b){
    return a+b;
    },
    minus: function(a,b){
    return a-b;
    },
    divide: function(a,b){
    return a/b;
    },
    times: function (a,b) {
    return a*b;
    },
    power: function (a,b){
    return a**b;
    },
};
const plusResult = calculatorAgain.plus(7,2);
const minusResult = calculatorAgain.minus(plusResult,2);
const timesResult = calculatorAgain.times(3,minusResult);
const divideResult = calculatorAgain.divide(timesResult,plusResult);
const powerResult = calculatorAgain.power(divideResult,minusResult);
console.log(calculatorAgain);


const age = 67;
function calculatorKrAge(ageOfForeigner){
    ageOfForeigner+2;
    return "hello";
};

const krAge = calculatorKrAge(age);

console.log(krAge);