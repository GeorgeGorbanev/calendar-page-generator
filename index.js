const ONE_DAY = 1000 * 60 * 60 * 24;

const previousMonthDates = function (year, month) {
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

const currentMonthDates = function (year, month) {
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

const nextMonthDates = function (year, month) {
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
    this.initDate = date;
    this.year = date.getFullYear();
    this.month = date.getMonth();

    this.previousDates = previousMonthDates(this.year, this.month);
    this.currentDates = currentMonthDates(this.year, this.month);
    this.nextDates = nextMonthDates(this.year, this.month);

    this.allDates = [];
    this.allDates = this.allDates.concat(this.previousDates);
    this.allDates = this.allDates.concat(this.currentDates);
    this.allDates = this.allDates.concat(this.nextDates);

    this.memo = {};
  }

  previousPage() {
    const memoized = this.memo['previousPage'];

    if (typeof memoized !== 'undefined') {
      return memoized;
    }

    let initDate = new Date(this.initDate);
    let currentMonth = initDate.getMonth();
    initDate.setMonth(currentMonth - 1);

    this.memo['previousPage'] = new CalendarPage(initDate);
    return this.memo['previousPage'];
  }
}

module.exports = CalendarPage;
