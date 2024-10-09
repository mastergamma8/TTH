document.getElementById('newChannel').onclick = function() {
    const channelName = prompt("Введите название канала:");
    if (channelName) {
        const channelList = document.getElementById('channelList');
        const channel = document.createElement('div');
        channel.className = 'channel';
        channel.textContent = channelName;
        channelList.appendChild(channel);
    }
};
