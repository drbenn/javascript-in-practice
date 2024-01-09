import { logMessage } from "./ts/helpers.js";
import { services } from "./ts/services.js";
console.log('modules init');
// Calling single function from another js file
logMessage('Hello logMessage in helpers.ts from main.ts');
// Calling functions from another js file where the js functions are wrapped and exported as its own module/object
services.foo();
services.bar();
