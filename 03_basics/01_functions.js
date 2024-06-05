//basic function
// function sayMyName() {
//   console.log("A");
//   console.log("N");
//   console.log("M");
//   console.log("O");
//   console.log("L");
// }
// sayMyName();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2;
  // return result;
  return number1 + number2;
}

const result = addTwoNumbers(3, 4);
console.log("Result:", result);

// function loginUserMessage(username= "goku") {
//   if (username === undefined) {
//     return console.log("Please enter a username");
//   }
//   return `${username} just logged in`;
// }

//Another way of giving condition in 'if' statement
function loginUserMessage(username) {
  if (!username) {
    return console.log("Please enter a username");
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("Anmol"));
console.log(loginUserMessage());

// function calculateCartPrice(...num1) {
//   return num1;
// }
//console.log(calculateCartPrice(200, 400, 500, 2000));
function calculateCartPrice(val1, val2, ...num1) {
  console.log("value1:", val1);
  console.log("value2:", val2);
  return num1;
}
console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
  username: "anmol",
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}
handleObject(user);
handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 300, 500, 1000]));
