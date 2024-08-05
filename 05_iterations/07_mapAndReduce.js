//Map method
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.map((num) => num + 10);
//Method Chaining
// const newNums = myNums.map((num) => num * 10).map((num) => num + 2);
const newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 3)
  .filter((num) => num > 50);

console.log(newNums);

//Reduce Method
const myNums1 = [1, 2, 3, 4, 5];

//Using function
// const myTotal = myNums1.reduce(function (acc, currValue) {
//   console.log(`acc: ${acc} and currvalue: ${currValue}`);

//   return acc + currValue;
// }, 0);

//Using Arrow function
const myTotal = myNums1.reduce((acc, currValue) => acc + currValue, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "RD Sharma",
    price: 1500,
  },
  {
    itemName: "SL Arora",
    price: 2800,
  },
  {
    itemName: "question bank",
    price: 3400,
  },
  {
    itemName: "organic book",
    price: 4999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
