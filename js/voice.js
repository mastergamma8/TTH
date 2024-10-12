document.addEventListener('DOMContentLoaded', () => {
  const recordButton = document.getElementById('record-button');
  const stopButton = document.getElementById('stop-button');
  const voiceMessagesList = document.getElementById('voice-messages-list');

  let mediaRecorder;
  let audioChunks = [];

  // Запись голосового сообщения
  recordButton.addEventListener('click', async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      
      mediaRecorder.start();
      console.log('Recording started.');

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' });
        const audioURL = URL.createObjectURL(audioBlob);
        const audioElement = document.createElement('audio');
        audioElement.src = audioURL;
        audioElement.controls = true;
        voiceMessagesList.appendChild(audioElement);
        audioChunks = [];
        console.log('Recording stopped and audio added to list.');
      };

      stopButton.onclick = () => {
        mediaRecorder.stop();
        console.log('Recording stopped by user.');
      };
    } catch (error) {
      console.error('Error accessing the microphone:', error);
      alert('Не удалось получить доступ к микрофону. Пожалуйста, проверьте разрешения.');
    }
  });
});
