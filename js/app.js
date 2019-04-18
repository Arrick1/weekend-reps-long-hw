// A. Variables & Datatypes

// How do we assign a value to a variable? 
let random = "value"  // using the operator = you assign things to a variable 

// How do we change the value of a variable?
random = "newValue"; console.log(random) 
// using "let" when defining your initial value, you can ressign the value of random with the operator =

// How do we assign an existing variable to a new variable?
var x = 2; // using let method
let y = x
    console.log(y);

// Remind me, what are declare, assign, and define?
//declare registers a variable var = 5  where 5 is the declaration //
//assign provides a value  for a decloration aftter it has been defined
// define  is the identifer you provide to a variable to assign something to it 
//var num = 5 where  num would be the definer of the var value of 5 

// What is pseudocoding and why should you do it?
//pseudocoding are comment notations that you can do to breakdown the steps of your code

// What percentage of time should be spent thinking about how you're 
//going to solve a problem vs actually typing in code to solve it?
// 50 % thinkging %50 precent solving 

//B. Strings 

// Create a variable called firstVariable.
// Assign it the value of the string "Hello World"
var firstVariable = ("Hello World")

// Change the value of this variable to some number.
firstVariable = 2;  

// Store the value of firstVariable in a new variable called secondVariable
var secondVariable = 2; 

// Change the value of secondVariable to any string.
secondVariable = "this is a string";

// What is the value of firstVariable?
// the value of first variable is 2 

// Create a variable called yourName and set it equal to your name as a string. 
// /Then, write an expression that takes the string "Hello, my name is " and 
// the variable yourName so that it returns a new string with them concatenated.
const yourName = 'Arrick'

console.log ('Hello, my name is ' + yourName)

//C. Booleans
// Using the provided variable definitions, replace the blanks so that all 
// log statements print true in the console. 
// Answers should be all be valid JS syntax and not weird things 
// that don't make sense but happen to print true to the console

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a !== b);
console.log(c !== d);
console.log('Name'==='Name');
console.log(true !== false);
console.log(false === false === false === false 
    === false === false == true);
console.log(false === false)
console.log(e == 'Kevin');
console.log(a !== b !== c);
console.log(a === a !== d);
console.log(48 !== '48');


// D. The farm

// Declare a variable animal. Set it to be either "cow" or something else.
// Write code that will print out "mooooo" if the it is equal to cow.
// Change your code so that if the variable animal is anything other 
//than a cow, it will print "Hey! You're not a cow."

var animal = (x)=> {
    if(x === "cow")
        console.log("moooo");
    else if(x !== "cow")
        console.log("Hey! You're not a cow.");
}
animal("cow");
animal("cat");
animal("cow")

// E. Driver's Ed

// Make a variable that will hold a person's age. Be semantic.
// Write code that will print out "Here are the keys", 
//if the age is 16 years or older.
// If the age is younger than 16, a message should print 
//"Sorry, you're too young."

var age = (y) => {
    if(y >= 15)
    console.log("Here are the keys");
    else if(y <= 16)
    console.log("Sorry, you're too young");
}

age(12);
age(20);

// II Loops

// Write a loop that will print out all the numbers 
// from 0 to 10, inclusive.
for(let i = 0; i <= 10; i++){
console.log(i)};

// Write a loop that will print out all the numbers 
// from 10 up to and including 400.
for(let i = 10; i <= 400; i++){
    console.log(i)};
    

// Write a loop that will print out every third number 
// starting with 12 and going no higher than 4000.
// for(let num = 12; num <= 4000; num +=3){
    // console.log(num)};

// // B. Get even
// Print out the even numbers that are within the range of 1 - 100.
// Adjust your code to add a message next to even numbers 
// only that says: "<-- is an even number".

// for (let i = 1; i < 100; i++){
//     if (i % 2 === 0){ console.log(i +" <--- is an even number")}
// }

//C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" 
//if the number is a multiple of five.
for(let i = 0; i<=100; i++){
   if((i % 5 === 0) || (i % 3===0)) {
       console.log(i)}
           if(i % 5 === 0){
       console.log("I found a " + i + " High five!")
           } else if(i %3 ===0) {
               console.log("I found a " + i+". Three is a crowd")
           }
        }

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your banck_account should have $55 in it.
let bank_account = 0 
for(i = 1; i <= 10; i++){
      bank_account += i 
}

console.log(bank_account);
        
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your banck_account should have $10,100 in it.
let bonus = 0 
for(i = 1; i <= 100; i++){
      bonus += i*2 
}

console.log(bonus);


// E. Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000. If a previous question you've done has helpful bits of code in it that partially solves this problem, look back at them.

// You just solved Project Euler problem 1!


//A. Talk about it:
// What are the things in an array called?
//elements

// Do Arrays guarantee those things will be in order?
// no but you can use .sort 

// What real-life thing could you model with an array?
// you could use an array to list out the items needed on a grocery list 


// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes.

const quotes = ["My life is a message", "Stay hungry stay foolish", "Fall seven times, stand up eight"]

//C. Accessing elements
// Given the following array const 
randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?
console.log(randomThings[0]);

// Change the value of "Hello" to "World".
randomThings[2] = "World";

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings[2]);

//D. Change values
//Given the following array 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

//What would you write to access the 3rd element of the array?
//ourClass[2]

//Change the value of "Github" to "Octocat"
ourClass[4]= "Octocat"

//Add a new element, "Cloud City" to the array.
ourClass.push("Cloud City");


// E. Mix It Up
// Given the following array: 
const myArray = [5, 10, 500, 20]

// Add the string "Egon" to the end of the array. 
//Add another string of your choice to the end of the array.
myArray.push("Egon"); myArray.push("new");

// Remove the 5 from the beginning of the array.
myArray.splice(0,1,);

// Add the string "Bob Marley" to the beginning of the array.
myArray.splice(0, 0, "Bob Marley");  


// Remove the string of your choise from the end of the array.
myArray.pop("new"); 

// Reverse this array using Array.prototype.reverse().
console.log(myArray.reverse([]))

//  Did you mutate the array? What does mutate mean?
//mutate is changing the elements without redefining them  

//  Did the .reverse() method return anything?
// yes the reverse method returned the array in the reverse order 

//F Biggie smalls 

// Create a variable that contains an integer.
// Write an if ... else statement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big number if the number is greater than or equal to 100.

 var n = (num) => {
if(num < 100)console.log("little number");
    else if(num > 100) console.log("big number");
 }

console.log(n(10));
console.log(n(200));

// G. Monkey in the Middle

var x = (num) => {
    if(num < 5){console.log("little number");}
        else if(num < 10) {console.log("big number");}
        else {console.log("monkey")}
     }
     console.log(x(2));
     console.log(x(20));
     console.log(x(8));
// Write an if ... else if ... else statement:

// console.log() little number if the number entered is less than 5.

// If the number entered is more than 10, log big number.

// Otherwise, log "monkey". 

//H. What's in Your Closet?

const kristynsCloset = [
  'left shoe',
  'cowboy boots',
  'right sock',
  'GA hoodie',
  'green pants',
  'yellow knit hat',
  'marshmallow peeps'
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    'grey button-up',
    'dark grey button-up',
    'light blue button-up',
    'blue button-up'
  ],
  [
    // These are Thom's pants
    'grey jeans',
    'jeans',
    'PJs'
  ],
  [
    // Thom's accessories
    'wool mittens',
    'wool scarf',
    'raybans'
  ]
];

// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
// What's Kristyn wearing today? Using bracket notation to 
// access items in kristynsCloset, log the sentence 
// "Kristyn is rocking that " + the third item in Kristyn's 
// closet + " today!" to the console.

const outfit1 = `Kristyn is rocking that ${kristynsCloset[2]} today!`; console.log(outfit1)

// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(6,0, "raybans"); 
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[5] = "stained knit hat"; 
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
const shirt = `${thomsCloset[0][0]}`; 
// In the same way, access one item from Thom's pants array.
const pants = `${thomsCloset[1][0]}`; 
// Access one item from Thom's accessories array.
const accessory = `${thomsCloset[2][2]}`;
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom decided to rock his`,shirt, "with",pants, "and his", accessory, "." )
// Get more specific about what kind of PJs Thom's wearing this winter.
// Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2]="Footie Pajamas";

//IV. Functions

// A. printGreeting
// Do you think you could write a function called printGreeting 
// with a parameter name that returns a greeting with the argument 
// interpolated into the greeting?
// Like so?
// console.log(printGreeting('Slimer'));
// => Hello there, Slimer!

const printGreeting = (name) => {
  console.log ("Hello there, " + name)
} ;
printGreeting("Slimer")


// You think you could? I think so too. Feel free to skip this problem, because you've already done it. 
//If you've done the problem twice, read entire problems carefully before doing them 
//from now on.

// B. printCool
// Write a function printCool that accepts one parameter, name as an argument. 
// The function should print the name and a message saying that that person is cool.

const printCool = (name) => {
  console.log(name + " is cool!")
}

printCool("Beyonce");

// C. calculateCube
// Write a function calculateCube that takes a single number and 
// prints the volume of a cube made from that number.

const calculateCube = (num) => {
  let cube = Math.pow(num,3);
  console.log (cube);
}

calculateCube(5);

// D. isVowel
// Write a function isVowel that takes a character (i.e. a string of length 1) and 
// returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. 
// Test your function on every vowel and make sure it's working. In general, when you
//  write functions, take a minute to test them with different values to make sure they behave the way you want.

const isVowel = (string) => {
  if((string === "a") || (string === "e") || (string === "i") ||
  (string === "o") || (string === "u") ||(string === "A") || (string === "E") 
  || (string === "I") || (string === "O") || (string === "U"))
    return true;
    else if ((string !== "a") || (string !== "e") || (string !== "i") ||
   (string !== "o") || (string !== "u") || (string !== "A") || (string !== "E") 
   || (string !== "I") || (string !== "O") || (string !== "U"))
    return false;
}
console.log(isVowel("a"));
console.log(isVowel("x"));
console.log(isVowel("A"));


// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). 
// The function should return an array of numbers where each number is the length
//  of the corresponding string.

const length = [];

const getTwoLengths = (str1, str2) => {
var l = str1.length; 
var m = str2.length; 
var n = [l,m]; length.push(n);
console.log(n)
}
getTwoLengths("Hello", "ppl");
getTwoLengths("Arrick", "Joseph")

// F. getMultipleLengths
// Write a function getMultipleLengths that accepts a single parameter as an argument:
//  an array of strings. The function should return an array of numbers where each 
//  number is the length of the corresponding string.

const getMultipleLengths = ([str, str2, str3]) => {
var a = getMultipleLengths[0].length

}