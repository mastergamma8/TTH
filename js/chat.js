document.addEventListener('DOMContentLoaded', () => {
  const chatBox = document.getElementById('chat-box');
  const chatInput = document.getElementById('chat-input');
  const sendMessageButton = document.getElementById('send-message');
  const clearChatButton = document.getElementById('clear-chat');
  const fileInput = document.getElementById('file-input'); // Поле для выбора файлов
  const userNickname = "Твой Ник"; // Здесь можно динамически подставить текущий никнейм пользователя

  sendMessageButton.addEventListener('click', () => {
    const message = chatInput.value.trim();
    const files = fileInput.files; // Получаем выбранные файлы

    if (message || files.length > 0) {
      const newMessage = document.createElement('div');
      newMessage.classList.add('message');

      // Добавляем никнейм отправителя
      const sender = document.createElement('strong');
      sender.textContent = `${userNickname}: `;
      newMessage.appendChild(sender);

      if (message) {
        // Добавляем текст сообщения
        const text = document.createElement('span');
        text.textContent = message;
        newMessage.appendChild(text);
      }

      if (files.length > 0) {
        // Если есть файлы, создаем альбом для картинок
        const gallery = document.createElement('div');
        gallery.classList.add('image-gallery');

        Array.from(files).forEach(file => {
          if (file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = (e) => {
              const img = document.createElement('img');
              img.src = e.target.result;
              gallery.appendChild(img);
            };

            reader.readAsDataURL(file);
          } else {
            // Если файл не картинка, показываем как ссылку
            const fileLink = document.createElement('a');
            fileLink.href = URL.createObjectURL(file);
            fileLink.textContent = `Download ${file.name}`;
            fileLink.classList.add('file-link');
            gallery.appendChild(fileLink);
          }
        });

        newMessage.appendChild(gallery);
      }

      chatBox.appendChild(newMessage);
      chatInput.value = '';
      fileInput.value = ''; // Очищаем поле для выбора файлов
      chatBox.scrollTop = chatBox.scrollHeight; // Прокручиваем чат вниз
    } else {
      alert('Please enter a message or select a file.');
    }
  });

  clearChatButton.addEventListener('click', () => {
    chatBox.innerHTML = '';
    alert('Chat cleared.');
  });
});
