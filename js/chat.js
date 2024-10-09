document.getElementById('sendMessage').onclick = function() {
    const messageText = document.getElementById('messageText').value;
    const messageList = document.getElementById('messageList');
    const message = document.createElement('div');
    message.textContent = messageText;
    messageList.appendChild(message);
    document.getElementById('messageText').value = ''; // Clear input
};
