const dayText = document.querySelector(`.day-text`);
const monthText = document.querySelector(`.month-text`);
const yearText = document.querySelector(`.year-text`);
const dayInput = document.getElementById(`day-input`);
const monthInput = document.getElementById(`month-input`);
const yearInput = document.getElementById(`year-input`);
let currentAgeYear = document.querySelector(`.current-age-year`);
let currentAgeMonth = document.querySelector(`.current-age-month`);
let currentAgeDay = document.querySelector(`.current-age-day`);
const validValueDay = document.querySelector(`.valid-value-day`);
const validValueMonth = document.querySelector(`.valid-value-month`);
const validValueYear = document.querySelector(`.valid-value-year`);
const calculateBtn = document.querySelector(`.arrow`);

const newDate = new Date();

calculateBtn.addEventListener(`click`, function (e) {
  const lastDayOfMonth = new Date(
    newDate.getFullYear(),
    monthInput.value,
    0
  ).getDate();
  currentAgeYear.innerHTML = newDate.getFullYear() - yearInput.value;
  if (monthInput.value > newDate.getMonth() + 1) {
    currentAgeYear.innerHTML--;
    currentAgeMonth.innerHTML = 12 - monthInput.value + newDate.getMonth();
  } else {
    currentAgeMonth.innerHTML = newDate.getMonth() + 1 - monthInput.value;
  }
  if (
    (dayInput.value > newDate.getDate()) &
    (monthInput.value == newDate.getMonth() + 1)
  ) {
    currentAgeYear.innerHTML--;
    currentAgeMonth.innerHTML = 12 - monthInput.value + newDate.getMonth();
  }
  if (dayInput.value > newDate.getDate()) {
    currentAgeDay.innerHTML =
      lastDayOfMonth - dayInput.value + newDate.getDate();
  } else {
    currentAgeDay.innerHTML = newDate.getDate() - dayInput.value;
  }
  if (
    (dayInput.value > newDate.getDate()) &
    (monthInput.value < newDate.getMonth() + 1)
  ) {
    currentAgeMonth.innerHTML--;
  }
  if (
    (dayInput.value < newDate.getDate()) &
    (monthInput.value > newDate.getMonth() + 1)
  ) {
    currentAgeMonth.innerHTML++;
  }
  if (yearInput.value > newDate.getFullYear() || yearInput.value <= 0) {
    validValueYear.classList.remove(`none`);
    currentAgeYear.innerHTML = `--`;
    currentAgeMonth.innerHTML = `--`;
    currentAgeDay.innerHTML = `--`;
    yearText.style.color = `hsl(0, 100%, 67%)`;
    yearInput.style.border = `1px solid hsl(0, 100%, 67%)`;
  } else {
    validValueYear.classList.add(`none`);
    yearText.style.color = `hsl(0, 1%, 44%)`;
    yearInput.style.border = `1px solid hsl(0, 0%, 86%)`;
  }
  if (monthInput.value > 12 || monthInput.value <= 0) {
    validValueMonth.classList.remove(`none`);
    currentAgeYear.innerHTML = `--`;
    currentAgeMonth.innerHTML = `--`;
    currentAgeDay.innerHTML = `--`;
    monthText.style.color = `hsl(0, 100%, 67%)`;
    monthInput.style.border = `1px solid hsl(0, 100%, 67%)`;
  } else {
    validValueMonth.classList.add(`none`);
    monthText.style.color = `hsl(0, 1%, 44%)`;
    monthInput.style.border = `1px solid hsl(0, 0%, 86%)`;
  }
  if (dayInput.value > 31 || dayInput.value <= 0) {
    validValueDay.classList.remove(`none`);
    currentAgeYear.innerHTML = `--`;
    currentAgeMonth.innerHTML = `--`;
    currentAgeDay.innerHTML = `--`;
    dayText.style.color = `hsl(0, 100%, 67%)`;
    dayInput.style.border = `1px solid hsl(0, 100%, 67%)`;
  } else {
    validValueDay.classList.add(`none`);
    dayText.style.color = `hsl(0, 1%, 44%)`;
    dayInput.style.border = `1px solid hsl(0, 0%, 86%)`;
  }
});
