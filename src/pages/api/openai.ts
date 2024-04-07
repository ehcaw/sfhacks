import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || '', dangerouslyAllowBrowser: true 
});

async function getOpenAiResponse(prompt: string): Promise<string> {
    let openAiResponse;
    openAiResponse = await openai.chat.completions.create({
      messages: [{ role: 'user', content: "The user is explaining this topic, explain if it is a good explanation or not:" + prompt }],
      model: 'gpt-3.5-turbo',
      max_tokens: 50,
    });
  
    const completionResult = await openAiResponse
    
    return completionResult.choices[0].message.content ?? '';
}

export default getOpenAiResponse;