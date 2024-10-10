import { startRecording, stopRecording } from './voice.js';

const toggleRecordVoiceButton = document.getElementById('toggle-record-voice');
let recording = false;

toggleRecordVoiceButton.addEventListener('click', async () => {
    if (!recording) {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        await startRecording(stream);
        recording = true;
        toggleRecordVoiceButton.innerText = '⏹ Stop Recording';
    } else {
        stopRecording();
        recording = false;
        toggleRecordVoiceButton.innerText = '🎤 Start Recording';
    }
});
