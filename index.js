const ONE_DAY = 1000 * 60 * 60 * 24;

const generatePreviousMonthDates = function (year, month) {
  const firstMonthDay = new Date(year, month, 1, 12);
  let dates = [];
  if (firstMonthDay.getDay() !== 1) {
    let currentDay = firstMonthDay;
    while (currentDay.getDay() !== 1) {
      let previousDay = Number(currentDay) - ONE_DAY;
      previousDay = new Date(previousDay);
      dates.unshift(previousDay);
      currentDay = previousDay;
    }
  }
  return dates;
};

const generateCurrentMonthDates = function (year, month) {
  const firstMonthDay = new Date(year, month, 1, 12);
  let dates = [firstMonthDay];
  let nextDay = firstMonthDay;
  for (;;) {
    nextDay = Number(nextDay) + ONE_DAY;
    nextDay = new Date(nextDay);
    if (nextDay.getMonth() === month) {
      dates.push(nextDay);
    } else {
      break;
    }
  }
  return dates;
};

const generateNextMonthDates = function (year, month) {
  let dates = [];
  let nextDay = new Date(year, month + 1, 1, 12);
  if (nextDay.getDay() !== 1) {
    dates.push(nextDay);
    for (;;) {
      nextDay = Number(nextDay) + ONE_DAY;
      nextDay = new Date(nextDay);
      if (nextDay.getDay() === 1) {
        break;
      } else {
        dates.push(nextDay);
      }
    }
  }
  return dates;
};

class CalendarPage {
  constructor(date) {
    this.year = date.getFullYear();
    this.month = date.getMonth();
    this.previousDates = generatePreviousMonthDates(this.year, this.month);
    this.currentDates = generateCurrentMonthDates(this.year, this.month);
    this.nextDates = generateNextMonthDates(this.year, this.month);
    this.allDates = [].concat(this.previousDates).concat(this.currentDates).concat(this.nextDates);
  }
}

module.exports = CalendarPage;
