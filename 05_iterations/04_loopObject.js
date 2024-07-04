//Loop on object
const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

//We use for in loop to iterate objects
for (const key in myObject) {
  console.log(`${key} filename shortcut for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
  console.log(programming[key]);
  //   console.log(key + ":" + programming[key]);
}

// const map = new Map();
// map.set("IN", "India");
// map.set("USA", "United States of America");
// map.set("fr", "France");
// map.set("IN", "India");

// for (const key in map) {
//   console.log(key);        //output: map is not iterable(we cannot iterate map using forin loop)
// }
