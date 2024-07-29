// let score = "33ec";
// let score=undefined;
// let score = null;
// let score = false;
// let score = true;
let score = "33";

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//console.log(valueInNumber);    output: Nan(Not-A-Number) in case of score="33ec" and score=undefined

//console.log(valueInNumber);      output: 0 (in case of score=null and score=false)

// console.log(valueInNumber);    output: 1 (in case of score=true)

let isLoggedIn = "Anmol";
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); output: false (in case of empty string)
console.log(booleanIsLoggedIn);

//in Boolean conversion, 1=>true, 0=>false
//""=>false, "Anmol"=>true

let anyNumber = 45;
let stringNumber = String(anyNumber);
console.log(typeof stringNumber);
console.log(stringNumber);

// <============ OPERATIONS ====================>
let str1 = "hello";
let str2 = " Anmol";
let str3 = str1 + str2;
console.log(str3);

// console.log("1" + 2);      output: 12
// console.log(1 + "2");       output: 12
// console.log("1" + 2 + 2);      output: 122
// console.log(1 + 2 + "2");        output: 32

// console.log(+true);    it converted into 1
// console.log(+"");    it converted into 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 3;
console.table([num1, num2, num3]);

//for more info refer:  https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
