let scaleFactor = 1;

function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');

    // Get the exact width/height of the button to ensure it stays on screen
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Calculate random position
    // We subtract the button size so it doesn't clip off the right/bottom edge
    const maxX = window.innerWidth - btnWidth;
    const maxY = window.innerHeight - btnHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    // Apply the new position
    noBtn.style.position = 'fixed'; // Switch to fixed positioning
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;

    // Make Yes button grow
    scaleFactor += 0.2;
    yesBtn.style.transform = `scale(${scaleFactor})`;
}

function handleYesClick() {
    document.querySelector('.container').innerHTML = `
        <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Happy Bear" style="width: 300px;">
        <h1 style="font-size: 3rem; color: #4CAF50;">Yay! See you on the 14th! ❤️</h1>
    `;
    
    document.body.style.backgroundColor = "#ffcccc";
}
