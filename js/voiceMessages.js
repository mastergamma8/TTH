// voiceMessages.js
import { startRecording, stopRecording } from './voice.js';

const recordButton = document.getElementById('record-button');
const stopButton = document.getElementById('stop-button');

recordButton.addEventListener('click', () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            startRecording(stream);
        });
});

stopButton.addEventListener('click', () => {
    stopRecording();
});
