import './title.css'

// Randomize Parameters to the Wiggling Title Animation each cycle
function randomizeTitleAnimation() {
    function generateAnimationWiggleLength() {
        return `calc(${0.25 * (Math.random() - 0.5)} * var(--text-size))`;
    }
    
    function generateAnimationWiggleRotation() {
        return `${(Math.random() - 0.5) * 40}deg`;
    }
    
    function setupAnimation(elem) {
        elem.style.setProperty('--animation-distance', generateAnimationWiggleLength());
        elem.style.setProperty('--animation-rotation', generateAnimationWiggleRotation());
    }

    const titleArr = document.getElementsByClassName('title');
    Array.from(titleArr).forEach(setupAnimation);
}
window.setInterval(randomizeTitleAnimation, 20000);
randomizeTitleAnimation();
