//Global namespace Pollution: Global variables live in the global namespace. The more global variables you create, the more you risk "polluting" this namespace. This means you're filling up the global space with a lot of variables, which can lead to naming conflicts. Polluting Global namespace causes name collision.
//it is very important not to add everything to the global namespace. If someone else use the same variable or function names, it can lead to name collision.
//Immediately Invoked Function Expressions (IIFE): Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.

//named IIFE
(function Db1() {
  console.log("DB CONNECTED");
})(); //(function definition)();

//unnamed IIFE
(() => {
  console.log("DB CONNECTED TWO");
})(); //(arrow function)();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("Anmol"); //((parameter)=>{})(argument)
