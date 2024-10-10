document.addEventListener('DOMContentLoaded', () => {
  const chatBox = document.getElementById('chat-box');
  const chatInput = document.getElementById('chat-input');
  const sendMessageButton = document.getElementById('send-message');
  const clearChatButton = document.getElementById('clear-chat');
  const fileInput = document.getElementById('file-input');
  const userNickname = "Твой Ник";

  // Для постов
  const postInput = document.getElementById('post-input');
  const postFileInput = document.getElementById('post-file-input'); // Поле для файлов в постах
  const publishPostButton = document.getElementById('publish-post');
  const postsSection = document.getElementById('posts-section'); // Секция постов

  sendMessageButton.addEventListener('click', () => {
    const message = chatInput.value.trim();
    const files = fileInput.files;

    if (message || files.length > 0) {
      const newMessage = document.createElement('div');
      newMessage.classList.add('message');

      const sender = document.createElement('strong');
      sender.textContent = `${userNickname}: `;
      newMessage.appendChild(sender);

      if (message) {
        const text = document.createElement('span');
        text.textContent = message;
        newMessage.appendChild(text);
      }

      if (files.length > 0) {
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
      fileInput.value = '';
      chatBox.scrollTop = chatBox.scrollHeight;
    } else {
      alert('Please enter a message or select a file.');
    }
  });

  // Публикация постов
  publishPostButton.addEventListener('click', () => {
    const postMessage = postInput.value.trim();
    const postFiles = postFileInput.files;

    if (postMessage || postFiles.length > 0) {
      const newPost = document.createElement('div');
      newPost.classList.add('post');

      const postSender = document.createElement('strong');
      postSender.textContent = `${userNickname}: `;
      newPost.appendChild(postSender);

      if (postMessage) {
        const postText = document.createElement('span');
        postText.textContent = postMessage;
        newPost.appendChild(postText);
      }

      if (postFiles.length > 0) {
        const postGallery = document.createElement('div');
        postGallery.classList.add('image-gallery');

        Array.from(postFiles).forEach(file => {
          if (file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = (e) => {
              const img = document.createElement('img');
              img.src = e.target.result;
              postGallery.appendChild(img);
            };

            reader.readAsDataURL(file);
          } else {
            const fileLink = document.createElement('a');
            fileLink.href = URL.createObjectURL(file);
            fileLink.textContent = `Download ${file.name}`;
            fileLink.classList.add('file-link');
            postGallery.appendChild(fileLink);
          }
        });

        newPost.appendChild(postGallery);
      }

      postsSection.appendChild(newPost);
      postInput.value = '';
      postFileInput.value = '';
      postsSection.scrollTop = postsSection.scrollHeight;
    } else {
      alert('Please enter a message or select a file.');
    }
  });

  clearChatButton.addEventListener('click', () => {
    chatBox.innerHTML = '';
    alert('Chat cleared.');
  });
});
