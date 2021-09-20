// 🔐🔐 Closure 🔐🔐
// A closure is a function having access to the parent scope, 
// even after the parent function has closed.

function welcomeMessage(fullName) {
    alert ('Welcome ' + fullName);
}

const guillaume = welcomeMessage('Guillaume');
const alex = welcomeMessage('Alex');
const fred = welcomeMessage('Fred');