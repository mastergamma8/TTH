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
    alert('Регистрация в разработке');
};
