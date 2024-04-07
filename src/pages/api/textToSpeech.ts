async function textToSpeech(text: string, voiceId: string = 'TWUKKXAylkYxxlPe4gx0') {
  const options = {
    method: 'POST',
    headers: {
      'xi-api-key': process.env.NEXT_PUBLIC_ELEVEN_API_KEY || '',
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

    // Check if the response is ok and the content type is audio
    if (response.ok && response.headers.get("content-type")?.includes("audio")) {
      // Instead of parsing as JSON, get the blob
      const audioBlob = await response.blob();
      // Create a URL for the blob
      const audioUrl = URL.createObjectURL(audioBlob);
      console.log(audioUrl);
      return { audio_url: audioUrl };
    } else {
      // Handle any errors if the response is not ok
      throw new Error('Network response was not ok or the content type is not audio');
    }
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default textToSpeech;
