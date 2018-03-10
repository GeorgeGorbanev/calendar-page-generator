# calendar-page-js

![BuildStatus](https://travis-ci.org/GeorgeGorbanev/calendar-page-js.png)

Generate arrays of dates for calendar pages.
Calendar page is a table (7x5), includes all month dates and closest months dates.

Looks like:

```
Jan 2018

Mon Tue Wed Thu Fri Sut Sun
01  02  03  04  05  06  07
08  09  10  11  12  13  14
15  16  17  18  19  20  21
22  23  24  25  26  27  28
29  30  31  01  02  03  04
```

Where every cell is a Date instance.


## Usage

Install package:

```
npm install calendar-page
```

Require class:

``` Javascript
const CalendarPage = require('../index.js');
```

Create date instance and pass it to `CalendarPage` constructor:

``` Javascript
let date = new Date(2018, 1, 1);        // Feb 2018
let page = new CalendarPage(date);
```
Keys `allDates`, `previousDates`, `currentDates` and `nextDates` will contain arrays of dates:

``` Javascript
console.log(page.previousDates.length); // January dates on page
// 3
console.log(page.currentDates.length);  // February dates on page
// 28
console.log(page.nextDates.length);     // March dates on page
// 4
console.log(page.allDates.length);      // All dates on page
// 35
```

Methods `#previousPage()` and `#nextPage()` will return `CalendarPage` objects for previous and next months. Also it will memoize calls:

``` Javascript
(page.previousPage() === page.previousPage()); // true
(page.previousPage() instanceof CalendarPage); // true
```
