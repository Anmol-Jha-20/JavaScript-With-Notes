// const userEmail = "87anmol.ai@89.gmail.com";
// const userEmail = [];
const userEmail = "";

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//"0", 'false', " ", [], {}, function(){}

//to check array is empty or not
const products = [];
if (products.length === 0) {
  console.log("Array is empty");
}

//to check whether object is empty or not
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

//Nullish Coalescing Operator (??): The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1;
// val1 = 5 ?? 10;    //output: 5
// val1 = null ?? 10;    //output: 10
// val1 = undefined ?? 15;    //output: 15
// val1 = null ?? 10 ?? 20;    //output: 10
// val1 = null ?? undefined;      //output: it is always display right-hand side value(in this case,the value is undefined)
val1 = undefined ?? null; //output: null(in this the right-hand side value is null)

console.log(val1);

//Terniary Operator
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80
  ? console.log("greater than 80")
  : console.log("less than 80");

// false==0    output: true
// false==''    output: true
// 0==''    output: true
