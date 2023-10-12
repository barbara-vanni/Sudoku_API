let timerInterval;
let seconds = 0;
let minutes = 0;

// function to start the timer when the game begin
function startTimer() {
    timerInterval = setInterval(function () {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        updateTimerDisplay();
    }, 1000);
}

// function when we stop the game
function stopTimer() {
    clearInterval(timerInterval);
}

// function when the game is finish
function resetTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    updateTimerDisplay();
}

// j'avoue je sais pas trop pour celle là 
function updateTimerDisplay() {
    const timerElement = document.getElementById("timer");
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timerElement.textContent = formattedTime;
}