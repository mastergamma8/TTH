// Получаем модальное окно и элементы
var modal = document.getElementById("profile-modal");
var avatar = document.getElementById("avatar"); // Ваш ID для аватара
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
  const avatarImg = document.getElementById('avatar-img'); // Ваш ID для изображения аватара
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
