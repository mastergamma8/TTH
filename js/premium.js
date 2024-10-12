document.addEventListener('DOMContentLoaded', () => {
  const subscribeButton = document.getElementById('subscribe-button');

  // Функция подписки на TTH Premium
  subscribeButton.addEventListener('click', () => {
    alert('Вы подписались на TTH Premium!');

    // Сохранить состояние подписки в localStorage
    localStorage.setItem('premium', 'true');

    // Отобразить функции TTH Premium
    showPremiumFeatures();
  });

  // Проверка состояния подписки при загрузке страницы
  const isPremium = localStorage.getItem('premium');
  if (isPremium === 'true') {
    showPremiumFeatures();
  }

  function showPremiumFeatures() {
    const premiumContainer = document.getElementById('premium-container');
    premiumContainer.style.display = 'block';
  }
});
