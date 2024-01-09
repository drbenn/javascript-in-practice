import { logMessage } from "./js/helpers.js";
import { services } from "./js/services.js";


console.log('modules init');

// Calling single function from another js file
logMessage('Hello logMessage in helpers.js from main.js')

// Calling functions from another js file where the js functions are wrapped and exported as its own module/object
services.foo();
services.bar();
