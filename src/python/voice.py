from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
from .model import WhisperModel

app = FastAPI()

model = WhisperModel()

@app.post("/transcribe")
async def transcribe(audio: UploadFile = File(...)):
    audio_file = await audio.read()
    audio = model.load_audio(audio_file)
    audio = model.pad_or_trim(audio)

    mel = model.log_mel_spectrogram(audio).to(model.device)

    _, probs = model.detect_language(mel)
    print(f"Detected language: {max(probs, key=probs.get)}")

    options = model.DecodingOptions()
    result = model.decode(model, mel, options)

    return JSONResponse(content={'transcription': result.text})