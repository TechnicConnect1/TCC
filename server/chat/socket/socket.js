const { Server } = require('socket.io');
const http = require('http');
const express = require('express');
require('dotenv').config();
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: [`http://localhost:${process.env.API_PORT}`],
        methods: ['GET', 'POST']
    }
});

const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
};

const userSocketMap = {}; // { userId: socketId }

io.on('connection', (socket) => {
    console.log('Usuário conectado', socket.id);

    const userId = socket.handshake.query.userId;
    if (userId !== 'undefined') {
        userSocketMap[userId] = socket.id;
    };

    io.emit('getOnlineUsers', Object.keys(userSocketMap));

    socket.on('disconnect', () => {
        console.log('Usuário desconectado', socket.id);
        delete userSocketMap[userId];
        io.emit('getOnlineUsers', Object.keys(userSocketMap));
    });
});

module.exports = { app, io, server, getReceiverSocketId }; 