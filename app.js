const readline = require('readline');
const {  generateAnswer, tag, generateImage  } = require('./controllers/openaiController');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name? ', generateAnswer);
rl.question('What is tag name? ', tag);
rl.question('What is image name? ', generateImage);