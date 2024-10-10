document.getElementById('register').onclick = function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!username || !password) {
        alert('Заполните все поля.');
        return;
    }
    localStorage.setItem(username, password);
    alert('Вы успешно зарегистрировались!');
};

document.getElementById('login').onclick = function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!username || !password) {
        alert('Введите имя пользователя и пароль.');
        return;
    }
    if (localStorage.getItem(username) === password) {
        alert('Добро пожаловать, ' + username + '!');
        document.getElementById('auth').style.display = 'none';
        document.getElementById('profile').style.display = 'block';
        document.getElementById('chat').style.display = 'block';
        document.getElementById('posts').style.display = 'block';
        document.getElementById('channels').style.display = 'block';
        document.getElementById('settings').style.display = 'block';
    } else {
        alert('Неверные имя пользователя или пароль.');
    }
};
