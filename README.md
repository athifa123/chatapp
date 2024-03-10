# Real-time Chat App with React and WebSocket.io

This repository contains a simple real-time chat application built using React for the frontend and WebSocket.io for server-client communication in Node.js for the backend.

## Features

- **Real-time messaging:** Users can send and receive messages instantly without refreshing the page.
- **Multiple Users:** The chat allows multiple users to interact simultaneously.
- **Simple UI:** The user interface is designed to be intuitive and easy to use.

## Technologies Used

- **Frontend:**
  - React: A JavaScript library for building user interfaces.
  - WebSocket: A communication protocol providing full-duplex communication channels over a single TCP connection.

- **Backend:**
  - Node.js: A JavaScript runtime environment for server-side development.
  - Express.js: A web application framework for Node.js.
  - WebSocket.io: A WebSocket library for Node.js.
## Setup Instructions

### Frontend

- Clone the repository:

    ```bash
    git clone <you repo link>
    ```
- Navigate to the frontend directory:
    ```bash
    cd chatapp/ui
    ```
- Install dependencies:
    ```bash
    npm install
    ```
- Start the React development server:
    ```bash
    npm run start
    ```

This will start the development server on `http://localhost:3000`.

### Backend

- Navigate to the backend directory:
    ```bash
    cd chat-app/wsserver
    ```

- Install dependencies:
    ```bash
    npm install
    ```

- Start the Node.js server:
    ```bash
    npm run start
    ```

The WebSocket server will start listening on `http://localhost:8080`.

### Usage
- Open your browser and navigate to http://localhost:3000.
- Start chatting! There's no need to log in or create an account.
- Simply enter a username and begin messaging.