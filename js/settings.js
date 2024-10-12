document.addEventListener('DOMContentLoaded', () => {
  const toggleThemeButton = document.getElementById('toggle-theme');

  // Переключение темной темы
  toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    alert('Тема изменена!');
  });

  const clearChatButton = document.getElementById('clear-chat');

  // Очистка чата
  clearChatButton.addEventListener('click', () => {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = '';
    alert('Чат очищен.');
  });

  const logoutButton = document.getElementById('logout');

  // Логаут пользователя
  logoutButton.addEventListener('click', () => {
    alert('Вы вышли из аккаунта.');
    window.location.href = 'login.html'; // Здесь можно указать ссылку на страницу входа
  });
});
