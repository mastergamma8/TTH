document.addEventListener('DOMContentLoaded', () => {
  const voiceMessageContainer = document.getElementById('voice-message-container');
  const voiceMessagesList = document.getElementById('voice-messages-list');
  
  // Добавить голосовое сообщение в список
  function addVoiceMessage(audioURL) {
    const audioElement = document.createElement('audio');
    audioElement.src = audioURL;
    audioElement.controls = true; // Показывает элементы управления
    voiceMessagesList.appendChild(audioElement);
  }

  // Добавляем обработчик для кнопки записи
  document.getElementById('record-voice').addEventListener('click', () => {
    // Запуск процесса записи
    recordVoice();
  });

  // Функция для записи голосового сообщения
  async function recordVoice() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    const audioChunks = [];

    mediaRecorder.start();

    mediaRecorder.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' });
      const audioURL = URL.createObjectURL(audioBlob);
      addVoiceMessage(audioURL);
    };

    document.getElementById('stop-button').onclick = () => {
      mediaRecorder.stop();
    };
  }
});
