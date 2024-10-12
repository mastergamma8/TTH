document.addEventListener('DOMContentLoaded', () => {
  // Обработчик клика для открытия меню профиля
  document.getElementById('profile-pic').addEventListener('click', function () {
    const profileMenu = document.getElementById('profile-menu');
    profileMenu.classList.toggle('active');
  });

  // Обработчик клика для открытия меню настроек
  document.getElementById('settings-icon').addEventListener('click', function () {
    const settingsMenu = document.getElementById('settings-menu');
    settingsMenu.classList.toggle('active');
  });

  // Закрытие меню профиля при нажатии кнопки "Назад"
  document.getElementById('back-profile').addEventListener('click', function () {
    const profileMenu = document.getElementById('profile-menu');
    profileMenu.classList.remove('active');
  });

  // Закрытие меню настроек при нажатии кнопки "Назад"
  document.getElementById('back-settings').addEventListener('click', function () {
    const settingsMenu = document.getElementById('settings-menu');
    settingsMenu.classList.remove('active');
  });

  // Сохранение изменений профиля
  document.getElementById('save-profile').addEventListener('click', () => {
    const newName = document.getElementById('edit-name').value;
    const newNickname = document.getElementById('edit-nickname').value;

    if (newName) {
      document.getElementById('username').textContent = newName;
      alert(`Профиль сохранен. Имя: ${newName}, Никнейм: ${newNickname}`);
    } else {
      alert('Пожалуйста, введите имя.');
    }

    const profileMenu = document.getElementById('profile-menu');
    profileMenu.classList.remove('active');
  });
});
