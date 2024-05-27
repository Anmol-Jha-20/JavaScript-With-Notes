// Primitive data type
// 7 types: String,Number,Boolean,null,undefined,Symbol(for making variable unique),BigInt(for bigger numbers)

const score = 100; //number
const isLoggedIn = false; //boolean
const outsideTemp = null; //null (type object)
let userEmail; //undefined (type undefined)

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); //output:- false because symbol make the variables's values unique

const bigNumber = 3412345678910111988n; //BigInt

//JavaScript is Dynamically Typed Language

//Reference (Non primitive)
//Array, Objects, Functions

const hero = ["superman", "spiderman", "doga"]; //data type: object
let myObj = {
  name: "Anmol",
  age: 18,
};

const myFunction = function () {
  console.log("Hello");
};

console.log(typeof myFunction); //data type: function or object function

//*****************************************************

//stack memory(primitive data type) and Heap(non-primitive data type)

let userName = "Anmol123";

let anotherUserName = userName;
anotherUserName = "Anmol456";

console.log(userName); //output:Anmol123
console.log(anotherUserName); //output:Anmol456

let userOne = {
  email: "user1@gmail.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "Anmol@gmail.com";

console.log(userOne.email); //output:Anmol@gmail.com
console.log(userTwo.email); //output:Anmol@gmail.com
