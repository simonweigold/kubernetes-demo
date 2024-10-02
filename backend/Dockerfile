FROM python:3.9-slim

WORKDIR /app
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# Copy the Flask app
COPY . .

# Copy the .env file to the container
COPY .env .env

# Make sure the .env file is loaded when the container starts
CMD ["python", "app.py"]
