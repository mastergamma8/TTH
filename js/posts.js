document.getElementById('publishPost').onclick = function() {
    const postText = document.getElementById('postText').value;
    const postImageInput = document.getElementById('postImageInput');
    const postList = document.getElementById('postList');

    const postContainer = document.createElement('div');

    if (postText) {
        const post = document.createElement('div');
        post.textContent = postText;
        postContainer.appendChild(post);
    }

    if (postImageInput.files.length > 0) {
        const postImage = document.createElement('img');
        postImage.src = URL.createObjectURL(postImageInput.files[0]);
        postImage.style.maxWidth = '100%';
        postImage.style.borderRadius = '5px';
        postContainer.appendChild(postImage);
    }

    postList.appendChild(postContainer);
    document.getElementById('postText').value = ''; // Очистить поле ввода
    postImageInput.value = ''; // Очистить файл
};
