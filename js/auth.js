document.getElementById('register').onclick = function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Handle registration logic (e.g., store user info in local storage)
    localStorage.setItem(username, password);
    alert('Вы зарегистрировались успешно!');
};

document.getElementById('login').onclick = function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Handle login logic (e.g., check local storage)
    if (localStorage.getItem(username) === password) {
        alert('Добро пожаловать, ' + username + '!');
        document.getElementById('auth').style.display = 'none';
        document.getElementById('profile').style.display = 'block';
        document.getElementById('chat').style.display = 'block';
        document.getElementById('posts').style.display = 'block';
    } else {
        alert('Неверные имя пользователя или пароль.');
    }
};
