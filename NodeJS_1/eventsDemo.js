import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();
function greetHandler(name) {
    console.log(`Hello ${name}!`)
}

function goodByeHandler(name) {
    console.log(`Goodbye ${name}!`)
}

// Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodByeHandler);

// Emit events
myEmitter.emit('greet', 'John');
myEmitter.emit('goodbye', 'John');

//error handling
myEmitter.on('error', (err) => {
    console.error('An error occurred:', err);
})

//simulate an error
myEmitter.emit('error', new Error('Something went wrong!'));
