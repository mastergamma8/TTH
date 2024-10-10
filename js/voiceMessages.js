import { startRecording, stopRecording } from './voice.js';

const recordVoiceButton = document.getElementById('record-voice');
let recording = false;

recordVoiceButton.addEventListener('click', async () => {
    if (!recording) {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        startRecording(stream);
        recording = true;
        recordVoiceButton.innerText = 'Stop Recording';
    } else {
        stopRecording();
        recording = false;
        recordVoiceButton.innerText = '🎤 Record Voice Message';
    }
});
