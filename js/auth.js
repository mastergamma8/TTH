document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.getElementById('logout');

  logoutButton.addEventListener('click', () => {
    // Simple logout functionality
    alert('You have been logged out.');
    window.location.reload();
  });
});
