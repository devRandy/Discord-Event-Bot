const OpenAI = require('openai');

const orgId = 'option-org-id';
const key = "your-key-here"
let openai;

class ChatGptClient {
    constructor() {
        openai = new OpenAI({
            // organization: orgId,
            // project: "$PROJECT_ID",
            // apiKey: key
        });
    };

    getOpenAIClient() {
        return openai;
    }

    async testMessage() {
        const completion = await this.getOpenAIClient().chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                {
                    role: "user",
                    content: "Write a haiku about recursion in programming.",
                },
            ],
        });
        console.log(completion.choices[0].message);
    }
}


module.exports = {
    ChatGptClient
}