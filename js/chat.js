document.getElementById('sendMessage').onclick = function() {
    const messageText = document.getElementById('messageText').value;
    const imageInput = document.getElementById('imageInput');
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

    if (imageInput.files.length > 0) {
        const image = document.createElement('img');
        image.src = URL.createObjectURL(imageInput.files[0]);
        image.style.maxWidth = '100%';
        image.style.borderRadius = '5px';
        messageContainer.appendChild(image);
    }

    messageList.appendChild(messageContainer);
    document.getElementById('messageText').value = ''; // Очистить поле ввода
    imageInput.value = ''; // Очистить файл
    messageList.scrollTop = messageList.scrollHeight; // Авто-прокрутка вниз
};

// Добавление эмодзи
document.getElementById('emojiButton').onclick = function() {
    const emoji = '😊'; // Можешь добавить больше эмодзи
    const messageText = document.getElementById('messageText');
    messageText.value += emoji; // Добавить эмодзи в поле ввода
};
