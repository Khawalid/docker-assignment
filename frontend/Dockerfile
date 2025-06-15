# Build stage
FROM node:18 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Runtime stage
FROM node:18-slim

WORKDIR /app

# Install serve or http-server globally
RUN npm install -g serve

COPY --from=build /app/dist /app

EXPOSE 3000

CMD ["serve", "-s", ".", "-l", "3000"]
