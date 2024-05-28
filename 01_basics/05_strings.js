const name = "Anmol";
const repoCount = 4;

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //(Template literals (or Template strings) provide an easy way to interpolate variables and expressions into strings.The method is called string interpolation.)

//********************** String Methods ****************************

const userName = new String("Anmol-aj"); //Another way of declare strings(it creates a new object which is string type)

console.log(userName[0]); //output: "A"
console.log(userName.__proto__); //output: (in console,it gives you list of string methods)

console.log(userName.length); //output:8
console.log(userName.toLowerCase()); //output: "anmol-aj"

console.log(userName.charAt(2)); //output: "m"
console.log(userName.indexOf("m")); //output: 2

const newString = userName.substring(0, 3);
console.log(newString); //output: "Anm"

const anotherString = userName.slice(0, 4);
console.log(anotherString);

const newStringOne = " Anmol ";
console.log(newStringOne.trim()); //output: "Anmol"
console.log(newStringOne.trimStart()); //output: "Anmol "
console.log(newStringOne.trimEnd()); //output: " Anmol"

const url = "https://anmol.com/anmol%20jha";
console.log(url.replace("%20", "-")); //output: "https://anmol.com/anmol-jha"

console.log(url.includes("anmol")); //output: true

console.log(userName.split("-")); //we can converte this string into array with the help of split() method and output:["Anmol","aj"]
