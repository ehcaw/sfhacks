import whisper

class WhisperModel:
    def __init__(self):
        self.model = whisper.load_model("base")

    def predict(self, data):
        return self.model.predict(data)

    def train(self, data):
        self.model.train(data)
        return self.model

    def save(self, path):
        whisper.save_model(self.model, path)
    
    def return_model(self):
        return self.model