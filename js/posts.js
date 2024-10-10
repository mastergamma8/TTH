document.addEventListener('DOMContentLoaded', () => {
  const postInput = document.getElementById('post-input');
  const publishPostButton = document.getElementById('publish-post');

  publishPostButton.addEventListener('click', () => {
    const postContent = postInput.value.trim();

    if (postContent) {
      const postElement = document.createElement('div');
      postElement.textContent = postContent;
      document.body.appendChild(postElement);
      postInput.value = '';
      alert('Post published.');
    } else {
      alert('Please enter something to post.');
    }
  });
});
