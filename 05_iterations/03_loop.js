//for of loop
const arr = [1, 2, 3, 4, 5];
for (const element of arr) {
  console.log(element);
}

const greetings = "Hello Anmol!";
for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}
// const greetings = "Hello Anmol!";
// for (const greet of greetings) {
//   if (greet === " ") {
//     continue;
//   }
//   console.log(`Each char is ${greet}`);
// }

//Maps(for unique values): A Map holds key-value pairs where the keys can be any datatype. A Map remembers the original insertion order of the keys.
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("fr", "France");
map.set("IN", "India"); //it doesn't print because it only accepts unique key-value pairs

console.log(map);

//for of loop on map object
for (const [key, value] of map) {
  console.log(key, ":-", value);
}

//can for of loop used to iterate objects
// const myObject = {
//   game1: "NFS",
//   game2: "gta",
//   game3: "gta5",
// };
// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);           //error: myObject is not iterable
// }    //output: for of loop cannot be used to iterate objects
