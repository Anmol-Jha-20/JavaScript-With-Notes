const tinderUser1 = {}; // non-singleton object
const tinderUser = new Object(); // singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "anmol",
      lastname: "jha",
    },
  },
};

console.log(regularUser.fullname.userfullname.firstname);

//merging objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign(obj1, obj2);     //obj2 will be merge with obj1
// const obj3 = Object.assign({}, obj1, obj2);  // obj1 and obj2 both are merge with {}(empty object)

const obj3 = { ...obj1, ...obj2 }; //using spread operator
console.log(obj3);

//Array of objects
const users = [
  {
    id: 1,
    email: "a@gmail.com",
  },
  {
    id: 2,
    email: "b@gmail.com",
  },
];

console.log(users[0].email);

console.log(tinderUser); //output: { id: '123abc', name: 'Sammy', isLoggedIn: false }
console.log(Object.keys(tinderUser)); //output: [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //output: [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); //output: [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn")); //output: true (The hasOwnProperty() method returns true if the specified property is a direct property of the object — even if the value is null or undefined .)

//Object Destructuring
const course = {
  coursename: "xyz",
  price: "999",
  courseInstructor: "Anmol",
};

//course.courseInstructor;

const { courseInstructor: instructor } = course; //Another way of accessing objects's values

// console.log(courseInstructor);
console.log(instructor);

//JSON format (JavaScript Object Notation.)
// {
//   "name":"Anmol",
//   "age": 18,
//   "place": "mumbai",
// }

// [{}, {}, {}];
