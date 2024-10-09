document.getElementById('avatar').onchange = function() {
    const avatarImage = document.getElementById('avatarImage');
    const file = this.files[0];
    if (file) {
        avatarImage.src = URL.createObjectURL(file);
    }
};

document.getElementById('updateProfile').onclick = function() {
    const nickname = document.getElementById('nickname').value;
    alert('Профиль обновлён: ' + nickname);
};
