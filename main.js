// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const timerCountTextField = document.querySelector("#timerCount")


let timerCount = 0
let displayTimerCount = 1
// This function is called every 600ms
function update() {
    timerCount = timerCount + 1
    if (timerCount % 4 === 0) {
        tock.play();
    }
    else {
        tick.play();
    }
    timerCountTextField.innerText = displayTimerCount
    displayTimerCount = displayTimerCount + 1
    if (displayTimerCount === 5) {
        displayTimerCount = 1
    }

}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
