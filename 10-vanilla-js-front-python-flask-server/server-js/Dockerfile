# Use a lightweight Node.js base image
# all node options here https://hub.docker.com/_/node
# for Node.js 18 (Alpine Linux-based, lightweight)
# FROM node:18-alpine  
# Running node 20.9.0 locally so closest alpine version
FROM node:20-alpine  

# Set working directory within container
# WORKDIR /app  

# Copy package.json files for dependency installation
COPY package*.json ./ 

# Install dependencies
RUN npm install  

# Copy remaining project files
COPY . .  

# Expose the port your app listens on (adjust if different)
EXPOSE 4555  

# Start the application
CMD ["node", "app.js"]  

# Open a terminal in your project directory containing Dockerfile and run: 

# 1. create the container
# docker build -t yolo-text-image .

# 2. run the container with randomly generated name OR
# docker run -p 4555:4555 -name  yolo-text-image

# 3. create container with custom name
# docker create -p 4555:4555 --name yolo-text-nodeJS yolo-text-image

# 4. start custom named container
# docker start yolo-text-nodeJS