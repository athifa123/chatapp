import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? process.env.WEBSOCKET_URL : 'http://localhost:8080';

export const socket = io('https://chatapp-nu-ebon.vercel.app'+'/wss-chat');