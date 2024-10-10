document.addEventListener('DOMContentLoaded', () => {
  const recordButton = document.getElementById('record-voice');
  const voiceMessagesList = document.getElementById('voice-messages-list');
  let mediaRecorder;
  let audioChunks = [];

  // Запуск записи
  recordButton.addEventListener('click', async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();

    audioChunks = [];

    mediaRecorder.ondataavailable = event => {
      audioChunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
      const audioUrl = URL.createObjectURL(audioBlob);

      const audioElement = document.createElement('audio');
      audioElement.src = audioUrl;
      audioElement.controls = true;
      const messageElement = document.createElement('div');
      messageElement.classList.add('voice-message');
      messageElement.appendChild(audioElement);
      voiceMessagesList.appendChild(messageElement);
    };

    recordButton.textContent = '🔴 Recording... Click to Stop';
    recordButton.onclick = () => {
      mediaRecorder.stop();
      recordButton.textContent = '🎤 Record Voice Message';
      recordButton.onclick = () => recordButton.click();
    };
  });
});
