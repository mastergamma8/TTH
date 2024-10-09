// Общая логика для авторизации и переключения между разделами

document.getElementById('login').onclick = function() {
    document.getElementById('auth').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
    document.getElementById('chat').style.display = 'block';
    document.getElementById('posts').style.display = 'block';
    document.getElementById('channels').style.display = 'block';
    document.getElementById('settings').style.display = 'block';
};

document.getElementById('register').onclick = function() {
    // Логика регистрации
    alert('Регистрация в разработке');
};

// Обновление аватара
document.getElementById('avatar').onchange = function() {
    const file = this.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('avatarPreview').innerHTML = `<img src="${e.target.result}" alt="Avatar">`;
    }
    reader.readAsDataURL(file);
};
