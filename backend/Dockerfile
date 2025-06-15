# Stage 1: Build
FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Production runtime
FROM node:18-slim

WORKDIR /app

# Install Docker CLI to use docker commands inside the container
RUN apt-get update && \
    apt-get install -y curl docker.io && \
    rm -rf /var/lib/apt/lists/*

# Copy app code from build stage
COPY --from=build /app /app

# Make monitoring script executable
RUN chmod +x /app/monitoring.sh

# Expose app port
EXPOSE 5000

# Run monitoring in background and start the Node.js app
CMD ["bash", "-c", "while true; do /app/monitoring.sh; sleep 60; done & node server.js"]
