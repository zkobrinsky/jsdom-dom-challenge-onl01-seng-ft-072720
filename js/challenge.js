let counter = 0;
let timerSwitch = true;

window.addEventListener('DOMContentLoaded', (event) => {
    let counterDisplay = document.querySelector("#counter");
    const pauseButton = document.querySelector("#pause");
    const minusButton = document.querySelector("#minus");
    const plusButton = document.querySelector("#plus");
    let timerID = setInterval(myTimer, 1000);


 function myTimer() {
    counterDisplay.innerText = counter++;
}

pauseButton.addEventListener("click", pauseTimer);
minusButton.addEventListener("click", minusTimer);
plusButton.addEventListener("click", plusTimer);


function pauseTimer() {
    if (timerSwitch === true) {
    disableButtons();
    clearInterval(timerID);
    pauseButton.innerText = "resume";
    } else {
        timerID = setInterval(myTimer, 1000);
        enableButtons();
        pauseButton.innerText = "pause"
    }
    timerSwitch = !timerSwitch;
}

function minusTimer() {
    console.log("minus");
    counterDisplay.innerText = counter--;
}

function plusTimer() {
    console.log("plus");
    counterDisplay.innerText = counter++;
}

function disableButtons() {
    minusButton.removeEventListener("click", minusTimer);
    plusButton.removeEventListener("click", plusTimer);
}

function enableButtons() {
    minusButton.addEventListener("click", minusTimer);
    plusButton.addEventListener("click", plusTimer);
}





});



 