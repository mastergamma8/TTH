document.addEventListener('DOMContentLoaded', () => {
  const toggleThemeButton = document.getElementById('toggle-theme');

  // Сохранение выбранной темы в локальное хранилище
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }

  toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    // Обновление темы в локальном хранилище
    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
});
