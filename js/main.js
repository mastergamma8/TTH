// main.js

// Открытие модального окна
function openModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// Закрытие модального окна
function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Закрытие модального окна при клике вне его
window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Функция для отправки сообщения
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

// Открытие профиля
document.getElementById("profile-pic").addEventListener("click", function () {
  const profileContainer = document.getElementById("profile-container");
  profileContainer.style.display = "block";
});

// Закрытие профиля
document.getElementById("back-profile").addEventListener("click", function () {
  const profileContainer = document.getElementById("profile-container");
  profileContainer.style.display = "none";
});

// Открытие меню настроек
document.getElementById("settings-icon").addEventListener("click", function () {
  const settingsMenu = document.querySelector("aside");
  settingsMenu.classList.toggle("active");
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
    const postSection = document.getElementById("posts-section");
    const newPost = document.createElement("div");
    newPost.classList.add("post");
    newPost.textContent = postText;
    postSection.appendChild(newPost);

    postInput.value = ""; // Очистить поле ввода
  }
}

// Обработчик публикации поста
document.getElementById("publish-post").addEventListener("click", publishPost);
