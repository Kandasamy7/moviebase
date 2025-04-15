# Use lightweight Node 20 Alpine image
FROM node:23-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire backend source code
COPY . .

# Expose the port your Express server listens on
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
