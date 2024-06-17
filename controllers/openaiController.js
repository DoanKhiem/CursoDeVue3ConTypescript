// const openai = require('../config/openaiConfig');

// const generateMeta = async (title) => {

//     const description = await openai.createChatCompletion({
//         model: 'gpt-3.5-turbo',
//         messages: [
//             {
//                 role: 'user',
//                 content: 'Generate meta description for the following title: ' + title
//             }
//         ],
//         max_tokens: 100
//     });

//     console.log(description.data.choices[0].message);
// }

// const generateAnswer = async () => {
//     const response = await openai.chat.completions.create({
//         messages: [
//             { role: 'user', content: 'How many colours does a rainbow have' },
//         ],
//         model: 'gpt-3.5-turbo',
//     })

//     console.log(response.choices[0])
// }

// generateAnswer()

// module.exports = { generateAnswer };


const { OpenAI } = require('openai')
require('dotenv').config()

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY,
})

const generateAnswer = async (req, res) => {
    const { title } = req.body;

    const response = await openai.chat.completions.create({
        messages: [
            { role: 'user', content: 'How many colours does a rainbow have' + title },
        ],
        model: 'gpt-3.5-turbo',
    })

    console.log(response.choices[0].message.content)
}

const tag = async () => {
    const response = await openai.chat.completions.create({
        messages: [
            { role: 'user', content: 'How many colours does a rainbow have' + title },
        ],
        model: 'gpt-3.5-turbo',
    })

    console.log(response.choices[0].message.content)
}

const generateImage = async (desc) => {
    const image = await openai.images.generate({
        model: "dall-e-3",
        prompt: desc,
        n: 1,
        size: "1024x1024",
    });
}

module.exports = { generateAnswer, tag, generateImage };
// generateAnswer()