document.getElementById('sendMessage').onclick = function() {
    const messageText = document.getElementById('messageText').value;
    const messageList = document.getElementById('messageList');
    const nickname = document.getElementById('nickname').value || 'Гость';

    const messageContainer = document.createElement('div');
    messageContainer.className = 'message';

    if (messageText) {
        const message = document.createElement('div');
        message.className = 'nickname';
        message.textContent = nickname + ': ' + messageText;
        messageContainer.appendChild(message);
    }

    messageList.appendChild(messageContainer);
    document.getElementById('messageText').value = '';
};
