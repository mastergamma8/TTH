document.addEventListener('DOMContentLoaded', () => {
  const toggleThemeButton = document.getElementById('toggle-theme');

  toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
});
