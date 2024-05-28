const score = 400;
console.log(score); //output: 400

const balance = new Number(100); //it creates a new object which is Number type
console.log(balance); //output: [Number: 100]

//Number Methods
console.log(balance.toString()); //toString is used to convert number into string
console.log(balance.toString().length); //once it is converted into string we can apply string methods such as length,etc.

console.log(balance.toFixed(2)); //output: 100.00(The toFixed() method converts a number to a string. The toFixed() method rounds the string to a specified number of decimals.)

//toPrecision() method
const otherNumber = 23.8966;
const otherNumber1 = 123.8966;
const otherNumber2 = 1123.8966;
console.log(otherNumber.toPrecision(3)); //output:23.9
console.log(otherNumber1.toPrecision(3)); //output:124
console.log(otherNumber1.toPrecision(4)); //output:123.9
console.log(otherNumber2.toPrecision(3)); //output:1.12e+3

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); //output:10,00,000

//in console,
// Number.MAX_VALUE: 1.7976931348623157e+308
// Number.MIN_VALUE: 5e-324
// Number.MIN_SAFE_INTEGER: -9007199254740991
// Number.MAX_SAFE_INTEGER: 9007199254740991

//********************************* Maths ****************************************
console.log(Math);
console.log(Math.abs(-4)); //output: 4 (it converts negative numbers into positive numbers only)
console.log(Math.round(4.6)); //output: 5
console.log(Math.ceil(4.2)); //output: 5
console.log(Math.floor(4.9)); //output: 4
console.log(Math.min(4, 3, 6, 8)); //output: 3
console.log(Math.max(4, 3, 6, 8)); //output: 8

console.log(Math.random());
console.log(Math.floor(Math.random() * 10 + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
