// require is old way(commonJs) to do imports ie const fs = require('fs'); and const util = require('./util');
// top level async doesnt work in old way
// Using new esModules is better bc that matches the way the front end works 
// and most importantly library authors are updating from commonJs to esm modules, however, commonJs cannot import an esm module whereas a esm module CAN import a commonJs


// 1. npm init -y

// 2. in package add "type": "module",

// 3, requires now become import statements, ie fs below
// AWESOME - bc esmodules are by default asynchronously loaded, top level await work on each js file, so you dont need to call async, just await as shown below

// 4. Remove 'use strict' from everywhere because by default esmodules use strict-mode

// 5. __filename and __dirname no longer work in esmodules but you can instead use
//      import * as url from 'url';
//      const __filename = url.fileURLToPath(import.meta.url);
//      const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


// import fs from 'fs';
// import crypto from 'crypto';

// import util from './util.js';

// let contents = await util.open('package.json');

// console.log(contents);


import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 4555;
app.use(cors({
    origin: '*' // Allow requests from any origin (use cautiously in production)
}));
// Parse JSON request bodies
app.use(bodyParser.json());
// Parse URL-encoded request bodies (for forms)
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/add-yolo', (req, res) => {
    const word = req.body.word;
    const yoloWord = `${word} yolo`;
    res.status(200).json(yoloWord)
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
