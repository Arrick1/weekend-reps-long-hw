//A. Variables & Datatypes

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
