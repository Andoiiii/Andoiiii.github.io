import './decor.css'

const decorContainer = document.getElementById('decor-container');

// Creates a Orbiting Sphere for the Decoration
// - animOffset: integer percent value from 0 to 100. Represents animation stagger
// - orbit: selects between 1 of 2 orbit paths. 'top' or 'bottom'
function makeOrbitingSphere(animOffset, orbit) {
    const sphere = document.createElement('div');
    sphere.classList.add('sphere');
    sphere.classList.add(`${orbit}Orbit`);

    // Caveat - Bottom Orbit Inversions
    if (orbit === 'bottom') { sphere.style.setProperty('animation-direction', 'reverse'); }
    const degrees = animOffset/100 * 360;
    sphere.style.setProperty('--offset-percent', `${animOffset}%`);
    sphere.style.setProperty('--offset-deg', `${degrees}deg`);

    return sphere;
}

// Creates a Rotating Line for the Decoration
// - animOffset: integer percent value from 0 to 100. Represents animation stagger
function makeLine(animOffset) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M 0, 0L 300,500');
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', 'url(#grad)');
    path.setAttribute('stroke-width', '1%');
    
    line.classList.add('line');
    line.setAttribute('viewBox', '0 0 300 500');
    line.setAttribute(`preserveAspectRatio`, 'none');
    
    line.style.setProperty('--offset-deg', `${animOffset/100 * 360}deg`);
    line.appendChild(path);

    return line;
}

decorContainer.appendChild(makeOrbitingSphere(0, 'top'));
decorContainer.appendChild(makeOrbitingSphere(50, 'top'));
decorContainer.appendChild(makeLine(0));

decorContainer.appendChild(makeOrbitingSphere(0, 'bottom'));
decorContainer.appendChild(makeOrbitingSphere(50, 'bottom'));
decorContainer.appendChild(makeLine(50));
