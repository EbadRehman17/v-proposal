let scaleFactor = 1;

function moveButton() {
    const noBtn = document.getElementById('noBtn');
    
    // 1. Calculate random position within the window
    // Subtracting button dimensions to keep it on screen
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);
    
    // 2. Change position to 'fixed' so it breaks out of the container layout
    // This allows it to jump anywhere on the screen
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    
    // 3. Make Yes button grow (optional, keeps the fun effect)
    scaleFactor += 0.2;
    const yesBtn = document.getElementById('yesBtn');
    yesBtn.style.transform = `scale(${scaleFactor})`;
}

function handleYesClick() {
    // Replace the entire container content with the success message
    document.querySelector('.container').innerHTML = `
        <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Happy Bear" style="width: 300px;">
        <h1 style="font-size: 3rem; color: #4CAF50;">Yay! See you on the 14th! ❤️</h1>
    `;
    
    document.body.style.backgroundColor = "#ffcccc";
}
