document.getElementById('sendMessage').onclick = function() {
    const messageText = document.getElementById('messageText').value;
    if (messageText.trim() !== "") {
        const messageList = document.getElementById('messageList');
        const newMessage = document.createElement('div');
        newMessage.textContent = messageText;
        messageList.appendChild(newMessage);
        document.getElementById('messageText').value = '';
    }
};
