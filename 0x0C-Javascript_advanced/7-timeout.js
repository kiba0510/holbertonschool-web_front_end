// Stack order and setTimeout

console.log('Start of the execution queue');

setTimeout(() => {
    console.log('Final code block to be excecuted');

}, 0);

for (let i = 1; i < 101; i++) {
    console.log(i);
}

console.log('End of the loop printing');