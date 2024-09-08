import './subtitle.css'

function randomSubtitle() {
    const rng = Math.random();
    if (rng <= 0.01) { return 'OMG! Mythical Pull Subtitle! 🎉' }
    if (rng <= 0.02) { return 'This site hides some secrets... 🔎' }
    if (rng <= 0.05) { return 'A Funny and Quirky Subtitle! ~' }
    if (rng <= 0.10) { return 'Suffering from Coding Block' }
    if (rng <= 0.20) { return 'Recursion, Recursion, Recursion...' }
    if (rng <= 0.35) { return 'Suprisingly likes pen and paper 📜' }
    if (rng <= 0.50) { return 'I hope you like these subtitles :)' }
    if (rng <= 0.65) { return 'I dont actually use emoji irl that much'}
    else { return 'Your local Math, CS, and Business(?) dude 🧮' }
}

function randomDedupe(current) {
    let final = randomSubtitle();
    while (final === current) { final = randomSubtitle() };
    return final;
}

const subtitleText = document.querySelector('#subtitle-container h3');
subtitleText.innerHTML = randomSubtitle();

setInterval(() => {
    const fade = subtitleText.animate([
        { opacity: "1" }, { opacity: "0" }], 
        { duration: 1000 });
    fade.onfinish = () => { 
        const text = subtitleText.innerHTML;
        subtitleText.innerHTML = randomDedupe(text);
        subtitleText.animate([
        { opacity: "0" }, { opacity: "1" }], 
        { duration: 1000 });
    }
}, 5000)