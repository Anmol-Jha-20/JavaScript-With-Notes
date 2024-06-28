// "this": it gives you reference of current context(“This” keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function.)
//If the function being referenced is a regular function, “this” references the global object.

const user = {
  username: "Anmol",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

user.welcomeMessage();
user.username = "Sam";
user.welcomeMessage();

console.log(this); //output: {}(empty object) but in browser, it gives you window object(which is a global object in browser)

//"this" in Function
// function example() {
//   let username = "anmol";
//   console.log(this.username);       // it will give you undefined instead of "anmol" because this keyword will not work in a simple function without any object
// }

// example();

//"this" in function stored in a variable
// const example = function () {
//   let username = "anmol";
//   console.log(this.username);       //it will also give you undefined instead of "anmol"
// };
// example();

//this in Arrow function
const example = () => {
  let username = "anmol";
  console.log(this.username); // it will also give you undefined insted of "anmol"
  console.log(this); //it will give you empty object({})
};

example();

//Arrow function
const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(3, 4));

//Implicit Return
// const addTwoNum = (num1, num2) => ( num1 + num2 );
const addTwoNum = (num1, num2) => num1 + num2;
console.log(addTwo(9, 4));

const objInFunc = () => ({ username: "anmol" }); //when we want to return without using return keyword then we use parenthesis() instead of curly braces{}
console.log(objInFunc());
