import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './lib/counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

/************************************************************************************************
 *                    SINGLETON
 * 
 *  A singleton is a JavaScript anti-pattern! In many programming languages, such as Java or C++, 
 *  it’s not possible *  to directly create objects the way we can in JavaScript. In those object-
 *  oriented programming languages, we need to create a class, which creates an object. That created 
 *  object has the value of the instance of the class, just like the value of instance in the JavaScript example.
 *  
 *  However, the class implementation shown in the examples above is actually overkill. Since we can directly 
 *  create objects in JavaScript, we can simply use a regular object to achieve the exact same result. Let’s cover *  some of the disadvantages of using Singletons!
 * 
 * Although an anti-pattern, only one instance can of the singleton class can be made, thus the check at the
 * beginning of class of one instance and the the usage of Object.freeze to prevent alteration of the class.
 * 
 */

import { redButton } from './lib/singleton/redButton'
import { blueButton } from './lib/singleton/blueButton'

console.log("Click on either of the buttons 🚀!");

document.querySelector<HTMLDivElement>('#singleton')!.innerHTML = `
<div>
  <button id="blue" style="background-color: #0000ff;">Blue Button</button>
  <button id="red" style="background-color: #ff0000;">Red Button</button>
</div>
`;

redButton(document.querySelector<HTMLButtonElement>('#red')!);
blueButton(document.querySelector<HTMLButtonElement>('#blue')!);