document.getElementById('avatar').onchange = function() {
    const file = this.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('avatarPreview').innerHTML = `<img src="${e.target.result}" alt="Avatar">`;
    };
    reader.readAsDataURL(file);
};

document.getElementById('updateProfile').onclick = function() {
    const nickname = document.getElementById('nickname').value;
    alert('Профиль обновлён: ' + nickname);
};
