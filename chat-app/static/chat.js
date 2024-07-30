document.addEventListener('DOMContentLoaded', (event) => {
    var socket = io.connect('http://' + document.domain + ':' + location.port);

    socket.on('message', function(msg) {
        let li = document.createElement('li');
        li.textContent = msg;
        document.getElementById('messages').appendChild(li);
        document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
    });

    document.getElementById('message').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
});

function sendMessage() {
    var message = document.getElementById('message').value;
    if (message.trim() !== '') {
        socket.send(message);
        document.getElementById('message').value = '';
    }
}
