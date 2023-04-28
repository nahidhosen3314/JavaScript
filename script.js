
// const demo = document.querySelector("#demo");
// const btn = document.querySelector(".btn");



// btn.addEventListener('click', function(){
//     demo.innerHTML = Date();
// })

// const input = document.querySelector("#input");
// const h2 = document.querySelector("h2");

// input.addEventListener('keydown', function(){
//    h2.innerHTML = this.value;
// });


// let text = "kldjfioerfioereiorrirkdsjkflerjrt";
//     console.log(text.length);

// const country = "hello mico";
// const a = 4;
// const b = 5;
// const jack = `hi   ${country} ${a+b}`;
// console.log(jack);

// let price = 10;
// let VAT = 0.25;
// let total = `Total: ${(price * (1 + VAT))}`;


// let price = "5";
// let vat = "2";
// let total = `Totle ${price * vat} taka`;
// console.log(total);

// let a = 25;
// let b = 25;
// let c = "50000000";
// let nahid = a + b + c;
// console.log(nahid);

// let a = NaN;
// let b = 20;
// let jon = a + b;
// console.log(jon);

// let x = 123;
// let jack = Number(x);
// console.log( jack);
// --------------------------
// let x = Number.MAX_VALUE;
// console.log(x);
// ----------------------------
// let y = Number.MIN_VALUE;
// console.log(y);
// -----------------------------------
// let z = Number.POSITIVE_INFINITY;
// console.log(z);
// ----------------------------
// let p = Number.NEGATIVE_INFINITY;
// console.log(p);
// ----------------------------
// let q = Number.NaN;
// console.log(q);
// ---------------------------------------------------------
// onst parsent = ["nahis", "hello", "nico", "mango", 23];

// parsent[5] = "jos";
// parsent[6] = "joss";
// parsent[7] = "jara";
// console.log(parsent[parsent.length - 1]);
// -----------------------------------------------------

// while loop
// const fruitss = ["Banana", "Apple", "Jackfruit", "Pinapple", "Orange"]
// i=0;
// while( i<fruitss.length ){
//     console.log(fruits[i]);
//     i++;
// }
// ------------------------------------------------------
// const lamiya = ["hello", "jon", "nico", "for"];
// for( x=0; x<lamiya.length; x++){
//     console.log(lamiya[x]);
// }
// -------------------------------------------------
// const rupa = ["hello","for","hi",34,"34"];

// for( x=0; x<rupa.length; x++ ){
//     console.log(rupa[x]);
// }

// ------------------------------------------------
// const car = ["hello", "nico", "for"];
// document.getElementById("full_array").innerHTML = car;


// const volvo = ["hello", "jon", "nico"];
// console.log(volvo[volvo.length -1]);
// -----------------------------------------------
// const jon = ["hello", "nico", "for", "BMW"];

// let jack = jon.length

// for( x=0; x<jack; x++ ){
//     console.log(jon[x]);
// }
// -----------------------
// jon.forEach(function myFunction(element){
//     console.log(element);
// });
// ----------------------------------
// jon.forEach( element => {
//     console.log(element);
// });
// ------------------------------------------------------------
// function myFunction(name, age){
//     return `My name is ${name}. I am ${age} years old.`;
// }
// console.log(myFunction("Nahid", 20));
// ============================================================
// Foreach loop
// const car = ["BMW", "Volvo", "Toty"];
// function myFunction(element){
//     console.log(element);
// }
// car.forEach(myFunction);
// ----------------------------------------------------------------
// const person = ["Nico", "jack", "jassi", "mico"];
// person.forEach(function MyFunction(element){
//     console.log(element);
// });
// ========================================================
// const person = ["Nico", "jack", "jassi", "mico"];
// for( x=0; x<person.length; x++ ){
//     console.log(person[x]);
// }

// -----------------------Foreach------------------------------
// const person = ["Nico", "Mico", "Jon", "Jack"];
// person.forEach(function myFunction(element){
//     console.log(element);
// });
// -------------------------------------
// const car = ["BMW", "Volvo", "Toty"];
// car.forEach(function myFunction(element){
//     console.log(element);
// });
// ----------------------------------------
// const person = ["Nico", "Mico", "Jon", "Jack"];
// for(x=0; x<person.length; x++){
//     console.log(person[x]);
// }
// -----------------------------------------------
// const car = ["BMW", "Volvo", "Toty"];
// car.forEach(function myFunction(element){
//     console.log(element);
// });
// const car = ["BMW", "Volvo", "Toty"];
// function myFunction(element){
//     console.log(element);
// }
// car.forEach(myFunction);
// -----------------------------------
// const person = ["Nico", "Mico", "Jon", "Jack"];
// person.forEach(function myfunction(element){
//     console.log(element);
// })
// -----------------------------------
// const car = ["BMW", "Volvo", "Toty"];
// function myFunction(element){
//     console.log(element);
// }
// cars.forEach(myFunction);
// ---------------------------------
// const person = ["Nico", "Mico", "Jon", "Jack"];
// for(x=0; x<person.length; x++){
//     console.log(person[x]);
// }

// ----------------Add array---------------------
// const fruits = ["Banana", "Orange", "Apple"];
// function myFunction() {
//   fruits[fruits.length] = "Lemon";
//   console.log("fruits");
// }
// -----------------------------------------------------
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let hello = fruits[fruits.length] = "Kiwi";
// console.log(hello);
// ----------------------------------------------------
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);
// ----------------------------------------------------------

// const hello = ["jon", "nico", "jaci"];
// const hi = ["nahid", "jahid", "asad"];
// const hii = ["nahid", "jahid", "asad"];
// let all = hello.concat(hi,hii);
// console.log(all);
// --------------------------------------
// const hello = ["jon", "nico", "jack", "nahid", "jahid"];
// let jon = hello.slice(3);
// console.log(jon);
// --------------------------------------------------------

// const hello = ["jon", "nico", "jack", "nahid", "jahid"];
// document.getElementById("demo").innerHTML = hello.toString();

// const hi = ["jon", "nico", "jack", "nahid", "jahid"];
// document.getElementById("demo1").innerHTML = hello;
// -------------------------------------------------------------

// const person = ["nahid","jahid","asad", "boni"];
// console.log(person.sort());
// console.log(person.reverse());
// ----------------------------------------------------------

// const Number = [12, 100, 4, 7, 3, 9, 1, 10, 2, 5, 8, 6];
// Number.sort(function (a, b){
//     return a - b;

// });
// console.log(Number);

// ------------------------------------------------

// const Number = [100, 5, 3, 2, 7, 9, 8, 1, 4, 6, 10];
// Number.sort(function (a, b){
//     return a - b;
// });
// console.log(Number);
// -------------------------------------

// const Number = ["nahid", "jahid", "asad", "bonni", "doli"];
// Number.sort();
// console.log(Number);

// ---------------------------------------------------
// const person = ["nahid", "jahid", "asad", "jon", "nico"];
// for(x=0; x<person.length; x++)
// console.log(person[x]);


// -------------------------------------------------
// const persons = ["nahid", "jahid", "asad", "jon", "nico"];
// persons.forEach(function myFunction(element){
//     console.log(element);
// })
// -------------------------------------------

// const personss = ["nahid", "jahid", "asad", "jon", "nico"];
// personss.forEach(function myFunction(element){
//     console.log(element);
// })
// -----------------------------------
// const personss = ["nahid", "jahid", "asad", "jon", "nico"];
// for(x=0; x<personss.length; x++)
// console.log(personss[x]);

// const person = ["nahid","jahid,", "asad", "bonni"];
// console.log(person.sort());
// ------------------------------------
// const number = [4,5,6,7,8,9,10,1,100];
// number.sort(function (a, b){
//     return a - b;
// });
// console.log(number);
// =--------------------------

// const count = [40,100,1,5,25,10];
// count.sort(function (x, y){
//     return x - y ;
// })
// console.log(count);
// ----------------------------------------------

// const counts = [1,2,3,9,8,7,6,5,4];
// console.log(counts.sort());
// =-============================================

// const count = [20,30,56,2,4,7,];
// count.sort(function (a,b){
//     return 0.5 - Math.random();
// })
// console.log(count);
// =====================-------------------------

// const number = [2,1,3,5,4,6,8,7,9];

// number.sort(function (a, b){
//     return b - a ;
// })
// console.log(number);

// console.log(number[0]);

// console.log(number[number.length - 1]);
// ------------------------------------------------------
// const number = [2,3,4,5,6,9];
// let jon = Math.min.apply(null, number);
// console.log(jon);
// -----------------------------------------------------------
// const number = [2,3,4,5,1,9,8,7,6,10 ];
// let count =Math.min.apply(null,number);
// console.log(count);
// ----------------------------------------------------------

// const number = [1,100,2,3,4,5,10,9,8,7,6];
// let max = number[0];
// for( x=1; x<number.length; x++ ){
//     if(number[x] > max){
//         max = number[x];
//     }
// }
// console.log(max);
// ------------------------------------------------------------

// const count = [1,3,2,5,4,6,8,7,9,10];
//  let max = count[0];
//  for(x = 1; x<count.length; x++){
//     if(count[x] > max){
//         max = count[x];
//     }
//  }
// console.log(max);
// ------------------------------------------------------------------
// const number = [2,1,3,5,4,7,6,8,9,10];
// let max = number[0];
// for( x=1; x<number.length; x++ ){
//     if( number[x] > max ){
//         max = number[x];
//     }
// }

// console.log(max);

// ===========================================================

// const btn = document.querySelector(".btn");
// let input = document.querySelector("#input");
// let text = document.querySelector("#text");

// btn.addEventListener("click",function(){

//     const number = input.value;
//     let count = 0;
//     for ( x=1; x<=number; x++ ){
//         if( number%x === 0 ){
//             count++;
//         }
//     }

//     if(count === 2){
//         text.innerHTML = `${number} is Prime Number`;
//     }
//     else{
//         text.innerHTML = `${number} is Not Prime`;
//     }


// })
// --==============================================================
// const number = 10;
// let count = 0;
// for( x = 1; x<=number; x++ ){
//     if ( number%x === 0 ){
//         count++;
//     }
// }

// console.log(count);
// -------------------------------------------------------------
// const number = [2,3,4,6,5,8,7,9,10];
// let count =  number[0];
// for( x=1; x<number.length; x++ ){
//     if( number[x]>count ){
//         count = number[x];
//     }
// }
// console.log(count);

// =======================================================

//  const number = [1,3,4,5,6,7,8,10];
//  let count = number[0];
//  for( x=1; x<number.length; x++ ){
//     if( number[x]>count ){
//         count = number[x];
//     }
//  }

//  console.log(count);

// ------------------------------------------------------====
// const number = 3;
// let count = 0;
// for( x=1; x<number; x++ ){
//     if( number%x === 0 ){
//         count ++
//     }
// }
// console.log(count)
// ------------------------------------------------------
// const number = [1,3,4,5,6,7,8,10];
// let count = number[0];
// for( x=1; x<number.length; x++ ){
//     if( number[x]> count ){
//         count = number[x];
//     }
// }
// console.log(count);
// -------------------------------------------------------
// const number = 3;
// let count = 0;
// for(x=1; x<number; x++){
//     if(number%x === 0){
//         count++
//     }
// }
// console.log(count);
// --------------------------------------------------

// const number = [2,3,4,5,6,9];
// let jon = Math.max.apply(null, number);
// console.log(jon);

// =============================================

// const Number = [100, 5, 3, 2, 7, 9, 8, 1, 4, 6, 10];
// Number.sort(function (a, b){
//     return a - b;
// });
// console.log(Number);

// ---------------------------------------

// const car = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"MBW", year:2010}
// ];

// car.sort(function (a, b){
//     return a.year - b.year;
// });
// console.log(car);
// ============================================

// const car = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"MBW", year:2010}
// ];

// car.sort(function (a, b){
//     let x = a.type.toLowerCase();
//     let y = b.type.toLowerCase();
//     if (x < y){
//         return - 1;
//     }
//     if (x > y){
//         return + 1;
//     }
//     return 0;
// });
// console.log(car);

// ----------------------------------

// const number = [3,6,7,8,4];
// function myFunction(value, index, array){
//     console.log(value);
//     console.log(index);
//     console.log(array);
//     console.log("______");
// }
// number.forEach(myFunction);
// --------------------------------------------------
// const count = [4,5,6,7,9,2];
// function myFunctions (array){
//     console.log(array);
// }
// count.forEach(myFunctions);
// ---------------------------------------------


// const number = [ 2,3,6,8,9];

// function myFunction (value){
//     return value * 3;
// }

//  let count = number.map(myFunction);

//  console.log(count);
// ------------------------------------------------------------

// const number = [3,6,1,9,10,20,15];
// function myFunction (value ,index, array){
//     return value < 10;
// }

// let count = number.filter(myFunction);
// console.log(count);
// -----------------------------

// const number = [2,3,4,9,7,5,1];
// function myFunction (totle, value, index, array){
//     return totle + value;
// }

// let count = number.reduce(myFunction);
// console.log(count);
// ---------------------------------------------

// const number = [3,5,4,6,7,9,8,20];
// function myFunction (value , index , array){
//     return value > 9;
// }
// let count = number.every(myFunction);
// console.log(count);

// ----------------------------------------
// const number = [3,5,4,6,7,9,8,20];
// function myFunction (value , index , array){
//     return value > 9;
// }
// let count = number.some(myFunction);
// console.log(count);
// -------------------------------

// const person = ["Nahid", "Jahid", "Asad", "Jack", "Nico"];
// let count = person.indexOf("Nahid" + 1);
// console.log(count);

// -----------------------------------
// const person = ["Nahid", "Jahid", "Asad", "Jack", "Nico", "Nahid"];
// let count = person.lastIndexOf("Nahid" + 1);
// console.log(count);
// ---------------------------------------------------

// const person = ["Nahid", "Jahid", "Asad", "Jack", "Nico"];
// let count = person.includes("Nahid");
// console.log(count);

// ---------------------------------------------

// const number = [3,5,4,6,7,9,8,20];
// function myFunction (value , index , array){
//     return value > 9;
// }
// let count = number.find(myFunction);
// console.log(count);
// ---------------------------------------


// const number = [3,5,4,6,7,9,8,20];
// function myFunction (value , index , array){
//     return value > 9;
// }
// let count = number.findIndex(myFunction);
// console.log(count);
// -------------------------------------

// console.log(Array.from("ABCDEFGHIJKL"));

// ----------------------------------

// const person = [ "nahid", "jahid", "asad", "jack"];
// let count = person.keys();
// console.log(count);
// -------------------------------------------------
// {
// const count =  new Date();
// document.getElementById("demo").innerHTML = count.toDateString();
// }
setInterval (myfunction);
function myfunction()

{
const d = new Date();
let text = d.toLocaleString();
document.getElementById("demo").innerHTML = text;
}
// -----------------------=============================

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)
// new Date(date string)

// const counts =  new Date(2022,8,30,7,30,1,0);
// console.log(counts);

// =============================================
// const d = new Date("August 12, 2014 12:00:01");
// console.log(d);
// -----------------------------

// const number = new Date();
// let hello = number.toString();
// console.log(hello);

// ---------------------------------------
// const hello = new Date();
// console.log(hello.toUTCString());


// const d = new Date();
// console.log(d.toDateString());

// ========================================================

// getFullYear() 	Get the year as a four digit number (yyyy)
// getMonth() 	Get the month as a number (0-11)
// getDate() 	Get the day as a number (1-31)
// getDay() 	Get the weekday as a number (0-6)
// getHours() 	Get the hour (0-23)
// getMinutes() 	Get the minute (0-59)
// getSeconds() 	Get the second (0-59)
// getMilliseconds() 	Get the millisecond (0-999)
// getTime()

// const d = new Date();
// console.log(d.getTime());

// ====================================================

// const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const d = new Date();
// let count = month[d.getMonth()];
// console.log(count);
// ----------=================--------------------------------

// const d = new Date();
// const hello = d.setFullYear(2020, 11, 3);
// console.log(hello);


// const d = new Date();
// const month = d.setDate(d.getDate() + 50);

// console.log(month);
// ----------------------------------

// const d = new Date();
// const date = d.setMonth(10);
// console.log(date);

// const number = ["One", "Two", "There", "Four", "Five"];
// for(x = 0; x<number.length; x++){
//     console.log(number[x]);
// }

// const d = new Date();
// const year = d.setFullYear(2020,03);
// console.log(year);
// -----------------===============--------------
// setDate() 	Set the day as a number (1-31)
// setFullYear() 	Set the year (optionally month and day)
// setHours() 	Set the hour (0-23)
// setMilliseconds() 	Set the milliseconds (0-999)
// setMinutes() 	Set the minutes (0-59)
// setMonth() 	Set the month (0-11)
// setSeconds() 	Set the seconds (0-59)
// setTime()

// const d = new Date();
// d.setSeconds(6);
// console.log(d);
// ---------------------------------------------

// -----------------Problems = 01---------------------------------

// let hello ;
// const today = new Date();
// const someday = new Date();
// someday.setFullYear(2020 , 1, 14);

// if(someday > today){
//     hello = "Today is before January 12, 2020";
// }
// else{
//     hello = "Today is after January 12 , 2020";
// }
// console.log(hello);
// ---------------------------

// const d = new Date();
// d.setFullYear(2020,8,1);
// console.log(d);
// -------------------------------------

// let text;
// const today = new Date();
// const someday = new Date();
// someday.setFullYear(2020);
// if(someday > today){
//     text = "Today is After 2021";
// }
// else{
//     text = "Today is Before 2021";
// }

// console.log(text);
// ------------------------------------------------------
// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.SQRT2);
// console.log(Math.SQRT1_2);
// console.log(Math.LN2);
// console.log(Math.LN10);
// console.log(Math.LOG2E);
// console.log(Math.LOG10E);
// --------------------------------------------

// console.log(Math.round(x));	
// console.log(Math.ceil(x));	
// console.log(Math.floor(x));	
// console.log(Math.trunc(x));	

// console.log(Math.round(4.5));
// console.log(Math.ceil(2.1));
// console.log(Math.floor(2.1));
// console.log(Math.trunc(8.2));
// console.log(Math.sign(4));
// console.log(Math.pow(4, 2));
// console.log(Math.sqrt(64));
// console.log(Math.abs(-64));

// console.log(Math.sin(90 * Math.PI / 180));
// console.log(Math.cos(0 * Math.PI / 180));

// let count = Math.min(2,3,5,4,7,6,8,10);
// console.log(count);

// let number = Math.max(2,3,5,4,7,6,8,10);
// console.log(count);

// console.log(Math.random());

// console.log(Math.log2(64));
// console.log(Math.log10(100));

// Math.floor(Math.random() * 10);
// console.log(Math.floor(Math.random() * 10));


// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// Math.floor(Math.random() * 10 );
// -----------------------------------------------

// const number = Math.floor(Math.random() * 11);
// console.log(number);

// console.log(Math.floor(Math.random() * 10 + 1));

// ------------ludo-----------------------

// video no > 31 Problem--------------==========,,,,,,,,......

// ---------------------------------------
// function getRndInteger ( min , max){
//     return Math.floor(Math.random() * (max - min + 1) + min) ;
// }
// console.log(getRndInteger(0,6));
// --------------------------------------------
{
let count = document.querySelector(".text");
function getRndInteger ( min , max){
    return Math.floor(Math.random() * (max - min + 1) + min) ;
}

count.innerHTML = getRndInteger(0,6);
}

// ------------------------------------------------
// const student = [ "Nahid", "Shakib", "Rana", "Rakib", "Rasel", "Hanif", "Asad"];
// console.log(student.sort());
// console.log(student);

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   }

//   console.log(getRndInteger(0, 6));

// const roll_number = [ 4,5,6,3,2,8,1,2,7,10.9];
// roll_number.sort(function ( a, b){
//     return b - a ;
// })
// console.log(roll_number);

// function InleapYear (Year){
//     if ((Year % 400 === 0) || (( Year % 4 === 0) && (Year % 100 !== 0))){
//         console.log(`${Year} is leap year`);
//     }
//     else{
//         console.log(` ${Year} is not leap year`);
//     }
// }
// InleapYear(2021);



// function InLeapYear(Year){
//     if( ( Year % 400 === 0) || ((Year % 4 === 0) && ( Year % 100 !== 0))){
//         console.log(`${Year} is leap year`);
//     }
//     else{
//         console.log(`${Year} is not leap year`);
//     }
// }

// InLeapYear(2020);

// -----------------------Duplicates Number-----------------------------------------

// const number = [4,5,4,2,3,5,7,6];
// const duplicates = number.filter(function(value, index, array){
//     return array.indexOf(value) !== index;

// });
// console.log(duplicates);



// const student = [ "nahid", "rana", "rakib", "rana", "nahid"];
// const count = student.filter(function(value, index, array){
//     return array.indexOf(value) ===index;
// })

// console.log(count);

// Video 30 is done and The End 

// ==================================================================================
//  Video 31 is start 
// ----------------------------------------------------------------------------------

// console.log(Boolean(10 > 9));


// let x = 100;
// const y = 200;
// const totle = Boolean(x < y);
// console.log(totle);


// 100 > is always true

// 3.14 > is always true

// -15 > is always true

// "Hello" > is always true

// "false" > is always true

// 7 + 1 + 3.14 > is always true


// let x = 10 / "Hello";
// console.log(Boolean(x));

// let x = false;
// let y = new Boolean(false);
// const count = (x===y);
// console.log(count);   

// let x = new Boolean(true);
// let y = new Boolean(true);
// const count = (x===y);
// console.log(count);

// let x = 5;
// let y = 9;
// const count = (x == y);
// console.log(count);


// let x = 20;
// let y = 200;
// if(x > y){
//     console.log(`${x} is greater than ${y}`);
// }
// else{
//     console.log(`${x} is less than ${y}`);
// }


// let x = 20;
// let y = 200;
// const count = x > y; 
// if(count){
//     console.log(` This is ${count}`);
// }
// else{
//     console.log(`This is ${count}`);
// }
// -------------------
// let age = 17;
// if( age >= 18){
//     console.log("You are Adule!");
// }else{
//     console.log("You are Unadult");
// }

// -----------------------------------
// let age = 15;
// const count = (age >= 18);
// if(count){
//     console.log(`${count} You are Adult`);
// }else{
//     console.log(`${count} You are Unadult`);
// }

// -------------------same here------------------------
// let age = 18;
// if(age>= 18){
//     console.log("you are adult");
// }
// else{
//     console.log("you are not adult");
// }

// let age = 14;
// console.log( age>=18 ? "You are adult" : "you are not adult" );

// // -----------------------------------------------
//let age = 30;
//console.log(age >= 18 ? (age < 30) ? "you are an adult" : "you are old" : "you are unadult");

// let age = 17;
// //console.log(age>=18 ? (age<30) ? "you are young" : "you are old" : "you are adult");

// let age = 12;
// if(age>=18){
//     if(age<30){
//         console.log("you are adult");
//     }else{
//         console.log("You are old");
//     }
// }else{
//     console.log("you are unadult");
// }

// const age = 18;
// if(age>=18){
//     if(age<30){
//         console.log("You are adult");
//     }else{
//         console.log("You are old");
//     }
// }else{
//     console.log("You are unadult");
// }

// const age = 2;
// console.log(age>=18 ? (age<30) ? "YOU ARE ADULT" : "YOU ARE OLD" : "YOU ARE UNADULT");

// ---------------------------------------------------

// let age = "eioteoprt";
// age = Number(age);
// if(isNaN(age)){
//     console.log("INPUT IS A NOT NUMBER");
// }else if(18 < age){
//     console.log("YOU ARE YOUNG");
// }else{
//     console.log("YOU ARE CHILD ")
// }
// -------------------------------------------------------

// const btn = document.querySelector(".btn");
// let input = document.querySelector("#input");
// let text1 = document.querySelector(".text");


// btn.addEventListener("click", function(){
//     let age = input.value;
//     age = Number(age);
//     if(isNaN(age)){
//         text1.innerHTML = ("INPUT IS NOT A NUMBER");
//     }else{
//         text1.innerHTML = (age >= 18 ? ( age < 30 ) ?"YOU ARE ADULT" : "YOU ARE OLD" :"YOU ARE CHILD" )
//     }
// });

// -----------------------------------------------------

// const title = "shakib";
// if(title == "shakib"){
//     console.log("i am shakib");
// }else{
//     console.log("i don'n know");
// }

// ----------------------------------

// let age = 31;
// if(age < 18){
//     console.log("You are child");
// }else if (age == 18){
//     console.log("You are adult");
// }else if(age > 18 && age < 30){
//     console.log("You are maturad");
// }else{
//     console.log("You are old");
// }

// console.log( new Date().getHours());

// if(new Date().getHours() < 18){
//     console.log("Good day");
// }else{
//     console.log("Good Evening");
// }

// --------------------------------------

// const time = new Date().getDate();
// if(time < 10){
//     console.log("Good Morning");
// }else if (time < 20){
//     console.log("Good day");
// }else{
//     console.log("Good Evening");
// }
// -----------------------------------------
// switch (time = new Date().getDate()) {
//     case time<10:
//         console.log("Good Morning");
//         break;
//     case time < 20:
//         console.log("Good day");
//         break;
//     default:
//         console.log("Good Evening");
//         break;
// }
// -----------------------------------------------------

// let age = 38;
// switch(age){
//     case age < 18:
//         console.log("You are child");
//         break;
//     case age == 18:
//         console.log("You are adult");
//         break;
//     case (age > 18 && age < 30):
//         console.log("You are machurd");
//         break;
//     default:
//         console.log("You are old");
// }

// ----------------------------------------------------------

// let day = new Date().getDay();
// switch(day){
//     case 0:
//         console.log("sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Firday");
//         break;
//     case 6:
//         console.log("Saturday");
//     default:
//         console.log("not a number");
// }

// -----------------------------------------------------------


// let x = 1;
// switch(x){
//     case 0:
//         console.log("off");
//         break;
//     case 1:
//         console.log("on");
//         break;
//     default:
//         console.log("No value found");
// }

// -------------FOR LOOP------------------------------

// let person = ["nahid", "jahid", "asad", "joy", "mico"];
// for( x = 0; x < person.length; x++ ){
//     console.log(x);
// }

// const latter = ["a", "b", "c", "d", "e"];
// for( x = 0; x < latter.length; x++ ){
//     console.log(latter[x]);
// }

// ----------------------------------------------------

// let x = 0;
// for(; ; x++){
//     if( x > 10 ){
//         break;
//     }else{
//         console.log(x);
//     }
// }

// let x = 10;
// for(; ; x--){
//     if( x == 1 ){
//         break;
//     }else{
//         console.log(x);
//     }
// }
// ---------------------------------------------------

// let x = 5;
// for( let x = 0; x < 10; x++){
//     console.log(x);
// }
// console.log("this is", x);

// var y = 5;
// for(  var y = 0; y < 10; y++ ){
//     console.log(y);
// }
// console.log("helo world", y);

// --------------FOR LOOP IN-------------------------------------

// const person = {FirstName: "Nahid", LastName: "Hosen", Ago: "20" };home district
// for( let x in person ){
//     console.log(person[x]);
// }

// const personla_addres = {FirstName: "Nahid", ListName: "Hosen", Ago: "20", Home_District: "Madariput"}

// for( let x in personla_addres ){
//     console.log(personla_addres[x]);
// }

// const Number = [ 2,4,6,8,9,1,3,5];
// for( let x in Number ){
//     console.log(Number[x]);
// }

// const person = ["Nico", "jack", "jassi", "mico"];
// person.forEach(function MyFunction(element){
//     console.log(element);
// });

// const number = [ 4,5,7,9,2,1,3,8];
// number.forEach(function MyFunction(value, index, array){
//     console.log(value);
// })

// const person = [ "jon", "nahid", "nico", "mico"];
// for(x = 0; x<person.length; x++){
//     console.log(person[x]);
// }

// const person = ["nahid", "nico", "mico", "jack", "jon"];
// person.forEach(function myfunction (value, index, array){
//     console.log(value);
// })

// const number = [4,7,8,9,1,3];
// for( let x in number ){
//     console.log(x);
// }

// const counts = [3,4,5,6,7,2,3,1];
// for( let x of counts ){
//     console.log(x);
// }

// ------------------------WHILE LOOP-------------------------------------

// const fruitss = ["Banana", "Apple", "Jackfruit", "Pinapple", "Orange"]
// i=0;
// while( i<fruitss.length ){
//     console.log(fruitss[i]);
//     i++;
// }

// const number = [4,5,6,8,3,2,1];
//     x = 0;
// while( x <number.length ){
//     console.log(number[x]);
//     x++;
// }


// let x = 0;
// while(x < 10 ){
//     console.log("The value is " + x);
//     x++;
// }

// const cars = ["BMW", "Volvo", "Saab", "Ford", ];

// let i = 0;
// while (cars[i]) {
//  console.log(cars[i]);
//   i++;
// }

// -------------break--------------------

// for( x = 0; x < 10; x++ ){
//     if ( x===3 ){break;}
//     console.log(x);
// }

// for( x = 0; x < 10; x++){
//     if( x === 3 ){continue;}
//     console.log(x);
// }

// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let text = "";

// list: {
//   text += cars[0] + "<br>"; 
//   text += cars[1] + "<br>"; 
//   break list;
//   text += cars[2] + "<br>"; 
//   text += cars[3] + "<br>"; 
// }

// const person = ["nahid", "jack", "mico", "jon"];

// hello:{
//     console.log(person[0]);
//     console.log(person[1]);
//     break hello;
//     console.log(person[2]);
//     console.log(person[3]);
// }

// for (i = 0; i < 10; i++) {
//     console.log(i);
//     if (i == 5) { break; }
//   }

// ----------------------------set([])---------------------------------

// Set create

// let latter = new Set(["a","b","c","d","e","F","g"]);
// console.log(latter.size);

// Set add 

// let latter = new Set();
// latter.add("a");
// latter.add("b");
// latter.add("c");
// latter.add("d");
// latter.add("e");
// console.log(latter.size);


// const latter = new Set();

// let a = "a";
// let b = "b";
// let c = "c";

// latter.add("a");
// latter.add("b");
// latter.add("c");
// latter.add("a");

// console.log(latter.size);

// let latter = new Set (['a','b','c','d','e','f','g','h']);
// let hello = "";
// latter.forEach(function (value){
//     // console.log(value);
//     hello += value;
// })
// console.log(hello)

// let latter = new Set (['a','b','c','d','e']);
// console.log(latter.values());

// -------------Map----------------------

// const person = new Map([["nahid",20],["jahid",25],["asad",30]]);
// console.log(person.get("asad"));

// let person = new Map ([
//     ["nahid",20],
//     ["jahid",25],
//     ["asad",30],
// ]);
// console.log(person.get("jahid"));
// -----------------------------------------
// const fruits = new Map();
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);

// console.log(fruits.get("bananas"))

// let person = {
//     fname : "nahid";
// }
// console.log(person[fname]);

// ------------------48--------------------

// myFunction();
// function myFunction(){
//     let person = "jon, mico";
//     console.log(typeof person  + " " + person);
// }
// console.log(typeof person);

// var person = "jack, mico";
// console.log(window.person);

// var carName = "Volvo";
// console.dir(window);

// let person = "Jon , Jack";
// myfunction();
// function myfunction(){
//     let person = "Volvo, TaTa";
//     console.log(person);
// }

// Myfunction(4 , 5);
// function Myfunction (a, b){
//     console.log(a + b);
// }

// x = 5;
// console.log(x);
// var x;

// function myfunction(){
//     x = 5;
//     console.log(x);
//     var x;
// }
// myfunction()

// var x = 5;
// console.log(x,  y);
// var y = 6;

// let PERSON = "JAVA";
// let person = "JavaScript";

// function getfunction (){
//     if (!person){
//        person = PERSON;
//     }
//     return person;
// }
// console.log(`I love ${getfunction()}`);


// function myfunctions(){
    
//     person = "bangladesh";
//     var person;
//     console.log(person);
// }
// myfunctions();

// myfunction();
// function myfunction(){
//     "use strict"
//     x = 4;
//     console.log(x);
// }


// const person = {firstname: "nahid", lastname: "hosen", id: 444837, address: "madaripur",
//   fullname: function(){
//     return this.firstname + " " + this.lastname + " "+ this.address;
//   }

// };
// console.log(person.fullname());


// const hello = {
//   firstname: "nahid",
//   lastname: "hosen",
//   roll_number: 444837,
//   address: "madaripur",
//   fullname_address: function(){
//     return this.firstname + " " + this.lastname + " " + this.roll_number;
//   }
// };
// console.log(hello.fullname_address());


// const personla_addres = {
//   First_name: "nahid",
//   Last_name: "hosen",
//   Roll_number: 444837,
//   Address: "madaripur",

//   Full_address: function(){
//     return this.First_name + " " + this.Last_name + " roll " + this.Roll_number;
//   }
// }
// console.log(personla_addres.Full_address());

// const person = {
//     firstName : "nahid",
//     lastName : "hossen",

//     full_name: function(){
//         return this.firstName + " " + this.lastName;
//     },
//     get_Function: function(){
//         return this.full_name();
//     }
// }

// console.log(person.get_Function());


// const person = {
//     FullName: function (){
//         return this.First_Name + " " + this.Last_Name;
//     },

// }
// const person2 = {
//     First_Name: "nahid",
//     Last_Name: "hosen",
// }

// console.log(person.FullName.call(person2));

// const person = {
//     first_name  : "Jon",
//     last_name   : "Don",
// }

// const theme = {
//     full_name : function(){
//         return this.first_name + " " + this.last_name;
//     }
// }

// console.log(theme.full_name.call(person));

// const person = {
//     first_name: "nahid",
//     last_neme:  "hosen",

//     fullname: function() {
//         return this.first_name + " " + this.last_neme;
//     }
// }
// console.log(person.fullname());


// hello = () => {
//     return "hello world";
// }

// console.log(hello());


// hello = () => "This is person";
// console.log(hello());

// hello = (val) => "this why " + val;
// console.log(hello("nahid"));
// -------------------------------------------------------
// use calsses
// class Car{
//     constructor(name, year, location){
//         this.name = name;
//         this.year = year;
//         this.location = location;
//     }
// }
// const myCar = new Car("BMW", 2019, "From Amricak");
// console.log(myCar.name + " " + myCar.year + " " + myCar.location);

// class Car {
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }
// }
// const car1 = new Car("BMW", 2014);
// const car2 = new Car("Towto", 2018);
// const car3 = new Car("Yahama", 2016);

// console.log(car1.name + " " + car1.year);
// console.log(car2.name + " " + car2.year);
// console.log(car3.name + " " + car3.year);


// class Car {
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }
// }

// const mycar = new Car("BMW", 2020);
// console.log(mycar.name + " " + mycar.year);

// class person  {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// const Myperson = new person("nahid", 23);
// console.log(Myperson.name + " " + Myperson.age);
// -----------------------------------------
// class person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     hello(){
//         console.log(`${this.name} is age ${this.age}`);
//     }
// }

// const Myperson1 = new person ("nahid", 30);
// const Myperson2 = new person ("jahid", 39);

// Myperson1.hello();
// Myperson2.hello();
// ------------------------------------------
// class person {
//     constructor(name , age){
//         this.name = name ;
//         this.age  = age;
//     }

//     hello (status){
//         console.log(`${this.name} is age ${this.age} ${status}`);
//     }

// }

// const Myperson1 = new person ("Sharitpur Polytechnic Institue" , 23);
// const Myperson2 = new person ("Madariput Govd" , 25);

// Myperson1.hello("Well");
// Myperson2.hello("Bed");

// --------------------------------------------------------

// const message = () => {
//     const name = "Jesse";
//     const age = 40;
//     return name + ' is ' + age + 'years old.';
//     };
// console.log(message());
// ----------------------------------------

// let text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// const hello = JSON.parse(text);
// console.log(hello.employees[1].lastName);
// ------------------------------
// const person = {
//     FirstName: "Nahid", 
//     LastName : "Hosen"
// }
// console.log(JSON.stringify(person));
// -------------------------------------
// let x = "hello";
// x = 23;
// console.log(typeof x); //A variable can change its data type:
// -----------------------

// ----------------------Problem = 02--------------------------

// const text = "Lorem, ipsum nahid dolor e. nahid hello Nahid";

// const count = text.match(/nahid/gi);
// const hello = count ? count.length : 0;
// console.log(hello);


// const text = "Lorem ipsum nahid dolor e. nahid hello Nahid";

// let count = text.search(/nahid/i);
// count = count >= 0 ? count : "Not found";
// console.log(count);

// const person = ["nahid", "jahid", "asad"];
// person.forEach(function Myfunction(value){
//     console.log(value);
// });

// let persons = ["jon", "jack", "nico"];
// let count = persons.length;
// for( let i = 0; i<count; i++){
//     console.log(persons[i]);
// }

// function linearSearch (array , value){
//     let length = array.length;
//     for( let i = 0; i<length; i++ ){
//         if(array[i] === value){
//             return i;
//         }
//     }
//     return "not found!";
// }
// console.log(linearSearch(["a", "b", "c", "d", "c"], "c"))


// function linearSearch (array , value){
//     const length = array.length;
//     for( let i = 0; i<length; i++){
//         if( array[i] === value )
//         return i;
//     }
//     return "not found";
// }
// console.log(linearSearch(['a','b','d','f','c'], 'c'));
// ------------------------------------------------------------------------------
// 1-100 bevajo 3,5 and 3,5 bevajo bar koro

// function fizzBuzz (number){
//     for( let i = 1; i<=number; i++ ){
//         if(i % 15 === 0){
//             console.log(`${i} is FizzBuzz`);
//         }
//         else if(i % 3 === 0){
//             console.log(`${i} is Fizz`);
//         }
//         else if (i % 5 === 0){
//             console.log(`${i} is Buzz`);
//         }
//            else{
//                 console.log(i);
//            }
//     }
// }
// fizzBuzz(100);

// function FizzBuzz(number){
//     for( let i = 1; i <= number; i++){
//         if (i % 15 === 0){
//             console.log(`${i} is FizzBuzz`);
//         }
//         else if(i % 3 === 0){
//             console.log(`${i} is Fizz-`);
//         }
//         else if (i % 5 === 0){
//             console.log(`${i} is Buzz`);
//         }
//         else{
//             console.log(i);
//         }
//     }
// }
// FizzBuzz(100);  

// const hello = ["jack", "lws", false, "", "Thanks all", NaN, true, 40, undefined, "nahid hosen"];

// const count = hello.filter(function(element){
//     if(element){
//         return true;
//     }else{
//         return false;
//     }
// });
// console.log(count);

// const hello = ["jack", "lws", false, "", "Thanks all", NaN, true, 40, undefined, "nahid hosen"];

// const count = hello.filter (function (element){
//     if(element){
//         return true;
//     }else{
//         return false;
//     }
// });

// console.log(count);


// const hello = ["jack", "lws", false, "", "Thanks all", NaN, true, 40, undefined, "nahid hosen"];

// const count = hello.filter(Boolean);
// console.log(count);

// const obj = {a: "lws", b: undefined, c: "nahid hosen", d: false, e: NaN, g: true, h: "", i: 40, j:"k",};

// const hello = function(obj){
//     for( let i in obj ){
//         if(!obj[i]){
//             delete obj[i];
//         }
//     }
//     return obj;
// };

// console.log(hello(obj));

// const obj = {a: "lws", b: undefined, c: "nahid hosen", d: false, e: NaN, g: true, h: "", i: 40, j:"k",};

// const hello = function (obj){
//     for( let i in obj ){
//         if( !obj[i] ){
//             delete obj[i];
//         }
//     }
//     return obj;
// }
// console.log(hello(obj));

// ----------------------Problem = 02 End--------------------------

// const person = {
//     firstname: "nahid",
//     lastname: "hosen",
//     age: 54,
// }
// const x = person;
// console.log(x.firstname + " " + x.lastname);

// const person = {
//   firstname: "John",
//   lastname: "Doe",
//   age: 50,
//   eyecolor: "blue"
// };
// console.log(person["firstname"] + " is " + person["lastname"]);

// const person = {
//   firstname: "John",
//   lastname: "Doe",
//   age: 50,
//   eyecolor: "blue"
// };
// person.country = "bangladesh";
// person.age = 20;
// delete person.eyecolor;
// console.log(person);


// const person = {
//     firstname : " nahid",
//     lastname  : " hosen ", 
//     age       : 23,
// }

// let text = "";
// for( let i in person ){
//     text = text + person[i];
// }
// console.log(text);


// const person = {
//     firstname : " nahid", 
//     lastname  : " hosen ",
//     age       : 23,
// }
// text = "";
// for( let x in person ){
//     text += person[x];
// };
// console.log(text);

// const person = {
//     firstname : "nahid",
//     lastname  : "hosen",
//     age       : 23,
//     cars      :{
//         car1 : "bmw",
//         car2 : "tvs"
//     }
// }
// console.log(person.cars.car2);

// const person = {
//     firstname : "nahid",
//     lastname  : "hosen",
//     age       : 23,
//     cars      :{
//         car1 : "bmw",
//         car2 : "tvs"
//     }
// }
// console.log(person["cars"]["car2"]);

// const person = {
//     firstname : "nahid",
//     lastname  : "hosen",
//     age       : 23,
//     cars      :{
//         car1 : "bmw",
//         car2 : "tvs",
//     }
// }
// let p1 = "cars";
// let p2 = "car1";
// console.log(person["p1"]["p2"]);

// ------------------------------------------------------
// let x = "";
// const myobj = {
//     name: "John",
//     age: 30,
//     cars: [
//         {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//         {name:"BMW", models:["320", "X3", "X5"]},
//         {name:"Fiat", models:["500", "Panda"]}
//     ]
// };

// for ( let i in myobj.cars ){
//   x += myobj.cars[i].name ;
//     for( let j in myobj.cars[i].models ){
//         x += myobj.cars[i].models[j];
//     };
// };
// console.log(x);

// let x = "";
// const myobj = {
//     name: "John",
//     age: 30,
//     cars: [
//         {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//         {name:"BMW", models:["320", "X3", "X5"]},
//         {name:"Fiat", models:["500", "Panda"]}
//     ]
// };

//     for ( let i in myobj.cars ){
//         x += myobj.cars[i].name;
//         for( let j in myobj.cars ){
//             x += myobj.cars[i].models[j];
//         }
//     }

// console.log(x);


// const person = {
//     firstname : "nahid",
//     lastname  : "hosen",
// }
// person.fullname = function(){
//     return (this.firstname + " " + this.lastname + " " + this.age).toUpperCase();
// }
// person.age = 34;
// console.log(person.fullname());

// let x = "";
// const person = {
//     firstname : " nahid",
//     lastname  : " hosen ",
//     age       : 23,
// }
// for( let i in person ){
//     x += person[i];
// }
// console.log(x);

// let x = "";
// const person = {
//     firstname: " nahid",
//     lastname : " hosen ",
//     age      : 23,
// };
// const personArray = Object.values(person);

// for ( let i in personArray ){
//     x += personArray[i];
// }
// console.log(x);

// const person = {
//     firstname: " nahid",
//     lastname : " hosen ",
//     age      : 23,
// };

// const personArray = Object.values(person);

// for( let i of personArray ){
//     console.log(i);
// }

// const person = {
//     firstname: " nahid",
//     lastname : " hosen ",
//     age      : 23,
//     today    : new Date(),
//     age      : function (){
//         return 33;
//     }
// };

// person.age = person.age.toString;

// console.log(JSON.stringify(person));

// const person = ["nahid", "nico", "mico", "jack"];
// const convart = JSON.stringify(person);
// console.log(convart);

// geter
// const person = {
//     firstname: "nahid",
//     lastname : "hosen",
//     age      : 23,
//     get fullname(){
//         return this.firstname + " " + this.lastname;
//     }
// }

// console.log(person.fullname);

// seter 
// const person = {
//     firstname: "nahid",
//     lastname : "hosen",
//     fullname : "",
//     set lang(value) {
//         this.fullname = value
//     }
// };
// person.lang = "hello"
// console.log(person);
// -------------------------------------------------------------

// const person = {
//     firstname: "nahid",
//     lastname : "hosen",
//     age      : 23,
//     get fullname(){
//         return this.firstname + " " + this.lastname;
//     }
// }
// console.log(person);

// const person = {
//     firstname: "nahid",
//     lastname : "hosen",
//     age      : 23,
//     fullname : function(){
//         return this.firstname + " " + this.lastname;
//     }
// }
// console.log(person);

// ------------------Constcoter-----------------
// function Person (first, last , age){
//     this.firstname = first;
//     this.lastname  = last;
//     this.age       = age;
//     this.fullName  = function (){
//         return this.firstname + " " + this.lastname;
//     }
// }

// const nahid = new Person("nahid" , "hosen", 23);
// const jahid = new Person("jahid" , "islam", 25);
// const asad = new Person("asad" , "chokder", 30);

// console.log(nahid.fullName());
// console.log(jahid.fullName());
// console.log(asad.fullName());

// function Person (first, last, age){
//     this.fistname = first;
//     this.lastname = last;
//     this.age      = age;
//     this.fullname = function(){
//         return this.fistname + " " +this.lastname + " " + this.age;
//     }
// }

// const nahid = new Person("nahid", "hosen" ,23);
// const jahid = new Person("jahid", "hosen", 34);
// const asad  = new Person ("asad", "chokder", 44);

// console.log(nahid.fullname());
// console.log(jahid.fullname());
// console.log(asad.fullname());


// function Person (first, last, age){
//     this.fistname = first;
//     this.lastname = last;
//     this.age      = age;
//     this.fullname = function(){
//         return this.fistname + " " +this.lastname + " " + this.age;
//     }
// }

// const nahid = new Person("nahid", "hosen" ,23);
// const jahid = new Person("jahid", "hosen", 34);
// const asad  = new Person ("asad", "chokder", 44);

// Person.prototype.country = "Bangladesh";

// console.log(nahid.country);
// console.log(nahid.fullname());


// --------------------prototype-------------
// function Person (first , last , age){
//     this.first = first;
//     this.last  = last ;
//     this.age   = age;
// }
// Person.prototype = {
//     eat() {
//         console.log(`Person is eating`);
//     },
//     sleep() {
//         console.log(`Person is sleeping`);
//     },
//     play() {
//         console.log(`Person is playing`);
//     },
// };

// const nahid = new Person("Nahid", "hosen", 23);
// const jahid = new Person("jahid", "islam", 33);
// const asad = new Person("asad", "chokder", 43);
// nahid.play();

// ==============class use-----------------------

// class Person {
//     constructor( name , age){
//         this.neme = name;
//         this.age = age;
//     }
//     eat() {
//         console.log(`Person is eating`);
//     }
//     sleep() {
//         console.log(`Person is sleeping`);
//     }
//     Play (){
//         console.log(`Person is playing`);
//     }
// }
// const shakib = new Person ("shakib", 23);
// const nahid = new Person ("nahid", 24);
// shakib.eat();
// -----------------------------------------------
// const number = [1,2,3,4,5,6,7];
// for( let i of number ){
//     console.log(i);
// }

// const letters = new Set(["a","b","c"]);
// const lettersIterator = letters.values();

// for( let i of lettersIterator ){
//     console.log(i);
// }

// const letters = new Set(["a","b","c"]);
// const lettersIterator = letters.entries();

// for( let i of lettersIterator ){
//     console.log(i);
// }

// const letters = new Set(["a","b","c"]);
// console.log(letters instanceof Set);

// const person  = new Map([
//     ["Nico", 500],
//     ["Jon", 100],
//     ["Jack", 200]
    
// ]);
// person.delete("Nico");
// // console.log(person.get("Jon"));
// console.log(person instanceof Map);

// const person  = new Map([
//     ["Nico", 500],
//     ["Jon", 100],
//     ["Jack", 200]
    
// ]);

// let text = "";
// person.forEach( function( value, key){
//     text +=  key + " = " + value;
// })

// console.log(text);


// const person  = new Map([
//     ["Nico", 500],
//     ["Jon", 100],
//     ["Jack", 200]
    
// ]);

// let text = "";
// for(let i of person.entries()){

//     text += i;
// }
// console.log(text);

// const apples = {name: 'Apples'};
// const bananas = {name: 'Bananas'};
// const oranges = {name: 'Oranges'};

// // Create a Map
// const fruits = new Map();

// // Add the Objects to the Map
// fruits.set(apples, 500);
// fruits.set(bananas, 300);
// fruits.set(oranges, 200);

// console.log(fruits.get(oranges));

// ------------------------------------------
// change property value

// const person = {
//     firstname : "nahid",
//     lastname  : "hsoen",
//     age       : 23,
// }

// Object.defineProperty(person, "lastname", {value: "chokder"});
// console.log(person);
// -------------------------------------------

// function Definition
// const a =  function (){
    
// }
// console.log(a());

// (function (){
//     console.log("i am student");
// }());     //self invoking function -> IIFE

// (function () {
//    console.log("Hello! I called myself");
//   })();


//   function myfunction (x , y){
//         return x * y;
//   }
//   const result = myfunction(3, 4);
//   console.log(result);

// (function(x){
// 	console.log(x);
// })(4*4*5);

// const x = (x, y) => { return x * y };
// console.log(x(5,5));

// function myfunction(x,y = 5){
//     return x * y;
// }
// console.log(myfunction(5));

// function findMax() {
//   let max = -Infinity;
//   for(let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > max) {
//       max = arguments[i];
//     }
//   }
//   return max;
// } 
// console.log(findMax(3,4,7,8));

// function mostNumber(){
//     let max = -Infinity;
//     for(let i = 0; i<arguments.length; i++){
//         if (arguments[i] > max){
//             max = arguments[i];
//         }
//     }
//     return max
// }
// console.log(mostNumber(45,67,22,99));

// function highest(){
//     let max = -Infinity
//     for( let i = 0; i<arguments.length; i++ ){
//         if(arguments[i] > max){
//             max = arguments[i];
//         }
//     }
//     return max;
// }
// console.log(highest(54,5,7,8,199));

// function sumAll(){
//     let sum = 0;
//     for(let i = 0; i<arguments.length; i++){
//         sum+= arguments[i];
//     }
//     return sum;
// }
// console.log(sumAll(4,5,6));

// function myfunction (x , y){
//     x = x * 5;
//     return x * y;
// }

// let x = 3;
// let y = 5;

// console.log(myfunction(x,y));
// console.log(x)

// function myfunction (x){
// /
// /     x.one = 4;
//     return x.one * x.two;
// }

// let m = {
//     one: 3,
//     two: 5
// }
// console.log(myfunction(m));
// console.log(m)

// function myfunction(){
//     return this;
// }
// console.log(myfunction());

// const person = {
//     firstName : "nahid",
//     lastName  : "hosen",
//     age       : 23,
//     fullname : function(){
//         return this.firstName + " " + this.lastName;
//     }
// }
// console.log(person.fullname());

// function myfunction (x , y, z){
//     this.firstName = x;
//     this.lastName  = y;
//     this.age       = z;
// }
// const fullname  = new myfunction("nahid", "hosen", 23 );
// console.log(fullname.firstName + " " + fullname.lastName + " age = " + fullname.age + " year");

// const a = {
//     firstname: "nahid",
//     sleep: function (){
//         console.log(`${this.firstname} is sleeping`);
//     }
// }
// a.sleep();

// const a = {
//     firstname: "nahid",
//     sleep: function (){
//         return (`${this.firstname} is sleeping`);
//     }
// }
// console.log(a.sleep());

// const person = {
//     fullname : function (){
//         return this.firstname + " " + this.lastname;
//     }
// }
// const person1 = {
//     firstname : "nahid",
//     lastname  : "hosen"
// }

// const person2 = {
//     firstname : "jahid",
//     lastname  : "islam"
// }
// console.log(person.fullname.call(person1));

// const allname = {
//     firstname : "nahid", 
//     lastname  : "hosen",
//     fullname  : function (){
//         return this.firstname + " " + this.lastname;
//     }
// }

// console.log(allname.fullname());

// const person = {
//     fullname : function (city , country){
//         return this.firstname + " " + this.lastname + " , " + city + " , " + country;
//     }
// }

// const person1 = {
//     firstname : "Akram",
//     lastname  : "Hosen"    
// }

// const person2 = {
//     firstname : "Nirob",
//     lastname  : "Hosen"
// }

// console.log(person.fullname.call(person2, "Dhaka", "Bangladesh"));

// const person = {
//     fullname : function (city, country){
//         return this.firstname + " " + this.lastname + " ," + city + " , " + country;
//     }
// }

// const person1 = {
//     firstname : "Jahid", 
//     lastname  : "Islam"
// }

// console.log(person.fullname.apply(person1, ["City", "Bangladesh"]));

// console.log(Math.max(2,3,5,7,8,10)) 


// const count = Math.max.apply(null, [4,5,3,6,9,40,23]);
// console.log(count);

// function hello (){
//     let a = 3;
//     console.log(a + a);
// }

// hello();


// --------- Closures ---------
// function hello (){
//     let count = 0;

//     return function(){
//         count += 1;
//         return count;
//     }
// }

// const add = hello (); // add is a function at the end

// console.log(add());
// console.log(add());
// console.log(add());

// function temporpary (){
//     let count = 0;
//     return function (){
//         count += 1;
//         return count;
//     }
// }

// const add = temporpary ();

// console.log(add());
// console.log(add());

// var num1 = 2;
// var num2 = 3;

// var sum = function (){
//     return num1 + num2;
// };

// console.dir(sum);

// function bankAccount( infinintebalance ){
//     var balance = infinintebalance;
//     return function (){
//         return balance;
//     }
// }


// var count = bankAccount(20000);
// console.log(count());

// class person{
//     constructor (name, year){
//         this.name = name;
//         this.year = year;
//     }

//     run (speed){
//         console.log(this.name + ' is running ' + speed);
//     }
// }

// const count = new person("Nahid", 2023);
// count.run("100 km per hour");

// class car {
//     constructor (brand){
//         this.carname = brand;
//     }
//     person(){
//         return " I hava a " + this.carname;
//     }
// }

// class Model extends car {
//     constructor(brand , mod){
//         super(brand);
//         this.model = mod;
//     }
//     show(){
//         return this.person() + " , it is a " + this.model;
//     }
// }

// let personCar = new Model("BMW", "Mustang");

// console.log(personCar.show());

// ....... video 82 >> Asynchronous JavaScript.............

// console.log("line number 1");

// setTimeout(function(){
//     console.log("line number 2");
// });
// console.log("line number 3");

// console.log("line number 1");

// setInterval(function(){
//     console.log("line number 2");
// }, 2000);
// console.log("line number 3");

// setTimeout(hello, 3000);
// function hello() {
//     console.log("i love you");
// }


// setInterval(myFunction, 1000);

// function myFunction() {
//   let d = new Date();
//   document.getElementById("demo").innerHTML=
//   d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds();
// }

// setInterval (myfunction1);

// function myfunction1 (){
//     let d = new Date();
//     document.getElementById("demo0").innerHTML= d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
// }


// const paymentSuccess = true;
// const marks = 70; 

// function enroll (callback){
//     console.log("course enrollment is in peogress");

//     setTimeout(function(){
//         if(paymentSuccess){
//             callback();
//         }else{
//             console.log("Payment failed");
//         }
//     }, 2000);
// }

// function progress(callback){
//     console.log("Course on progress...");

//     setTimeout(function(){
//         if (marks >= 80){
//             callback();
//         }else{
//             console.log("You could not enough marks to get the certificate");
//         }
//     }, 3000);
// }

// function getCertificate(){
//     console.log("preparing your certificate");
//     setTimeout(function(){
//         console.log("Congrats! You got the certificate");
//     }, 1000);
// }

// enroll(function(){
//     progress(getCertificate);
// });
 

// Use JavaScript Promises
// const paymentSuccess = true;
// const marks = 70; 

// function enroll() {
//     console.log("course enrollment is in progress");

//     const promise = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             if (paymentSuccess) {
//                 resolve();
//             } else {
//                 reject("Payment failed");
//             }
//         }, 2000);
//     });
//     return promise;
// }

// function progress() {
//     console.log("Course on progress...");

//     const promise = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             if (marks >= 80) {
//                 resolve();
//             } else {
//                 reject("You could not get enough marks to get the certificate");
//             }
//         }, 3000);
//     });
//     return promise;
// }

// function getCertificate() {
//     console.log("Getting the certificate...");

//     const promise = new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve("Congrats! You got the certificate");
//         }, 1000);
//     });

//     return promise;
// }

// async function await
// const paymentSuccess = true;
// const marks = 70; 

// function enroll() {
//     console.log("course enrollment is in progress");

//     const promise = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             if (paymentSuccess) {
//                 resolve();
//             } else {
//                 reject("Payment failed");
//             }
//         }, 2000);
//     });
//     return promise;
// }

// function progress() {
//     console.log("Course on progress...");

//     const promise = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             if (marks >= 80) {
//                 resolve();
//             } else {
//                 reject("You could not get enough marks to get the certificate");
//             }
//         }, 3000);
//     });
//     return promise;
// }

// function getCertificate() {
//     console.log("Getting the certificate...");

//     const promise = new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve("Congrats! You got the certificate");
//         }, 1000);
//     });

//     return promise;
// }

// async function hello(){
//     try{
//         await enroll();
//         await progress();
//         const message = await getCertificate();
//         console.log(message);
//     }catch(err){
//         console.log(err);
//     }
// }

// hello();

// ---------->> DOM => DOCUMENT OBJECT MODEL <<.........

// document.getElementById("nahid").innerHTML = "This is my phone !";
// document.getElementById("jahid").innerHTML = "This is my phone !";
 
// const hello = document.getElementById("myimage").src = "nahid";

// >>>form<<<
// function validateform(){
//     const form = document.forms["myForm"];
//     const value = form['fname'].value;
//     if (value === ""){
//         alert("You must type name");
//         return false;
//     }
// }

// const p = document.querySelector("#p11");
// p.style.color = "red";
// p.style.fontSize = "30px";


// function nahid(){
//    const p = document.querySelector("#p1");
//    p.style.color = "red";
//    p.style.fontSize = "30px";
// };

// function myMove (){
//     const animate = document.querySelector("#animate");
//     let pos = 0; 

//     const interval =setInterval(frame , 5);
//     function frame(){
//         if(pos < 350){
//             pos++;
//             animate.style.top = pos + "px";
//             animate.style.left = pos + "px";
//         }else{
//             clearInterval(interval);
//         }
        
//     }

// }

// function upper(){
//     const x = document.querySelector("#upp");
//     x.value =x.value.toUpperCase();
// }

// function myFunction (){
//     console.log("Hay Brother");
// }


// const button = document.querySelector("#hello");
// button.addEventListener("click", function(){
//     console.log("hello world");
// });

// const button = document.querySelector("#hero");
// button.addEventListener("click", function(){
//     console.log("button clicked");
// });

// button.addEventListener("mouseover", function(){
//     console.log("ues has put mouse over this element");
// });

// function myFunction(text){
//     console.log(text);
// }

// const botton = document.querySelector("#hero");
// botton.addEventListener("click", function(){
//     myFunction("hello jon");
// });


// const container = document.querySelector("#container");
// container.addEventListener("click", function(){
//     console.log("hello div");
// }, true);

// const button = document.querySelector("#hero");
// button.addEventListener("click", function(){
//     console.log("hello button");
// }, true);
 
// const text = document.querySelector("#hello").childNodes[0].nodeValue;
// console.log(text);
 
// const anwser = document.querySelector("#hi").innerHTML = document.querySelector("#hello").childNodes[0].nodeValue;
// console.log(anwser);

// const hello = document.querySelector("#hi").innerHTML = document.querySelector("#hello").nodeName;
// console.log(hello);
  
// ???>><<create element<><
// const para = document.createElement("h3");
// const node = document.createTextNode("This is our my country");

// para.appendChild(node);
// document.querySelector("#div1").appendChild(para);


// const para = document.createElement("h2");
// const node = document.createTextNode("This is my office name google");

// para.appendChild(node);
// const element =  document.querySelector("#div1");
// const p1 = document.querySelector("#p2");
// element.insertBefore(para, p1);

 
// document.querySelector("#pp").remove(); Old verson
 
// ------------new verson-------
// const parent = document.querySelector("#div1");
// const child = document.querySelector("#pp");
// parent.removeChild(child);

// -----text replace----
// const para = document.createElement("h2");
// const node = document.createTextNode("This in New");

// para.appendChild(node);

// const parent = document.querySelector("#div1"); 
// const child = document.querySelector("#pp");

// parent.replaceChild(para, child);


// console.dir( document.getElementsByTagName("p")[1]);

// const hello =  document.getElementsByTagName("h2");
// document.querySelector("#dd").innerHTML = hello.length;

// const nodelist = document.querySelectorAll(".hello");
// const htmlCollection = document.getElementsByClassName("hello");

// console.dir(nodelist);
// console.dir(htmlCollection);

// console.log(nodelist[0]);
// console.log(htmlCollection["one"]);

// -------------BOM > Object Document Model < -----------
// const width = document.getElementById("width");
// const height = document.getElementById("height");

// width.innerHTML = "Window inner width is: " + window.innerWidth;
// height.innerHTML = "Window inner height is: " + window.innerHeight;

// ---------------------

// let mywindow;
// function OpenWindow (){
//    mywindow = window.open("https://google.com");
// }

// function CloseWindow (){
//     mywindow.close();
// }

// document.querySelector("#height").innerHTML ="Screen Height is: " + screen.height
// document.querySelector("#width").innerHTML ="Screen Width is: " + screen.width

// document.querySelector("#screen").innerHTML ="Screen colorDepth is: " +screen.colorDepth;

// document.querySelector("#location").innerHTML = "Page is: " +window.location.assign ;

// function newDoc (){
//     window.location.assign("https://www.w3schools.com");
// }

// function goBack(){
//     window.history.back();
// }

// function goForward(){
//     window.history.forward();
// }

// const hello = document.querySelector("#demo33");
// hello.innerHTML = navigator.onLine;

// function Myfunction(){
//     alert("Hello world/Whare are you from");
// }

// const confirm =  document.querySelector("#demo22"); 
// function Myfunction(){
//     let text;
//     if(window.confirm("This is new site")){
//         text = ("You pressed OK!");
//     }else{
//         text = ("You pressed Cancle");
//     }

//     confirm.innerHTML = text;
// }


// function Myfunction(){
//     let person = window.prompt("Plase enter your name:", "Nahid Hosen");
//    let txt;
//     if(person === null || person === ""){
//         txt = "User Cancelled the prompt!";
//     }else{
//         txt = "Hello " + person + " ! How are you?";
//     }
    
//     document.querySelector("#demo44").innerHTML = txt;

// }

// const timeout = document.querySelector("#demo44");
// const interval = document.querySelector("#demo55");

// let fulltimeout;
// let intervaltime;

// function startTimeout(){
//   fulltimeout = setTimeout(function(){
//         timeout.innerHTML = "3 seconds over"
//     },3000);
// }

// function stopTimeout(){
//     clearTimeout(fulltimeout);
// }


// function startInterval(){
//     intervaltime = setInterval(function(){
//         interval.innerHTML = new Date().toLocaleTimeString();
//     }, 1000);
// }

// function stopInterval(){
//     clearInterval(intervaltime);
// }


// Stert--------Cookie-------------------

// function setCookie(cname, cvalue, exdays){
//     const d = new Date();
//     d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//     let expires = "expires=" + d.toUTCString();

//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(cname){
//     let ca = document.cookie.split(";");
//     for(let i = 0; i<ca.length; i++){
//         let c = ca [i];

//         while(c.charAt(0) === " "){
//             c = c.substring(1);
//         }


//         if(c.indexOf(name) === 0){
//             return c.substring(name.length);
//         }
//     }

//     return "";
// }

// function checkCookie(cname, exdays) {
//     let a = getCookie("cname");
//     if (a != "") {
//      alert("Welcome again " + a);
//     } else {
//       name = prompt("Please enter your name:", "");
//       if (name != "" && name != null) {
//         setCookie("cname", name, exdays);
//       }
//     }
//   }
// -------------Cookie-------------------End

// function validation(){
//     const inpobj = document.querySelector("#id1");
    
//     if(inpobj.validity.rangeOverflow){
//         inpobj.setCustomValidity("You have made a range overflow error!");
//     }

//     else if(inpobj.validity.rangeUnderflow){
//         inpobj.setCustomValidity("You have made a range underflow error! ");
//     }

//     else if (inpobj.validity.valueMissing){
//         inpobj.setCustomValidity("value missing");
//     }

//     else if (inpobj.validity.typeMismatch){
//         inpobj.setCustomValidity("value not mtch");
//     }


//     if(!inpobj.checkValidity()){
//         document.querySelector("#hello1").innerHTML = inpobj.validationMessage;
//     }

// };

// function setLocalStorage(key, value){
//     localStorage.setItem(key, value);
// }

// function getLocalStorage(key){
//    alert(localStorage.getItem(key));
// }

// function removeLocalStorage(key){
//     localStorage.removeItem(key);
// }

// function clearLocalStorage(){
//     localStorage.clear();
// }

// ------GeoLocation------------

// const display = document.querySelector("#display");
// function getLocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition, showError)
//         // navigator.geolocation.watchPosition(showPosition, showError)
//     }else{
//         display.innerHTML("Geolocation is not available in your browser")
//     }
// }

// function showPosition(position){
//     display.innerHTML = "Latitude: " + position.coords.latitude + "<br/> Longitude: " + position.coords.longitude;

// }

// function showError(error) {
//     switch(error.code) {
//       case error.PERMISSION_DENIED:
//         display.innerHTML = "User denied the request for Geolocation."
//         break;
//       case error.POSITION_UNAVAILABLE:
//         display.innerHTML = "Location information is unavailable."
//         break;
//       case error.TIMEOUT:
//         display.innerHTML = "The request to get user location timed out."
//         break;
//       case error.UNKNOWN_ERROR:
//         display.innerHTML = "An unknown error occurred."
//         break;
//     }
//   }
// -----------------------------------------