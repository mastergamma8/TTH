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
      avatar.classList.add('channel-avatar');

      if (channelAvatar) {
        const reader = new FileReader();
        reader.onload = function(e) {
          avatar.src = e.target.result;
        };
        reader.readAsDataURL(channelAvatar);
      } else {
        avatar.src = 'images/default-channel-avatar.png'; // аватар по умолчанию
      }
      channel.appendChild(avatar);

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

      // Добавляем кнопку для удаления канала
      const deleteChannelButton = document.createElement('button');
      deleteChannelButton.textContent = 'Удалить канал';
      deleteChannelButton.classList.add('delete-channel');
      channel.appendChild(deleteChannelButton);

      // Функциональность удаления канала
      deleteChannelButton.addEventListener('click', () => {
        channelsList.removeChild(channel);
      });

      channelsList.appendChild(channel);
      channelNameInput.value = '';
      channelAvatarInput.value = '';
    } else {
      alert('Пожалуйста, введите имя канала.');
    }
  });
});
