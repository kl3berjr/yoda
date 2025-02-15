function showSpeechBubble() {
    const bubble = document.querySelector('.speech-bubble');
    bubble.style.display = 'block';
    setTimeout(() => {
        bubble.style.display = 'none';
    }, 5000);
}
setInterval(showSpeechBubble, 300000); // A cada 5 minutos