//push and concat method(the push() method add elements in the original array whereas, the concat() method of arrays returns the new array created after merging the arrays.)

const marvel_heroes = ["Thor", "Ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeros=marvel_heroes.concat(dc_heroes);
// console.log(allHeros);

//using spread operator(Spread syntax can be used when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list.)
const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes);

//The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const simple_another_array = another_array.flat(2); //we can also give "Infinity" for infinite depth(sub-array) but in this case,it has highest two sub-array so, we give it 2.
console.log(simple_another_array);

console.log(Array.isArray("Anmol")); //output: false(It checks if a given element is an array or not.)
console.log(Array.from("Anmol")); //it converts string into array with the help of "from()" method
console.log(Array.from({ name: "anmol" })); //output:[] because it cannot convert this into an array(it converts either key or value of an object into an array)

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //The of() method returns a new array from a set of elements.
