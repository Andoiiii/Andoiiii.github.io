import './home.css'

let titleName = 'Andy Chang';
let textSizeInEm = 2;
let shadowDownscale = 5;
let extraTextSpace = 3;


// Create space for the title, as well as margin to play with
function renderTitleName(title = titleName, textSize = textSizeInEm) {
    const titleContainer = document.getElementById('title-container');
    titleContainer.style.width = `${title.length * textSize}em`;

    // Attach Text Nodes
    title.split('').forEach(c => {
        const titleNode = document.createElement('span');
        titleNode.className = 'title';
        titleNode.innerHTML = c;
        titleNode.style.width = `${textSize}em`;
        titleNode.style.fontSize = `${textSize}em`;
        titleContainer.appendChild(titleNode);
    });
}

// Allow text shadow position to follow the mouse
function updateTitleShading(mouseEvent, downscale = shadowDownscale) {
    const titleElems = document.getElementsByClassName('title');

    // Prevent Overlap with other visual elements - lock X axis
    const xOffset = Math.max(-5,-(window.innerWidth / 2- mouseEvent.pageX)) / downscale;
    const yOffset = -(window.innerHeight / 2 - mouseEvent.pageY) / downscale;
    
    Array.from(titleElems).forEach((e) => {
        e.style.textShadow = `${xOffset}px ${yOffset}px 15px #72b8d2ff`;
    })
}

// Add Jiggle
function wobbleLetters(title = titleName, space = extraTextSpace) {
    const titles = document.getElementsByClassName('title');
    Array.from(titles).reduce(([currTranslateAmt, MaxTranslateAmt], e) => {
        const rotateDeg = (Math.random() - 0.5) * 20;
        const translateX = Math.min(MaxTranslateAmt, Math.random() / titles.length * MaxTranslateAmt);
        e.style.transform = `translateX(${translateX}em) rotate(${rotateDeg}deg)`;
        return [translateX, MaxTranslateAmt - translateX];
    }, [0, space])
}

renderTitleName();
window.addEventListener('mousemove', updateTitleShading);

window.setTimeout(wobbleLetters, 1000);
window.setInterval(wobbleLetters, 3000);