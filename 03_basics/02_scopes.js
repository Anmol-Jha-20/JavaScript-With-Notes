// var c = 300;
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  //   var c = 30;
  //   c = 30;
  console.log("INNER: ", a); //Block Scope
}

console.log(a); //Global Scope
// console.log(b);
// console.log(c);

function one() {
  const username = "anmol";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);  it gives you error
  two();
}

one();

if (true) {
  const username = "anmol";
  if (username === "anmol") {
    const website = " instagram";
    console.log(username + website);
  }
  // console.log(website); it gives you error
}

// console.log(username);  it gives you error

//********************************Function Declaration***********************

// console.log(addTwo(7)); it gives you error: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(7));

console.log(addone(5)); // but in that case, it will not give you error
//Another way of function declaration
function addone(num) {
  return num + 1;
}
