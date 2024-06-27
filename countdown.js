function startCountdown() {
    var seconds = 10; // Countdown time in seconds
    var countdownTimer = document.getElementById('timer');

    // Update the countdown every second
    var countdownInterval = setInterval(function() {
        seconds--;
        countdownTimer.textContent = seconds;

    
        if (seconds <= 0) {
            clearInterval(countdownInterval); // 
            displayMessage(); // 
        }
    }, 1000); // بتعمل ابديت كل ثانيه 
}

function displayMessage() {
    var messageDiv = document.getElementById('message');
    var saleLink = document.getElementById('saleLink');

    messageDiv.style.display = 'block'; 

    setTimeout(function() {
        window.location.href = 'https://www.amazon.com'; 
    }, 5000); // 5000 milliseconds = 5 seconds
}

// S
window.onload = function() {
    startCountdown();
};