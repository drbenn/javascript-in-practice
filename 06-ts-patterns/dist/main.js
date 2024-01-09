// import { logMessage } from "./lib/helpers.js";
// import { services } from "./lib/services.js";
// console.log('modules init');
// // Calling single function from another js file
// logMessage('Hello logMessage in helpers.ts from main.ts')
// // Calling functions from another js file where the js functions are wrapped and exported as its own module/object
// // services.foo();
// // services.bar();
import "./lib/singleton/redButton";
import "./lib/singleton/blueButton";
console.log("Click on either of the buttons 🚀!");
