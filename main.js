// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const kick = new Audio('sounds/kick-drum.mp3');
const snare = new Audio('sounds/snare-drum.mp3');
const hihat = new Audio('sounds/hi-hat.mp3');

let timerCount = 0
let displayTimerCount = 1

const timerCountTextField = document.querySelector("#timerCount")

const metronome = document.querySelector("#metronome")
const kickSound = document.querySelector("#kick-drum")
const snareSound = document.querySelector("#snare-drum")
const hitSound = document.querySelector("#hi-hat")

const input_kick = document.querySelectorAll(".form-check-input.Kick")
const input_Snare = document.querySelectorAll(".form-check-input.Snare")
const input_Hat = document.querySelectorAll(".form-check-input.Hat")

// This function is called every 600ms
function update() {

    if (metronome.checked === true) {
        timerCount = timerCount + 1
        if (timerCount % 4 === 0) {
            tock.play();
        }
        else {
            tick.play();
        }
    }

    if (kickSound.checked === true) {
        for (const each of input_kick) {
            each.disabled = false
            if (each.checked) {
                if (displayTimerCount === Number(each.value)) { kick.play() }
            }
        }
    }
    else {
        for (const each of input_kick) {
            each.disabled = true
        }
    }


    if (snareSound.checked === true) {
        for (const each of input_Snare) {
            each.disabled = false
            if (each.checked) {
                if (displayTimerCount === Number(each.value)) { snare.play() }
            }
        }
    }
    else {
        for (const each of input_Snare) {
            each.disabled = true
        }
    }


    if (hitSound.checked === true) {
        for (const each of input_Hat) {
            each.disabled = false
            if (each.checked) {
                if (displayTimerCount === Number(each.value)) { hihat.play() }
            }
        }
    }
    else {
        for (const each of input_Hat) {
            each.disabled = true
        }
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
