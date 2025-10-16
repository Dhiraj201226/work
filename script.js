// Birthday Website Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website
    initializeWebsite();
    
    // Add click effects to photos
    addPhotoEffects();
    
    // Add typing animation to main message
    typeWriterEffect();
    
    // Add confetti on page load
    createConfetti();
    
    // Add music (optional - user can enable)
    addMusicToggle();
});

function initializeWebsite() {
    // Add entrance animation to all elements
    const elements = document.querySelectorAll('.reason, .wish, .photo-placeholder');
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
        element.classList.add('fadeInUp');
    });
}

function showSurprise() {
    const surprise = document.getElementById('surprise');
    const button = document.querySelector('.surprise-btn');
    
    if (surprise.classList.contains('show')) {
        surprise.classList.remove('show');
        button.textContent = 'Click for a Surprise! 🎁';
    } else {
        surprise.classList.add('show');
        button.textContent = 'Hide Surprise 👻';
        
        // Add confetti when surprise is shown
        createConfetti();
        
        // Add sparkle effects
        createSparkles();
        
        // Play celebration sound (if audio is enabled)
        playCelebrationSound();
    }
}

function addPhotoEffects() {
    const photos = document.querySelectorAll('.photo-placeholder');
    
    photos.forEach(photo => {
        photo.addEventListener('click', function() {
            // Add heart animation on click
            createHeartAnimation(this);
            
            // Add photo zoom effect
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
        });
        
        // Add hover sound effect
        photo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(5deg)';
        });
        
        photo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

function typeWriterEffect() {
    const message = document.querySelector('.main-message');
    const text = message.textContent;
    message.textContent = '';
    
    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < text.length) {
            message.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
        }
    }, 100);
}

function createConfetti() {
    const colors = ['#ff6b9d', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '1000';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

function createSparkles() {
    const sparkleCount = 20;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.top = Math.random() * 100 + 'vh';
        sparkle.style.fontSize = '20px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1000';
        sparkle.style.animation = 'sparkle 2s ease-out forwards';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 2000);
    }
}

function createHeartAnimation(element) {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'absolute';
    heart.style.fontSize = '30px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.animation = 'heartFloat 2s ease-out forwards';
    
    const rect = element.getBoundingClientRect();
    heart.style.left = rect.left + rect.width / 2 + 'px';
    heart.style.top = rect.top + rect.height / 2 + 'px';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

function addMusicToggle() {
    // Create music toggle button
    const musicButton = document.createElement('button');
    musicButton.innerHTML = '🎵';
    musicButton.style.position = 'fixed';
    musicButton.style.top = '20px';
    musicButton.style.right = '20px';
    musicButton.style.background = 'rgba(255, 255, 255, 0.8)';
    musicButton.style.border = 'none';
    musicButton.style.borderRadius = '50%';
    musicButton.style.width = '50px';
    musicButton.style.height = '50px';
    musicButton.style.fontSize = '20px';
    musicButton.style.cursor = 'pointer';
    musicButton.style.zIndex = '1000';
    musicButton.style.transition = 'all 0.3s ease';
    
    musicButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.background = 'rgba(255, 107, 157, 0.8)';
    });
    
    musicButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.background = 'rgba(255, 255, 255, 0.8)';
    });
    
    musicButton.addEventListener('click', function() {
        if (this.innerHTML === '🎵') {
            this.innerHTML = '🔇';
            // Here you could add actual music functionality
            showMusicMessage();
        } else {
            this.innerHTML = '🎵';
        }
    });
    
    document.body.appendChild(musicButton);
}

function showMusicMessage() {
    const message = document.createElement('div');
    message.innerHTML = '🎶 Music would play here! Add your favorite song! 🎶';
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.background = 'rgba(255, 107, 157, 0.9)';
    message.style.color = 'white';
    message.style.padding = '20px';
    message.style.borderRadius = '15px';
    message.style.fontSize = '18px';
    message.style.zIndex = '1001';
    message.style.animation = 'slideIn 0.5s ease-out';
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}

function playCelebrationSound() {
    // This would play a celebration sound
    // For now, we'll just show a visual indicator
    const soundIndicator = document.createElement('div');
    soundIndicator.innerHTML = '🎉 *Celebration Sound* 🎉';
    soundIndicator.style.position = 'fixed';
    soundIndicator.style.bottom = '20px';
    soundIndicator.style.left = '50%';
    soundIndicator.style.transform = 'translateX(-50%)';
    soundIndicator.style.background = 'rgba(255, 107, 157, 0.9)';
    soundIndicator.style.color = 'white';
    soundIndicator.style.padding = '10px 20px';
    soundIndicator.style.borderRadius = '25px';
    soundIndicator.style.fontSize = '14px';
    soundIndicator.style.zIndex = '1000';
    soundIndicator.style.animation = 'slideIn 0.5s ease-out';
    
    document.body.appendChild(soundIndicator);
    
    setTimeout(() => {
        soundIndicator.remove();
    }, 2000);
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes sparkle {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1) rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes heartFloat {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) scale(1.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add keyboard shortcuts for fun interactions
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        // Space or Enter key triggers surprise
        showSurprise();
    } else if (e.key === 'h' || e.key === 'H') {
        // H key creates hearts
        createHeartAnimation(document.querySelector('.birthday-card'));
    } else if (e.key === 'c' || e.key === 'C') {
        // C key creates confetti
        createConfetti();
    }
});

// Add mouse trail effect
let mouseTrail = [];
document.addEventListener('mousemove', function(e) {
    if (Math.random() < 0.1) { // Only create trail occasionally
        const trail = document.createElement('div');
        trail.style.position = 'fixed';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        trail.style.width = '4px';
        trail.style.height = '4px';
        trail.style.background = '#ff6b9d';
        trail.style.borderRadius = '50%';
        trail.style.pointerEvents = 'none';
        trail.style.zIndex = '999';
        trail.style.animation = 'fadeOut 1s ease-out forwards';
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            trail.remove();
        }, 1000);
    }
});

// Add fadeOut animation
const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(fadeOutStyle);
