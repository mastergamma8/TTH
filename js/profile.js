document.addEventListener('DOMContentLoaded', () => {
  const profilePic = document.getElementById('profile-pic');
  const profileMenu = document.getElementById('profile-menu');
  const saveProfileButton = document.getElementById('save-profile');
  const avatarUpload = document.getElementById('avatar-upload');

  // Открытие/закрытие меню профиля по клику на аватар
  profilePic.addEventListener('click', () => {
    profileMenu.classList.toggle('active');
  });

  // Сохранение изменений профиля
  saveProfileButton.addEventListener('click', () => {
    const newName = document.getElementById('edit-name').value;
    const newNickname = document.getElementById('edit-nickname').value;

    if (newName) {
      // Если загружен новый аватар, то устанавливаем его
      if (avatarUpload.files.length > 0) {
        profilePic.src = URL.createObjectURL(avatarUpload.files[0]);
      } else {
        profilePic.src = 'images/default-avatar.png'; // Если нет, устанавливаем аватар по умолчанию
      }

      alert(`Profile saved. Name: ${newName}, Nickname: ${newNickname}`);
    } else {
      alert('Please enter a name.');
    }

    // Закрытие меню профиля
    profileMenu.classList.remove('active');
  });
});
