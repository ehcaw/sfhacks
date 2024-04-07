async function textToSpeech(text: string, voiceId: string = 'TWUKKXAylkYxxlPe4gx0') {
    "use server";
  
    const options = {
      method: 'POST',
      headers: {
        'xi-api-key': process.env.NEXT_PUBLIC_ELEVEN_API_KEY|| '',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model_id: "eleven_multilingual_v2",
        text: text,
        voice_settings: {
          similarity_boost: 0.9,
          stability: 1
        }
      })
    };
  
    try {
      const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_22050_32`, options);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  
  export default textToSpeech;