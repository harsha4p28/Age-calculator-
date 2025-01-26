const out = document.getElementById('output');
const dateInput = document.getElementById('date');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
function calculateDifference() {
  let d = date.value;
let m = month.value;
let y = year.value;
const inputDate = new Date(`${m}/${d}/${y}`);
  const today = new Date();
  let milliseconds = today - inputDate;
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(milliseconds / (1000 * 60));
  let hours = Math.floor(milliseconds / (1000 * 60 * 60));
  let days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
  let weeks = Math.floor(days / 7);
  let months = Math.floor(days / 30.44);
  let years = Math.floor(days / 365.25);

  return { years, months, weeks, days, hours, minutes, seconds };
}

function generate() {
  const { years, months, weeks, days, hours, minutes, seconds } = calculateDifference();
  out.innerHTML = '';
  const input = document.createElement('input');
    input.type = 'text';
    input.className='outputBox';
    input.placeholder = `Age: ${years} Years ${months-(years*12)} months ${Math.floor(days-(months*30.44))} days`;
    input.readOnly = true;
    out.appendChild(input);
    out.appendChild(document.createElement('br'));
  
  const data = { Years: years, Months: months, Weeks: weeks, Days: days, Hours: hours, Minutes: minutes, Seconds: seconds };

  for (const [key, value] of Object.entries(data)) {
    const input = document.createElement('input');
    input.type = 'text';
    input.className='outputBox';
    input.placeholder = `${key} passed: ${value}`;
    input.readOnly = true;
    out.appendChild(input);
    out.appendChild(document.createElement('br'));
  }
}