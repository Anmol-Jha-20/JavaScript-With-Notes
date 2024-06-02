//singleton

//we can create objects by two methods: object literals and constructor method(object.create)
//object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Anmol",
  "full name": "Anmol Jha",
  [mySym]: "mykey1",
  age: 18,
  location: "delhi",
  email: "anmol@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser.email);
console.log(JsUser["full name"]); //Another way of access the value of object's variable
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email = "anmol@yahoo.com";
// Object.freeze(JsUser); //The Object.freeze() method is used to freeze an object. Freezing an object does not allow new properties to be added to the object and prevents removing or altering the existing properties.
JsUser.email = "anmol@bing.com";
console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
