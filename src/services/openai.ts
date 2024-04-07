async function getOpenAiResponse(prompt: string): Promise<string> {
    let openAiResponse;
    try {
      openAiResponse = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "text-davinci-003", // Adjust model as necessary
          prompt: prompt, // Use the provided text as prompt
          temperature: 0.5,
          max_tokens: 100,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        }),
      });
    } catch (error) {
      console.error("Error fetching from OpenAI API:", error);
      throw error; // Propagate the error to the caller
    }
  
    const completionResult = await openAiResponse.json();
    console.log("OpenAI completion:", completionResult.choices[0].text);
  
    return completionResult.choices[0].text;
  }
  
  export default getOpenAiResponse;