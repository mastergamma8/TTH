// Логика навигации и интерфейса
document.getElementById('login').onclick = function() {
    document.getElementById('auth').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
    document.getElementById('posts').style.display = 'block';
    document.getElementById('channels').style.display = 'block';
    document.getElementById('settings').style.display = 'block';
};

document.getElementById('register').onclick = function() {
    alert('Регистрация в разработке');
};

// Темная тема
document.getElementById('darkModeToggle').onclick = function() {
    document.body.classList.toggle('dark-mode');
};
