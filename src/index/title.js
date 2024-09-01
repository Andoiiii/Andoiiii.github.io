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


// Allow text shadow position to follow the mouse
function updateTitleShading(mouseEvent) {
    const titleArr = document.getElementsByClassName('title');

    const title = document.getElementById('title-container');
    const coords = title.getBoundingClientRect();
    const xCenter = (coords.left + coords.right) / 2;
    const yCenter = (coords.top + coords.bottom) / 2;
    
    const xOffset = (mouseEvent.pageX - xCenter) / 7;
    const yOffset = (mouseEvent.pageY - yCenter) / 7;
    
    Array.from(titleArr).forEach((e) => {
        e.style.textShadow = `${xOffset}px ${yOffset}px 18px var(--text-shadow-color)`;
    })
}

window.addEventListener('mousemove', updateTitleShading);

