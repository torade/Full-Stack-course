// import fs from 'fs';
import fs from 'fs/promises';

// readFile() - callback version
// fs.readFile('./test.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })


// readfileSync() - synchronous version
// const data = fs.readFileSync('./test.txt', 'utf-8');
// console.log(data);


// readFile() - promise version (.then)
fs.readFile('./test.txt', 'utf-8')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });


// readFile() - async/await version
const readFile = async() => {
    try{
        const data = await fs.readFile('./test.txt', 'utf-8');
        console.log(data);
    } catch(error) {
        console.error(error);
    }
}




//wruteFile()

const writeFile = async() => {
    try{
        await fs.writeFile('./test.txt', 'Hello World!');
        console.log('file written to')
    }catch(error) {
        console.error(error);
    }
}

// append
const appendFile = async() => {
    try{
        await fs.appendFile('./test.txt', '\nTesting append file');
        console.log('file appended to') 
    }catch(error) {
        console.error(error);
    }
}

writeFile();
appendFile();
readFile();
