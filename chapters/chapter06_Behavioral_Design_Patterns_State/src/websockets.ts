import { webSocket } from 'rxjs/webSocket';
import { throttleTime, bufferTime, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const chatSocket = webSocket<string>('ws://localhost:8080/chat');

const messageStream$: Observable<string> = chatSocket.pipe(
  tap(message => console.log('New message received:', message)), // Debugging/logging
  throttleTime(100),
  bufferTime(1000),
  map(messages => messages.join('\n'))
);

messageStream$.subscribe({
  next: bufferedMessages => {
    console.log('Buffered messages:', bufferedMessages);
    updateChatUI(bufferedMessages);
  },
  error: error => console.error('WebSocket error:', error)
});

function updateChatUI(messages: string) {
    // Update the chat UI with the new messages
    console.log('Updating chat UI with:', messages);
}