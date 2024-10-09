document.getElementById('darkModeToggle').onchange = function() {
    const app = document.getElementById('app');
    if (this.checked) {
        app.classList.add('dark-mode');
    } else {
        app.classList.remove('dark-mode');
    }
};
