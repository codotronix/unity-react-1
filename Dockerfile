# Use a smaller base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the app for production
RUN npm run build

# Install a simple static file server
RUN npm install -g serve

# Expose the port serve will run on
EXPOSE 9090

# Run the app with serve
CMD ["serve", "-s", "dist", "-l", "9090"]
