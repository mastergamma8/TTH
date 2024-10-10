let mediaRecorder;
let audioChunks = [];

export async function startRecording(stream) {
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();
    console.log('Recording started.');

    mediaRecorder.addEventListener("dataavailable", event => {
        audioChunks.push(event.data);
        console.log('Audio chunk available.');
    });

    mediaRecorder.addEventListener("stop", () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' });
        const audioUrl = URL.createObjectURL(audioBlob);
        audioChunks = []; // очистка массива для следующей записи
        console.log('Recording stopped.');

        // Здесь можно вызвать функцию для отображения или сохранения аудио
        displayVoiceMessage(audioUrl);
    });
}

export function stopRecording() {
    if (mediaRecorder) {
        mediaRecorder.stop();
        console.log('Stopping recording...');
    }
}

function displayVoiceMessage(audioUrl) {
    const voiceMessagesList = document.getElementById('voice-messages-list');
    const audioElement = document.createElement('audio');
    audioElement.controls = true;
    audioElement.src = audioUrl;
    voiceMessagesList.appendChild(audioElement);
    console.log('Voice message displayed.');
}
