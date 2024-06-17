// const readline = require('readline');
const express = require('express');
const {  generateAnswer, tag, generateImage  } = require('./controllers/openaiController');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('What is your name? ', generateAnswer);
// rl.question('What is tag name? ', tag);
// rl.question('What is image name? ', generateImage);


// app setup
const app = express();
app.listen(4000, () => console.log('listen'))

// middleware
app.use(express.json());

// routes
app.post('/generateAnswer', generateAnswer);
app.post('/tag', tag);
app.post('/generateImage', generateImage);