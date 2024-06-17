const readline = require('readline');
const { generateAnswer } = require('./controllers/openaiController');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name? ', generateAnswer);