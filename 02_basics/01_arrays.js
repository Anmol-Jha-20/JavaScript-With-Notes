//Arrays(It enables storing a collection of multiple items under a single variable name)
//JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

const myArr = [1, 2, 3, 4, 5, "Anmol"];
console.log(myArr[0]);

const myArr2 = new Array(0, 1, 2, 3, 4); //Another way of declaring arrays
console.log(myArr2.length);

//Array methods

myArr.push(6); //it add element(6 in this case) in the last of array's element
myArr.pop(); //it remove the last element of an array
myArr.unshift(0); //it add element(0 in this case) in the start of an array's element
myArr.shift(); //it remove the first element of an array

console.log(myArr.includes(9)); //output: false
console.log(myArr.indexOf(3));
console.log(myArr.indexOf(13)); //output: -1(because element does not exist)

const newArr = myArr.join(); //it convert array into string

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//slice and splice method (slice() creates a new array containing selected elements from the original array, while splice() modifies the original array by adding, removing, or replacing elements.)

console.log("A", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C", myArr);
console.log(myn2);

//for more info of arrays visit:- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
