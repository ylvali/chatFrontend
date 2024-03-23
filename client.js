import io from 'socket.io-client';

const socket = io('https://chat-server.ysojs.se/');

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');
let person; //  The name of the person

person = '';

// Send the message
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        let msg = person + " : " + input.value;

        socket.emit('chat message', msg);
        input.value = '';
    }
});

// Receive the message
socket.on('chat message', (msg) => {
    let item = document.createElement('li');

    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

// New user
socket.on('user connected', (msg) => {
    let item = document.createElement('li');

    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

// Disconnect
socket.on('user disconnected', (msg) => {
    let item = document.createElement('li');

    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

// Function for asking the name
function askTheName() {
    let text;

    person = prompt("Please enter your name:", "BladeRunner");
    if (person == null || person == "") {
        text = "User cancelled the prompt.";
    } else {
        text = "Chat of: " + person;
    }

    // Welcome text
    let item = document.createElement('li');

    item.textContent = "Welcome "+person;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);

    document.getElementById("chatName").innerHTML = text;
}
askTheName();
