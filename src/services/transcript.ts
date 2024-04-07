async function transcript(prevState: any, formData: FormData) {
  "use server";
  const id = Math.random().toString(36);

  if (process.env.NEXT_PUBLIC_API_URL === undefined) {
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

  let response;
  try {
    response = await fetch(`${apiUrl}/whisper`, {
      method: "POST",
      body: formData,
    });
  } catch (error) {
    console.error("Error fetching from whisper API:", error);
    return;
  }

  const transcription = await response.json();
  console.log(`Transcription: ${transcription.text}`);

  let openAiResponse;
  try {
    openAiResponse = await fetch("https://api.openai.com/v1/completions", {
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
  } catch (error) {
    console.error("Error fetching from OpenAI API:", error);
    return;
  }

  const completionResult = await openAiResponse.json();
  console.log("OpenAI completion:", completionResult.choices[0].text);

  return {
    sender: transcription.text,
    response: completionResult.choices[0].text,
    id: id,
  };
}

export default transcript;

