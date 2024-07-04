//for loop

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element === 5) {
    console.log("number 5 is out");
  }
  console.log(element);
}

//Nested for loop
for (let i = 0; i <= 5; i++) {
  console.log(`outer loop value: ${i}`);
  for (let j = 0; j <= 5; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`);
  }
}

//Multiplication table from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("Multiplication table of " + i);
  for (let j = 1; j <= 10; j++) {
    // console.log(i + " X " + j + " = " + i * j);
    console.log(`${i} X ${j} = ${i * j}`);
  }
}

let myArray = ["flash", "batman", "superman"];
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

//break and continue
for (let index = 1; index <= 10; index++) {
  if (index == 5) {
    console.log("Detected 5");
    break;
  }
  console.log(`value of index is ${index}`);
}

for (let index = 1; index <= 10; index++) {
  if (index == 5) {
    console.log("Detected 5");
    continue;
  }
  console.log(`value of index is ${index}`);
}
