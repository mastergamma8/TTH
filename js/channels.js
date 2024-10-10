document.getElementById('newChannel').onclick = function() {
    const channelName = prompt("Введите название канала:");
    if (channelName) {
        const channelList = document.getElementById('channelList');
        const newChannel = document.createElement('div');
        newChannel.textContent = channelName;
        newChannel.className = 'channel';
        channelList.appendChild(newChannel);
    }
};
