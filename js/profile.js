document.addEventListener('DOMContentLoaded', () => {
  const profilePic = document.getElementById('profile-pic');
  const profileMenu = document.getElementById('profile-menu');
  const saveProfileButton = document.getElementById('save-profile');
  const avatarUpload = document.getElementById('avatar-upload');
  const editName = document.getElementById('edit-name');
  const editNickname = document.getElementById('edit-nickname');

  // Открытие меню профиля при нажатии на аватар
  profilePic.addEventListener('click', () => {
    profileMenu.classList.toggle('active');
  });

  // Сохранение профиля
  saveProfileButton.addEventListener('click', () => {
    const newName = editName.value.trim();
    const newNickname = editNickname.value.trim();
    
    if (newName || newNickname) {
      // Изменяем аватар
      if (avatarUpload.files.length > 0) {
        profilePic.src = URL.createObjectURL(avatarUpload.files[0]);
      } else {
        profilePic.src = 'images/default-avatar.png'; // Если аватар не выбран, используем стандартный
      }
      
      // Обновляем имя и никнейм
      if (newName) {
        document.getElementById('username').textContent = newName;
      }
      if (newNickname) {
        document.getElementById('nickname-display').textContent = newNickname; // Обновляем никнейм на странице
      }

      alert(`Профиль сохранён. Имя: ${newName}, Никнейм: ${newNickname}`);
    } else {
      alert('Пожалуйста, введите имя или никнейм.');
    }

    profileMenu.classList.remove('active'); // Закрываем меню профиля
  });
});
