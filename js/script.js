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
