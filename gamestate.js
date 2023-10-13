
// paused timer
function toggleTimer() {
    gamePaused = true;
    stopTimer();
    const boutonPause = document.getElementById("stop_pause");
    boutonPause.textContent = "Reprendre";
}
    
function toggleTimer2(){
    gameRun = true; 
    gamePaused = false;
    continueTimer();
    const boutonPause = document.getElementById("stop_pause");
    boutonPause.textContent = "Stop";
}



