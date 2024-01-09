// npm i nodemon ts-node       
// there is no need to independently install typescript
// as async is required on main script, main function is wrapped in async to execute async requests. This is because ES MODULES have top level async, but the main script does not

console.log('yolos');
import fs from 'fs';
import crypto from 'crypto';
import util from './util';


let contents: string;

async function main() { 
    contents = await util.open('package.json');
    console.log(contents);
    console.log('BOOYAH');
};


main();

