document.addEventListener('DOMContentLoaded', () => {
  const voiceMessageContainer = document.getElementById('voice-message-container');
  const voiceMessagesList = document.getElementById('voice-messages-list');

  // Функция для добавления голосового сообщения в список
  function addVoiceMessage(audioURL) {
    const audioElement = document.createElement('audio');
    audioElement.src = audioURL;
    audioElement.controls = true; // Показывает элементы управления
    audioElement.classList.add('voice-message'); // Добавим класс для стилей
    voiceMessagesList.appendChild(audioElement);
  }

  // Обработчик для кнопки записи
  document.getElementById('record-voice').addEventListener('click', () => {
    // Запуск процесса записи
    recordVoice();
  });

  // Функция для записи голосового сообщения
  async function recordVoice() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks = [];

      mediaRecorder.start();
      console.log('Recording started.');

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' });
        const audioURL = URL.createObjectURL(audioBlob);
        addVoiceMessage(audioURL);
        console.log('Recording stopped and audio added to list.');
      };

      document.getElementById('stop-button').onclick = () => {
        mediaRecorder.stop();
        console.log('Recording stopped by user.');
      };
    } catch (error) {
      console.error('Error accessing the microphone:', error);
      alert('Не удалось получить доступ к микрофону. Пожалуйста, проверьте разрешения.');
    }
  }
});
