import fs from 'fs/promises';

export default {

    // good but need to figure out else
    async open(file: any): Promise<string> {
        let content: any = await fs.readFile(file).then(value => {
            let dat = value.toString()
            // console.log(dat);
            return dat;
        }
            
        )
        return content.toString();
    }

//     await fs.readFile(file).then((value: any) => {
//         let contents = value.toString()
//         // console.log(dat);
//         return contents;
//     }).catch((error: any) => {
//         return 'error';
//      })
// }

};


// async function open(file: any): Promise<string> {
//     let content: Buffer = await fs.readFile(file);
//     return content.toString();
// }



// export default open;