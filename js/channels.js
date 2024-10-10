document.addEventListener('DOMContentLoaded', () => {
  const channelsList = document.getElementById('channels-list');
  const newChannelInput = document.getElementById('new-channel');
  const addChannelButton = document.getElementById('add-channel');

  addChannelButton.addEventListener('click', () => {
    const channelName = newChannelInput.value.trim();

    if (channelName) {
      const newChannel = document.createElement('li');
      newChannel.textContent = channelName;
      channelsList.appendChild(newChannel);

      newChannelInput.value = '';
    } else {
      alert('Please enter a channel name.');
    }
  });
});
