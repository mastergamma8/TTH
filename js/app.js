// Main app functionality that connects all parts.
document.addEventListener('DOMContentLoaded', () => {
  const settingsIcon = document.getElementById('settings-icon');
  const settingsMenu = document.getElementById('settings-menu');

  settingsIcon.addEventListener('click', () => {
    settingsMenu.classList.toggle('active');
  });
});
