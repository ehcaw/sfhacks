FROM nvidia/cuda:12.2.0-base-ubuntu20.04

WORKDIR /sfhacks

COPY Users/danielung/Desktop/projects/sfhacks/requirements.txt requirements.txt
RUN apt-get update -q && DEBIAN_FRONTEND=noninteractive apt-get install \
 -y --no-install-recommends git ffmpeg python3-pip && \
 apt-get clean autoclean && apt-get autoremove --yes
RUN pip3 install -r requirements.txt
# Preload model so that startup time isn't too slow
RUN python3 -c 'import whisper;whisper.load_model("base", device="cpu")'
COPY Users/danielung/Desktop/projects/sfhacks/src/python/app.py app.py

EXPOSE 8000

CMD [ "gunicorn","-w1","-b 0.0.0.0:8000","-t","600","app:app"]
