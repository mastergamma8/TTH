// channels.js
document.addEventListener('DOMContentLoaded', () => {
  const channelsList = document.getElementById('channels-list');
  const addChannelButton = document.getElementById('add-channel');
  const channelNameInput = document.getElementById('new-channel-name');
  const channelAvatarInput = document.getElementById('new-channel-avatar');

  addChannelButton.addEventListener('click', () => {
    const channelName = channelNameInput.value;
    const channelAvatar = channelAvatarInput.files[0];

    if (channelName) {
      const channel = document.createElement('li');
      channel.classList.add('channel-item');

      // Create channel avatar
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
        avatar.src = 'images/default-channel-avatar.png'; // default avatar
      }

      // Create channel name
      const name = document.createElement('span');
      name.textContent = channelName;
      channel.appendChild(name);

      // Create post input for channel
      const postInput = document.createElement('textarea');
      postInput.placeholder = 'Write a message to this channel...';
      channel.appendChild(postInput);

      const sendPostButton = document.createElement('button');
      sendPostButton.textContent = 'Send Post';
      channel.appendChild(sendPostButton);

      // Add post functionality
      sendPostButton.addEventListener('click', () => {
        const postContent = postInput.value;
        if (postContent) {
          const post = document.createElement('div');
          post.classList.add('channel-post');
          post.textContent = postContent;
          channel.appendChild(post);
          postInput.value = '';
        }
      });

      channelsList.appendChild(channel);
      channelNameInput.value = '';
      channelAvatarInput.value = '';
    } else {
      alert('Please enter a channel name.');
    }
  });
});
