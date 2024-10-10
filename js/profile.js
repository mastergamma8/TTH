document.addEventListener('DOMContentLoaded', () => {
  const profilePic = document.getElementById('profile-pic');
  const profileMenu = document.getElementById('profile-menu');
  const saveProfileButton = document.getElementById('save-profile');
  const avatarUpload = document.getElementById('avatar-upload');

  profilePic.addEventListener('click', () => {
    profileMenu.classList.toggle('active');
  });

  saveProfileButton.addEventListener('click', () => {
    const newName = document.getElementById('edit-name').value;
    const newNickname = document.getElementById('edit-nickname').value;

    if (newName) {
      profilePic.src = avatarUpload.files.length > 0 ? URL.createObjectURL(avatarUpload.files[0]) : 'images/default-avatar.png';
      alert(`Profile saved. Name: ${newName}, Nickname: ${newNickname}`);
    } else {
      alert('Please enter a name.');
    }

    profileMenu.classList.remove('active');
  });
});
