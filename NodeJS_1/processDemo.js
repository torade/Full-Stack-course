//argv
console.log(process.argv);

//env
console.log(process.env.LC_NAME);

//pid
console.log(process.pid);

//cwd
console.log(process.cwd());

//title
console.log(process.title);

//mem usage
console.log(process.memoryUsage());

//update
console.log(process.uptime());

process.on('exit', (code) => {
    console.log(`About to exit with the code: ${code}`);
})

//exit
process.exit(0);
console.log('Hello')
