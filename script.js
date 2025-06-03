const calendarDates = document.querySelector('.calendar-dates');
const monthYear = document.getElementById('month-year');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
]

function renderCalendar(month, year) {
    calendarDates.innerHTML  = ''; // Clear previous dates
    monthYear.textContent = `${months[month]} ${year}`; // Update month and year display

    const firstDay = new Date(year, month, 1).getDay(); // get the first day of the month
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // get the number of days in the month

    // create blanks for days of the week before the first day
    for (let i = 0; i < firstDay; i++) {
        const blank = document.createElement('div');
        calendarDates.appendChild(blank);
    }
    //populate the days
    for (let i = 1; i <= daysInMonth; i++) {
        const days = document.createElement('div');
        days.textContent = i;
    
        calendarDates.appendChild(days);

        // Highlight today's date
        if (i === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
            days.classList.add('current-date');
        }
    } 

    const today = new Date();
}

renderCalendar(currentMonth, currentYear);

prevMonthBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
});

nextMonthBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
});

calendarDates.addEventListener('click', (e) => {
  if (e.target.textContent !== '') {
    alert(`You clicked on ${e.target.textContent} ${months[currentMonth]} ${currentYear}`);
  }
});