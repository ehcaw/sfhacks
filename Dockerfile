FROM nvidia/cuda:12.2.0-base-ubuntu20.04

WORKDIR /sfhacks

# Install dependencies
RUN apt-get update -q && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
    git ffmpeg python3-pip && \
    apt-get clean autoclean && \
    apt-get autoremove --yes && \
    rm -rf /var/lib/apt/lists/*

# Install gunicorn
RUN pip3 install gunicorn

# Copy requirements and install them
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

# Preload model so that startup time isn't too slow
RUN python3 -c 'import whisper; whisper.load_model("base", device="cpu")'

# Copy application code
COPY src/python/app.py app.py 

# Expose the port your app runs on
EXPOSE 8000

# Command to run the application
CMD ["gunicorn", "-w", "1", "-b", "0.0.0.0:8000", "-t", "600", "app:app"]
