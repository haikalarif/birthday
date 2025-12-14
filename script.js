// DOM Elements
const initialScreen = document.getElementById('initialScreen');
const teaserScreen = document.getElementById('teaserScreen');
const mainScreen = document.getElementById('mainScreen');
const startButton = document.getElementById('startButton');
const revealButton = document.getElementById('revealButton');
const backgroundMusic = document.getElementById('backgroundMusic');
const confettiContainer = document.querySelector('.confetti-container');
const floatingHeartsContainer = document.querySelector('.floating-hearts');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    console.log('Start button:', startButton);
    console.log('Reveal button:', revealButton);
    
    createFloatingHearts();
    
    // Start button click event
    if (startButton) {
        startButton.addEventListener('click', function(e) {
            console.log('Start button clicked!');
            e.preventDefault();
            
            // Play background music
            playBackgroundMusic();
            
            // Transition to teaser screen
            setTimeout(() => {
                initialScreen.classList.remove('active');
                teaserScreen.classList.add('active');
                
                // Start mystery particles
                setTimeout(() => {
                    createMysteryParticles();
                }, 500);
            }, 300);
        });
    } else {
        console.error('Start button not found!');
    }
    
    // Alternative event listener for debugging
    document.addEventListener('click', function(e) {
        console.log('Clicked element:', e.target);
        if (e.target.classList.contains('gift-btn') || e.target.id === 'startButton') {
            console.log('Gift button clicked via document listener!');
            // Play background music
            playBackgroundMusic();
            
            // Transition to teaser screen
            setTimeout(() => {
                initialScreen.classList.remove('active');
                teaserScreen.classList.add('active');
                
                // Start mystery particles
                setTimeout(() => {
                    createMysteryParticles();
                }, 500);
            }, 300);
        }
    });
    
    // Reveal button click event
    if (revealButton) {
        revealButton.addEventListener('click', function(e) {
            console.log('Reveal button clicked!');
            e.preventDefault();
            
            // Transition to main screen
            setTimeout(() => {
                teaserScreen.classList.remove('active');
                mainScreen.classList.add('active');
                
                // Start confetti
                setTimeout(() => {
                    startConfetti();
                }, 500);
            }, 300);
        });
    } else {
        console.error('Reveal button not found!');
    }
});

// Background Music Function
function playBackgroundMusic() {
    // Try to play music (note: modern browsers require user interaction)
    backgroundMusic.play().catch(function(error) {
        console.log('Audio autoplay prevented:', error);
        // Create a play button if autoplay fails
        createMusicButton();
    });
}

function createMusicButton() {
    const musicBtn = document.createElement('button');
    musicBtn.innerHTML = '🎵 Putar Musik';
    musicBtn.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(255,107,157,0.9);
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 25px;
        cursor: pointer;
        z-index: 1000;
        font-size: 14px;
        backdrop-filter: blur(10px);
    `;
    
    musicBtn.addEventListener('click', function() {
        backgroundMusic.play();
        musicBtn.remove();
    });
    
    document.body.appendChild(musicBtn);
}

// Create Floating Hearts
function createFloatingHearts() {
    const hearts = ['💖', '💕', '💗', '💝', '💘'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
        
        floatingHeartsContainer.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 5000);
    }, 800);
}

// Create Confetti Effect
function startConfetti() {
    const colors = ['pink', 'gold', 'rose', 'purple', 'white'];
    const shapes = ['square', 'circle', 'triangle', 'rectangle'];
    
    function createConfetti() {
        const confetti = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        
        confetti.className = `confetti ${shape} ${color}`;
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        
        // Add some randomness to the fall
        confetti.style.transform = `translateX(${(Math.random() - 0.5) * 100}px)`;
        
        confettiContainer.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 8000);
    }
    
    // Create confetti burst initially
    for (let i = 0; i < 50; i++) {
        setTimeout(createConfetti, i * 100);
    }
    
    // Continue creating confetti periodically
    setInterval(() => {
        for (let i = 0; i < 10; i++) {
            setTimeout(createConfetti, i * 50);
        }
    }, 3000);
}

// Create Mystery Particles for teaser screen
function createMysteryParticles() {
    const mysteryContainer = document.querySelector('.mystery-particles');
    const particles = ['🥳', '🎉', '🎊', '💖', '❄️'];
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.innerHTML = particles[Math.floor(Math.random() * particles.length)];
        particle.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            font-size: 1.5rem;
            opacity: 0.7;
            pointer-events: none;
            animation: mysteryFloat 4s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        
        mysteryContainer.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 6000);
    }
    
    // Create initial particles
    for (let i = 0; i < 15; i++) {
        setTimeout(createParticle, i * 200);
    }
    
    // Continue creating particles
    setInterval(createParticle, 1000);
}

// Add sparkle effect and confetti burst on click
document.addEventListener('click', function(e) {
    if (mainScreen.classList.contains('active')) {
        createSparkle(e.clientX, e.clientY);
        createConfettiBurst(e.clientX, e.clientY);
    }
});

function createConfettiBurst(x, y) {
    const colors = ['pink', 'gold', 'rose', 'purple', 'white'];
    const shapes = ['square', 'circle', 'triangle'];
    
    for (let i = 0; i < 15; i++) {
        const confetti = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        
        confetti.className = `confetti ${shape} ${color}`;
        confetti.style.position = 'fixed';
        confetti.style.left = x + 'px';
        confetti.style.top = y + 'px';
        confetti.style.zIndex = '1000';
        
        // Random direction for burst effect
        const angle = (Math.PI * 2 * i) / 15;
        const velocity = Math.random() * 100 + 50;
        const endX = x + Math.cos(angle) * velocity;
        const endY = y + Math.sin(angle) * velocity + Math.random() * 200;
        
        confetti.style.animation = `confettiBurst 2s ease-out forwards`;
        confetti.style.setProperty('--end-x', endX + 'px');
        confetti.style.setProperty('--end-y', endY + 'px');
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 2000);
    }
}

function createSparkle(x, y) {
    const sparkles = ['✨', '⭐', '💫', '🌟'];
    
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            font-size: 1.5rem;
            pointer-events: none;
            z-index: 1000;
            animation: sparkleAnimation 1s ease-out forwards;
        `;
        
        // Random direction for each sparkle
        const angle = (Math.PI * 2 * i) / 5;
        const distance = 50;
        const endX = x + Math.cos(angle) * distance;
        const endY = y + Math.sin(angle) * distance;
        
        sparkle.style.setProperty('--end-x', endX + 'px');
        sparkle.style.setProperty('--end-y', endY + 'px');
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 1000);
    }
}

// Add sparkle and confetti burst animation CSS
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    @keyframes sparkleAnimation {
        0% {
            opacity: 1;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0.5) rotate(360deg) translate(var(--end-x, 0), var(--end-y, 0));
        }
    }
    
    @keyframes confettiBurst {
        0% {
            opacity: 1;
            transform: translate(0, 0) rotate(0deg) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(var(--end-x, 0), var(--end-y, 0)) rotate(720deg) scale(0.5);
        }
    }
`;
document.head.appendChild(animationStyle);

// Add Islamic greeting animation
// function showIslamicGreeting() {
//     const greetings = [
//         'بارك الله لك وبارك عليك',
//         'أسعد الله أيامك',
//         'كل عام وأنت بخير'
//     ];
    
//     const greeting = document.createElement('div');
//     greeting.innerHTML = greetings[Math.floor(Math.random() * greetings.length)];
//     greeting.style.cssText = `
//         position: fixed;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//         font-size: 2rem;
//         color: #ffd700;
//         text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
//         z-index: 1000;
//         pointer-events: none;
//         animation: islamicGreetingAnimation 3s ease-in-out forwards;
//     `;
    
//     document.body.appendChild(greeting);
    
//     setTimeout(() => {
//         if (greeting.parentNode) {
//             greeting.parentNode.removeChild(greeting);
//         }
//     }, 3000);
// }

// Add Islamic greeting animation CSS
// const islamicStyle = document.createElement('style');
// islamicStyle.textContent = `
//     @keyframes islamicGreetingAnimation {
//         0% {
//             opacity: 0;
//             transform: translate(-50%, -50%) scale(0.5);
//         }
//         20% {
//             opacity: 1;
//             transform: translate(-50%, -50%) scale(1.1);
//         }
//         80% {
//             opacity: 1;
//             transform: translate(-50%, -50%) scale(1);
//         }
//         100% {
//             opacity: 0;
//             transform: translate(-50%, -50%) scale(0.8);
//         }
//     }
// `;
// document.head.appendChild(islamicStyle);

// Add mystery particle animation CSS
const mysteryStyle = document.createElement('style');
mysteryStyle.textContent = `
    @keyframes mysteryFloat {
        0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
        }
        25% {
            transform: translateY(-15px) rotate(90deg);
            opacity: 1;
        }
        50% {
            transform: translateY(-30px) rotate(180deg);
            opacity: 0.5;
        }
        75% {
            transform: translateY(-15px) rotate(270deg);
            opacity: 1;
        }
    }
`;
document.head.appendChild(mysteryStyle);

// Show Islamic greeting periodically
// setInterval(() => {
//     if (mainScreen.classList.contains('active')) {
//         showIslamicGreeting();
//     }
// }, 15000);