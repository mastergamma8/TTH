// main.js

// Открытие модального окна профиля
function openProfileModal() {
  const modal = document.getElementById("profile-modal");
  modal.style.display = "block";
}

// Закрытие модального окна профиля
function closeProfileModal() {
  const modal = document.getElementById("profile-modal");
  modal.style.display = "none";
}

// Закрытие модального окна при клике вне его
window.onclick = function (event) {
  const modal = document.getElementById("profile-modal");
  if (event.target === modal) {
    closeProfileModal();
  }
};

// Функция для отправки сообщения в чате
function sendMessage() {
  const messageInput = document.getElementById("chat-input");
  const message = messageInput.value.trim();

  if (message !== "") {
    const chatBox = document.getElementById("chat-box");
    const newMessage = document.createElement("div");
    newMessage.classList.add("message");
    newMessage.textContent = message;
    chatBox.appendChild(newMessage);

    messageInput.value = ""; // Очистить поле ввода
    chatBox.scrollTop = chatBox.scrollHeight; // Прокрутка вниз
  }
}

// Обработчик клика для отправки сообщения
document.getElementById("send-message").addEventListener("click", sendMessage);

// Отправка сообщения по нажатию Enter
document.getElementById("chat-input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// Открытие меню профиля при клике на аватарку
document.getElementById("profile-pic").addEventListener("click", openProfileModal);

// Закрытие профиля
document.getElementById("back-profile").addEventListener("click", closeProfileModal);

// Открытие меню настроек
document.getElementById("settings-icon").addEventListener("click", function () {
  const settingsMenu = document.getElementById("settings-menu");
  settingsMenu.classList.toggle("active");
});

// Закрытие меню настроек
document.getElementById("back-settings").addEventListener("click", function () {
  const settingsMenu = document.getElementById("settings-menu");
  settingsMenu.classList.remove("active");
});

// Обработчик темной темы
function toggleDarkTheme() {
  document.body.classList.toggle("dark-theme");
}

// Сохранение темы при переключении
document.addEventListener('DOMContentLoaded', () => {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }

  document.getElementById("toggle-theme").addEventListener("click", () => {
    toggleDarkTheme();

    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  });
});

// Добавление поста
function publishPost() {
  const postInput = document.getElementById("post-input");
  const postText = postInput.value.trim();

  if (postText !== "") {
    const postSection = document.getElementById("posts-container");
    const newPost = document.createElement("div");
    newPost.classList.add("post");
    newPost.textContent = postText;
    postSection.appendChild(newPost);

    postInput.value = ""; // Очистить поле ввода
  } else {
    alert("Пожалуйста, введите текст поста.");
  }
}

// Обработчик публикации поста
document.getElementById("publish-post").addEventListener("click", publishPost);
