function moveButton() {
    var x = Math.random() * (window.innerWidth - 85 - 85);
    var y = Math.random() * (window.innerHeight - 48 - 48);
    
    var noBtn = document.querySelector('.no-btn');
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

function handleYesClick() {
    // Hide the buttons and header
    document.querySelector('.buttons').style.display = 'none';
    document.querySelector('h1').style.display = 'none';
    
    // Show the success message
    var successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    
    // Optional: Add confetti or change background here
    document.body.style.backgroundColor = "#ffcccc";
}