// channels.js
document.addEventListener('DOMContentLoaded', () => {
  const channelsList = document.getElementById('channels-list');
  const addChannelButton = document.getElementById('add-channel');
  const channelNameInput = document.getElementById('new-channel-name');
  const channelAvatarInput = document.getElementById('new-channel-avatar');

  addChannelButton.addEventListener('click', () => {
    const channelName = channelNameInput.value.trim();
    const channelAvatar = channelAvatarInput.files[0];

    if (channelName) {
      const channel = document.createElement('li');
      channel.classList.add('channel-item');

      // Создаем аватар канала
      const avatar = document.createElement('img');
      const reader = new FileReader();

      reader.onload = function(e) {
        avatar.src = e.target.result;
        avatar.alt = `${channelName} Avatar`;
        avatar.classList.add('channel-avatar');
        channel.appendChild(avatar);
      };

      if (channelAvatar) {
        reader.readAsDataURL(channelAvatar);
      } else {
        avatar.src = 'images/default-channel-avatar.png'; // аватар по умолчанию
      }

      // Создаем имя канала
      const name = document.createElement('span');
      name.textContent = channelName;
      channel.appendChild(name);

      // Создаем поле для ввода поста
      const postInput = document.createElement('textarea');
      postInput.placeholder = 'Напишите сообщение для этого канала...';
      channel.appendChild(postInput);

      const sendPostButton = document.createElement('button');
      sendPostButton.textContent = 'Отправить пост';
      channel.appendChild(sendPostButton);

      // Функциональность отправки поста
      sendPostButton.addEventListener('click', () => {
        const postContent = postInput.value.trim();
        if (postContent) {
          const post = document.createElement('div');
          post.classList.add('channel-post');
          post.textContent = postContent;
          channel.appendChild(post);
          postInput.value = '';
        } else {
          alert('Пожалуйста, введите сообщение.');
        }
      });

      channelsList.appendChild(channel);
      channelNameInput.value = '';
      channelAvatarInput.value = '';
    } else {
      alert('Пожалуйста, введите имя канала.');
    }
  });
});
