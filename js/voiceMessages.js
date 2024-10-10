import { startRecording, stopRecording } from './voice.js';

const toggleRecordVoiceButton = document.getElementById('toggle-record-voice');
let recording = false;

toggleRecordVoiceButton.addEventListener('click', async () => {
    try {
        if (!recording) {
            console.log('Requesting audio stream...');
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            console.log('Audio stream obtained.');
            await startRecording(stream);
            recording = true;
            toggleRecordVoiceButton.innerText = '⏹ Stop Recording';
        } else {
            stopRecording();
            recording = false;
            toggleRecordVoiceButton.innerText = '🎤 Start Recording';
        }
    } catch (error) {
        console.error('Error accessing audio stream:', error);
        alert('Could not access microphone. Please check permissions.');
    }
});
