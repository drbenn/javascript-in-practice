import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))



document.querySelector('#rerenderable-hello-world').innerHTML = `
    <hello-world name="Timmy" emotion="Sassy"></hello-world>
`

nameChangeButton.addEventListener('click', () => {
    console.log("LISTENED");
    document.querySelector('hello-world').setAttribute('name', 'Juggalo');
    document.querySelector('hello-world').setAttribute('emotion', 'Brain Dead');
    console.log(document.querySelector('hello-world'));
    // todo: need to figure out rerender after update to element
    // document.querySelector('hello-world').getAttribute('name')
    const newName = document.querySelector('hello-world').getAttribute('name');
    const newEmotion = document.querySelector('hello-world').getAttribute('emotion');
    document.querySelector('#rerenderable-hello-world').innerHTML = `
    <hello-world name="${newName}" emotion="${newEmotion}"></hello-world>
`
  })


