document.addEventListener('DOMContentLoaded', () => {
  const postInput = document.getElementById('post-input');
  const publishPostButton = document.getElementById('publish-post');
  const postsContainer = document.getElementById('posts-container'); // Изменено для правильного контейнера

  publishPostButton.addEventListener('click', () => {
    const postContent = postInput.value.trim();

    if (postContent) {
      const postElement = document.createElement('div');
      postElement.classList.add('post'); // Добавляем класс для стилизации постов
      postElement.textContent = postContent;

      // Добавление поста в контейнер
      postsContainer.appendChild(postElement);

      // Очистка поля ввода
      postInput.value = '';

      // Уведомление об успешной публикации
      alert('Пост опубликован.');
    } else {
      alert('Пожалуйста, введите текст для публикации.');
    }
  });
});
