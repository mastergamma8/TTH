document.getElementById('loginButton').onclick = function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Простая проверка на имя пользователя и пароль
    if (username === 'admin' && password === '123456') {
        // Показываем приложение и скрываем экран аутентификации
        document.getElementById('authScreen').style.display = 'none';
        document.getElementById('app').style.display = 'flex';
    } else {
        alert('Неправильное имя пользователя или пароль');
    }
};
