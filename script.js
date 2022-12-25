const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dataEl = document.getElementById('date-picker');

const countdownEl= document.getElementById('countdown');
const countdownELTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countdownTitle="";
let countdownDate="";
let countdownValue= Date;
let countdownActive;


const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;


// Set date input minimum with Today's day
const today = new Date().toISOString().split('T')[0];
dataEl.setAttribute('min', today);

// Populate Countdown / Complete UI
function updateDOM() {
    countdownActive = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownValue - now;
    console.log('distace', distance)

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);
    console.log(days, hours, minutes, seconds);

    // Populate countdown
    countdownELTitle.textContent = `${countdownTitle}`;
    timeElements[0].textContent = `${days}`;
    timeElements[1].textContent = `${hours}`;
    timeElements[2].textContent = `${minutes}`;
    timeElements[3].textContent = `${seconds}`;

    // Hide imput
    inputContainer.hidden=true;
    // Show contdown
    countdownEl.hidden=false;
    }, second);
}


// Take valuse from form
function updateCountdown(e) {
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
console.log(countdownDate, countdownTitle)
//  cjheck for valid date
if (countdownDate=== '') {
    alert('Please select a valid date')
} else {
    // Get number version of current date, update dom
countdownValue = new Date(countdownDate).getTime();
console.log('contdown value', countdownValue);
updateDOM();
}
}

// Reset all values
function reset () {
    //Hide cuntdowns and show inout
    countdownEl.hidden=true,
    inputContainer.hidden=false;
    //stop countdown
    clearInterval(countdownActive);
    //Reset valuse 
    countdownTitle = '';
    countdownDate = '';
};

// Event listener
countdownForm.addEventListener('submit', updateCountdown);
countdownBtn.addEventListener('click', reset)