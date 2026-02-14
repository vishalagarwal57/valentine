function checkPulse() {
    const msg = document.getElementById('pulse-msg');
    msg.innerText = "Current BPM: 140 (Checking your photo...)";
    msg.style.color = "#ff4d6d";
    msg.style.fontWeight = "bold";
}

function revealSurprise() {
    document.getElementById('surprise-area').classList.remove('hidden');
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

// Background Heart Generator
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.opacity = Math.random();
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    
    document.getElementById('heart-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Add CSS for particles dynamically
const style = document.createElement('style');
style.innerHTML = `
    .heart-particle {
        top: 100vh;
        animation: moveUp linear infinite;
    }
    @keyframes moveUp {
        to { transform: translateY(-110vh); }
    }
`;
document.head.appendChild(style);

setInterval(createHeart, 300);