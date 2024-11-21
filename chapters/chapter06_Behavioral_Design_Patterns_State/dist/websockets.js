"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var webSocket_1 = require("rxjs/webSocket");
var operators_1 = require("rxjs/operators");
var chatSocket = (0, webSocket_1.webSocket)('ws://localhost:8080/chat');
var messageStream$ = chatSocket.pipe((0, operators_1.tap)(function (message) { return console.log('New message received:', message); }), // Debugging/logging
(0, operators_1.throttleTime)(100), (0, operators_1.bufferTime)(1000), (0, operators_1.map)(function (messages) { return messages.join('\n'); }));
messageStream$.subscribe({
    next: function (bufferedMessages) {
        console.log('Buffered messages:', bufferedMessages);
        updateChatUI(bufferedMessages);
    },
    error: function (error) { return console.error('WebSocket error:', error); }
});
function updateChatUI(messages) {
    // Update the chat UI with the new messages
    console.log('Updating chat UI with:', messages);
}
