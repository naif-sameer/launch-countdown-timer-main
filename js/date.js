/** Timer.js
 * version: 1.0.2
 * Author: Naif Sameer
*/
const el = (a) => document.querySelector(a);
// select the els
const SecondItem = el("#js-seconds-item");
const MinutesItem = el("#js-minutes-item");
const HoursItem = el("#js-hours-item");
const DaysItem = el("#js-days-item");

// get the time for timer function
const today = new Date().getDate();
const time = new Date(2020, 12, (today + 5));

// the date used to countdown for the timer
const getDate = () => new Date(time - new Date(Date.now()));

const dateFormat = (date) => {
  if (date === 0) {
    return "60";
  }
  if (date < 10) {
    return `0${date}`;
  }
  return date;
};

const dayFormat = (date) => {
  if (date < 10) {
    return `0${date}`;
  }
  return date;
};

const runTimer = () => {
  SecondItem.textContent = dateFormat(getDate().getSeconds());
  MinutesItem.textContent = dateFormat(getDate().getMinutes());
  HoursItem.textContent = dateFormat(getDate().getHours());
  DaysItem.textContent = dayFormat(getDate().getDate());
};

runTimer();

setInterval(() => {
  runTimer();
}, 1000);
