// voice.js

let mediaRecorder;
let audioChunks = [];

// Начало записи
function startRecording(stream) {
    audioChunks = [];
    mediaRecorder = new MediaRecorder(stream);
    
    mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks);
        const audioUrl = URL.createObjectURL(audioBlob);
        playAudio(audioUrl);
        // Здесь можно добавить функционал для отправки аудио
    };

    mediaRecorder.start();
}

// Остановка записи
function stopRecording() {
    mediaRecorder.stop();
}

// Воспроизведение аудио
function playAudio(url) {
    const audio = new Audio(url);
    audio.play();
}

// Экспорт функций
export { startRecording, stopRecording };
