document.addEventListener('DOMContentLoaded', () => {
  const profilePic = document.getElementById('profile-pic');
  const profileMenu = document.getElementById('profile-menu');
  const saveProfileButton = document.getElementById('save-profile');
  const avatarUpload = document.getElementById('avatar-upload');

  // Открытие меню профиля при клике на аватар
  profilePic.addEventListener('click', () => {
    profileMenu.classList.toggle('active');
  });

  // Сохранение изменений профиля
  saveProfileButton.addEventListener('click', () => {
    const newName = document.getElementById('edit-name').value;
    const newNickname = document.getElementById('edit-nickname').value;

    if (newName) {
      // Замена аватара при загрузке нового
      if (avatarUpload.files.length > 0) {
        profilePic.src = URL.createObjectURL(avatarUpload.files[0]);
      }

      // Отображение новых данных
      document.getElementById('username').textContent = newName;

      alert(`Профиль обновлен: Имя - ${newName}, Никнейм - ${newNickname}`);
    } else {
      alert('Пожалуйста, введите имя.');
    }

    profileMenu.classList.remove('active');
  });
});
