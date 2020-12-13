const el = (a) => document.querySelector(a);
const SecondItem = el("#js-seconds-item");
const MinutesItem = el("#js-minutes-item");
const HoursItem = el("#js-hours-item");
const DaysItem = el("#js-days-item");
const time = new Date(2020, 12, 5);

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

SecondItem.textContent = dateFormat(getDate().getSeconds());
MinutesItem.textContent = dateFormat(getDate().getMinutes());
HoursItem.textContent = dateFormat(getDate().getHours());
DaysItem.textContent = dayFormat(getDate().getDay());

setInterval(() => {
  SecondItem.textContent = dateFormat(getDate().getSeconds());
  MinutesItem.textContent = dateFormat(getDate().getMinutes());
  HoursItem.textContent = dateFormat(getDate().getHours());
  DaysItem.textContent = dayFormat(getDate().getDay());
}, 1000);
