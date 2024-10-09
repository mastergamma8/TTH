document.getElementById('publishPost').onclick = function() {
    const postText = document.getElementById('postText').value.trim();
    const postImageInput = document.getElementById('postImageInput');
    const postList = document.getElementById('postList');

    // Проверяем, есть ли текст или изображение
    if (!postText && postImageInput.files.length === 0) {
        alert("Введите текст или загрузите изображение.");
        return;
    }

    const postContainer = document.createElement('div');
    postContainer.className = 'post';

    // Создаем элемент для текста поста
    if (postText) {
        const post = document.createElement('div');
        post.textContent = postText;
        post.className = 'post-text';
        postContainer.appendChild(post);
    }

    // Создаем элемент для изображения поста
    if (postImageInput.files.length > 0) {
        const postImage = document.createElement('img');
        postImage.src = URL.createObjectURL(postImageInput.files[0]);
        postImage.style.maxWidth = '100%';
        postImage.style.borderRadius = '5px';
        postImage.className = 'post-image';
        postContainer.appendChild(postImage);
    }

    postList.appendChild(postContainer);
    document.getElementById('postText').value = ''; // Очистить поле ввода
    postImageInput.value = ''; // Очистить файл
};
