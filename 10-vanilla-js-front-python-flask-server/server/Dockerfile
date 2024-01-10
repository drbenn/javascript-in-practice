# Use a lightweight Python base image
FROM python:3.9-slim
# FROM python:3

# Set working directory for the app
WORKDIR /app

# Copy requirements.txt (if any) and install dependencies
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# Copy the app's code
COPY app.py app.py

# Expose port 4099 (or the port your app uses)
EXPOSE 4099

# Set the default command to run when starting the container
CMD ["python", "app.py"]


# https://stackoverflow.com/questions/55549164/how-to-connect-backend-python-flask-with-frontend-html-css-javascript

# Open a terminal in your project directory containing Dockerfile and run:

# 1. Generate requirements.txt file, there will be an extensive full list, trim down to only those specifically installed for the app, flask and flask-cors for this app 
# pip freeze > requirements.txt

# 2. create the container
# docker build -t python-text-add-image .

# 3. run the container with randomly generated name OR
# docker run -p 4099:4099 python-text-add-image

# 4. create container with custom name
# docker create -p 4099:4099 --name yolo-text-python-cont python-text-add-image

# 5. start custom named container
# docker start yolo-text-python-cont