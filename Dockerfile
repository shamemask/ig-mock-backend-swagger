FROM node:14

WORKDIR /app/

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define environment variable for the port
ENV PORT=3000

# Run the command to start the server
CMD ["npm", "start"]

# команда для запуска докер файла
# docker build -t ig-mock-backend .