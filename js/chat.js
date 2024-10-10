document.addEventListener('DOMContentLoaded', () => {
  const chatBox = document.getElementById('chat-box');
  const chatInput = document.getElementById('chat-input');
  const sendMessageButton = document.getElementById('send-message');
  const clearChatButton = document.getElementById('clear-chat');

  sendMessageButton.addEventListener('click', () => {
    const message = chatInput.value.trim();

    if (message) {
      const newMessage = document.createElement('div');
      newMessage.textContent = message;
      chatBox.appendChild(newMessage);

      chatInput.value = '';
      chatBox.scrollTop = chatBox.scrollHeight;
    } else {
      alert('Please enter a message.');
    }
  });

  clearChatButton.addEventListener('click', () => {
    chatBox.innerHTML = '';
    alert('Chat cleared.');
  });
});
