document.addEventListener('DOMContentLoaded', () => {
  const recordButton = document.getElementById('record-button');
  const stopButton = document.getElementById('stop-button');
  const voiceMessagesList = document.getElementById('voice-messages-list');

  let mediaRecorder;
  let audioChunks = [];

  // Запись голосового сообщения
  recordButton.addEventListener('click', async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    
    mediaRecorder.start();
    
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
    };

    stopButton.onclick = () => {
      mediaRecorder.stop();
    };
  });
});
