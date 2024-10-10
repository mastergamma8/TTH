// Логика переключения между окнами
document.getElementById('chatTab').onclick = function() {
    showWindow('chatWindow');
};

document.getElementById('channelsTab').onclick = function() {
    showWindow('channelsWindow');
};

document.getElementById('settingsTab').onclick = function() {
    showWindow('settingsWindow');
};

function showWindow(windowId) {
    const windows = document.querySelectorAll('.content-window');
    windows.forEach(function(window) {
        window.style.display = 'none';
    });
    document.getElementById(windowId).style.display = 'block';
}
