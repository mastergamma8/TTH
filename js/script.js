// Получаем модальное окно и элементы
var modal = document.getElementById("profile-modal");
var avatar = document.getElementById("profile-pic"); // Ваш ID для аватара
var span = document.getElementsByClassName("close")[0];

// Открытие модального окна при клике на аватарку
avatar.onclick = function() {
  modal.style.display = "block";
}

// Закрытие окна при клике на "x"
span.onclick = function() {
  modal.style.display = "none";
}

// Закрытие окна при клике вне его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Функция для смены шапки профиля
function changeProfileBanner(event) {
  const bannerImg = document.getElementById('profile-banner-img');
  const file = event.target.files[0];
  
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      bannerImg.src = e.target.result;
    }
    reader.readAsDataURL(file);
  }
}

// Добавим обработчик для загрузки изображения шапки
document.getElementById('banner-upload').addEventListener('change', changeProfileBanner);

// Функция для смены аватара профиля
function changeProfileAvatar(event) {
  const avatarImg = document.getElementById('profile-pic'); // Ваш ID для изображения аватара
  const file = event.target.files[0];
  
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      avatarImg.src = e.target.result;
    }
    reader.readAsDataURL(file);
  }
}

// Добавим обработчик для загрузки аватара
document.getElementById('avatar-upload').addEventListener('change', changeProfileAvatar);

// Функция для отправки сообщений в чате
function sendMessage() {
  const messageInput = document.getElementById("chat-input");
  const message = messageInput.value;

  if (message.trim() !== "") {
    const chatBox = document.getElementById("chat-box");
    const newMessage = document.createElement("div");
    newMessage.classList.add("message");
    newMessage.textContent = message;
    chatBox.appendChild(newMessage);

    messageInput.value = ""; // Очистить поле ввода
    chatBox.scrollTop = chatBox.scrollHeight; // Прокрутка вниз
  }
}

// Обработчик для кнопки отправки сообщения
document.getElementById("send-message").addEventListener("click", sendMessage);

// Отправка сообщения по нажатию Enter
document.getElementById("chat-input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// Функция для добавления поста
function publishPost() {
  const postInput = document.getElementById("post-input");
  const postText = postInput.value;

  if (postText.trim() !== "") {
    const postSection = document.getElementById("posts-container");
    const newPost = document.createElement("div");
    newPost.classList.add("post");
    newPost.textContent = postText;
    postSection.appendChild(newPost);

    postInput.value = ""; // Очистить поле ввода
  }
}

// Обработчик для публикации поста
document.getElementById("publish-post").addEventListener("click", publishPost);

// Открытие меню настроек
document.getElementById("settings-icon").addEventListener("click", function () {
  const settingsMenu = document.querySelector("aside#settings-menu");
  settingsMenu.classList.toggle("active");
});

// Переключение темной темы
document.getElementById("toggle-theme").addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});
