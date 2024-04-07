/**
 *
 * @param prevState
 * @param formData
 * @returns chat response
 */
async function transcript(prevState: any, formData: FormData) {
  "use server";
  const id = Math.random().toString(36);

  if (process.env.REACT_APP_API_URL === undefined) {
    console.error("GCP credentials not set");
    return {
      sender: "",
      response: "GCP credentials not set",
    };
  }

  const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8000";
  const file = formData.get("audio") as File;

  if (file.size === 0) {
    return {
      sender: "",
      response: "No audio file provided",
    };
  }

  console.log(">>", file);
  const arrayBuffer = await file.arrayBuffer();
  const audio = new Uint8Array(arrayBuffer);
  console.log("== Transcribe Audio Sample ==");

  const response = await fetch(`${apiUrl}/whisper`, {
    method: "POST",
    body: formData,
  });

  const transcription = await response.json();
  console.log(`Transcription: ${transcription.text}`);

  const openAiResponse = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003", // Adjust model as necessary
      prompt: transcription.text, // Use the transcription text as prompt
      temperature: 0.5,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    }),
  });

  const completionResult = await openAiResponse.json();
  console.log("OpenAI completion:", completionResult.choices[0].text);

  return {
    sender: transcription.text,
    response: completionResult.choices[0].text,
    id: id,
  };
}

export default transcript;

/**
 * 

"use server";

import {
  AzureKeyCredential,
  ChatRequestMessage,
  OpenAIClient,
} from "@azure/openai";

async function transcript(prevState: any, formData: FormData) {
  "use server";

  const id = Math.random().toString(36);

  console.log("PREVIOUS STATE:", prevState);
  if (
    process.env.AZURE_API_KEY === undefined ||
    process.env.AZURE_ENDPOINT === undefined ||
    process.env.AZURE_DEPLOYMENT_NAME === undefined ||
    process.env.AZURE_DEPLOYMENT_COMPLETIONS_NAME === undefined
  ) {
    console.error("Azure credentials not set");
    return {
      sender: "",
      response: "Azure credentials not set",
    };
  }

  const file = formData.get("audio") as File;
  if (file.size === 0) {
    return {
      sender: "",
      response: "No audio file provided",
    };
  }

  console.log(">>", file);

  const arrayBuffer = await file.arrayBuffer();
  const audio = new Uint8Array(arrayBuffer);

  // ---   get audio transcription from Azure OpenAI Whisper ----

  console.log("== Transcribe Audio Sample ==");

  const client = new OpenAIClient(
    process.env.AZURE_ENDPOINT,
    new AzureKeyCredential(process.env.AZURE_API_KEY)
  );

  const result = await client.getAudioTranscription(
    process.env.AZURE_DEPLOYMENT_NAME,
    audio
  );
  console.log(`Transcription: ${result.text}`);

  // ---   get chat completion from Azure OpenAI ----

  const messages: ChatRequestMessage[] = [
    {
      role: "system",
      content:
        "You are a helpful assistant. You will answer questions and reply I cannot answer that if you dont know the answer.",
    },
    { role: "user", content: result.text },
  ];

  console.log(`Messages: ${messages.map((m) => m.content).join("\n")}`);

  const completions = await client.getChatCompletions(
    process.env.AZURE_DEPLOYMENT_COMPLETIONS_NAME,
    messages,
    { maxTokens: 128 }
  );

  console.log("chatbot: ", completions.choices[0].message?.content);

  const response = completions.choices[0].message?.content;

  console.log(prevState.sender, "+++", result.text);
  return {
    sender: result.text,
    response: response,
    id: id,
  };
}

export default transcript;
 */
