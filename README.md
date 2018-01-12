# calendar-page-generator

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

Where every cell is a date.

## Development

1) Install dependencies:

```
$ npm install
```

2) Make your changes.

3) Test it:

```
$ npm test
```

4) Run ESLint:

```
$ ./node_modules/.bin/eslint index.js
```
