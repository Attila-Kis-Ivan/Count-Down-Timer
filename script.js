const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dataEl = document.getElementById('date-picker');

// Set date input minimum with Today's day
const today = new Date().toISOString().split('T')[0];
dataEl.setAttribute('min', today)