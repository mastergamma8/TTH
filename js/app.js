// Получите кнопки "Назад"
const backProfileButton = document.getElementById('back-profile');
const backSettingsButton = document.getElementById('back-settings');

// Получите элементы, которые нужно скрыть
const profileMenu = document.getElementById('profile-menu');
const settingsMenu = document.getElementById('settings-menu');
const mainSection = document.querySelector('main'); // или ваш главный контейнер

// Функция для показа главного экрана
function showMainScreen() {
    profileMenu.style.display = 'none';
    settingsMenu.style.display = 'none';
    mainSection.style.display = 'block'; // Покажите главный экран
}

// Обработчики событий для кнопок "Назад"
backProfileButton.addEventListener('click', showMainScreen);
backSettingsButton.addEventListener('click', showMainScreen);

// Функция для открытия профиля
function openProfile() {
    mainSection.style.display = 'none'; // Скрыть главный экран
    profileMenu.style.display = 'block'; // Показать меню профиля
}

// Функция для открытия настроек
function openSettings() {
    mainSection.style.display = 'none'; // Скрыть главный экран
    settingsMenu.style.display = 'block'; // Показать меню настроек
}

// Пример, как можно добавить обработку кнопок
document.getElementById('settings-icon').addEventListener('click', openSettings);
document.getElementById('profile-pic').addEventListener('click', openProfile);

// Добавьте дополнительные функции для работы с чатами, постами и каналами здесь
