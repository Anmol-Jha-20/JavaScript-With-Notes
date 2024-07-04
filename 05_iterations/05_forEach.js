//forEach Array method
const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (val) {
  console.log(val);
});

//forEach with arrow function
coding.forEach((item) => {
  console.log(item);
});

function printMe(item) {
  console.log(item);
}

coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

//forEach with array of objects
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
