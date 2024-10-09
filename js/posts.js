document.getElementById('publishPost').onclick = function() {
    const postText = document.getElementById('postText').value;
    const postList = document.getElementById('postList');
    const post = document.createElement('div');
    post.textContent = postText;
    postList.appendChild(post);
    document.getElementById('postText').value = ''; // Clear input
};
