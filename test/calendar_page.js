const assert = require('assert');
const CalendarPage = require('../index.js');

describe('CalendarPage', function() {
  describe('with date 2018-02-01', function() {
    const date = new Date(2018, 1, 1);
    const page = new CalendarPage(date);

    it('#year', function() {
      assert.equal(page.year, 2018);
    });

    it('#month', function() {
      assert.equal(page.month, 1);
    });

    describe('#previousDates', function() {
      const dates = page.previousDates;

      it('is Array', function() {
        assert.equal(Array.isArray(dates), true);
      });

      it('with length 3', function() {
        assert.equal(dates.length, 3);
      });

      it('with first element date is 2018-01-29', function() {
        const firstDateFormated = dates[0].toISOString().slice(0, 10);
        assert.equal(firstDateFormated, '2018-01-29');
      });

      it('with last element date is 2018-01-31', function() {
        const lastDateFormated = dates[dates.length - 1].toISOString().slice(0, 10);
        assert.equal(lastDateFormated, '2018-01-31');
      });
    });

    describe('#currentDates', function() {
      const dates = page.currentDates;

      it('is Array', function() {
        assert.equal(Array.isArray(dates), true);
      });

      it('with length 28', function() {
        assert.equal(dates.length, 28);
      });

      it('with first element date is 2018-02-01', function() {
        const firstDateFormated = dates[0].toISOString().slice(0, 10);
        assert.equal(firstDateFormated, '2018-02-01');
      });

      it('with last element date is 2018-02-28', function() {
        const lastDateFormated = dates[dates.length - 1].toISOString().slice(0, 10);
        assert.equal(lastDateFormated, '2018-02-28');
      });
    });

    describe('#nextDates', function() {
      const dates = page.nextDates;

      it('is Array', function() {
        assert.equal(Array.isArray(dates), true);
      });

      it('with length 4', function() {
        assert.equal(dates.length, 4);
      });

      it('with first element date is 2018-03-01', function() {
        const firstDateFormated = dates[0].toISOString().slice(0, 10);
        assert.equal(firstDateFormated, '2018-03-01');
      });

      it('with last element date is 2018-03-04', function() {
        const lastDateFormated = dates[dates.length - 1].toISOString().slice(0, 10);
        assert.equal(lastDateFormated, '2018-03-04');
      });
    });

    describe('#allDates', function() {
      const dates = page.allDates;

      it('is Array', function() {
        assert.equal(Array.isArray(dates), true);
      });

      it('with length 35', function() {
        assert.equal(dates.length, 35);
      });

      it('with first element date is 2018-01-29', function() {
        const firstDateFormated = dates[0].toISOString().slice(0, 10);
        assert.equal(firstDateFormated, '2018-01-29');
      });

      it('with last element date is 2018-03-04', function() {
        const lastDateFormated = dates[dates.length - 1].toISOString().slice(0, 10);
        assert.equal(lastDateFormated, '2018-03-04');
      });
    });

    describe('#previousPage', function() {
      const previousPage = page.previousPage();

      it('is CalendarPage', function() {
        assert.equal(previousPage instanceof CalendarPage, true);
      });

      it('memoized for page', function() {
        assert.equal(page.previousPage() === previousPage, true);
      });

      describe('#allDates', function() {
        const dates = previousPage.allDates;

        it('is Array', function() {
          assert.equal(Array.isArray(dates), true);
        });

        it('with length 35', function() {
          assert.equal(dates.length, 35);
        });

        it('with first element date is 2018-01-01', function() {
          const firstDateFormated = dates[0].toISOString().slice(0, 10);
          assert.equal(firstDateFormated, '2018-01-01');
        });

        it('with last element date is 2018-02-04', function() {
          const lastDateFormated = dates[dates.length - 1].toISOString().slice(0, 10);
          assert.equal(lastDateFormated, '2018-02-04');
        });
      });
    });

    describe('#nextPage', function() {
      const nextPage = page.nextPage();

      it('is CalendarPage', function() {
        assert.equal(nextPage instanceof CalendarPage, true);
      });

      it('memoized for page', function() {
        assert.equal(page.nextPage() === nextPage, true);
      });

      describe('#allDates', function() {
        const dates = nextPage.allDates;

        it('is Array', function() {
          assert.equal(Array.isArray(dates), true);
        });

        it('with length 35', function() {
          assert.equal(dates.length, 35);
        });

        it('with first element date is 2018-02-26', function() {
          const firstDateFormated = dates[0].toISOString().slice(0, 10);
          assert.equal(firstDateFormated, '2018-02-26');
        });

        it('with last element date is 2018-04-01', function() {
          const lastDateFormated = dates[dates.length - 1].toISOString().slice(0, 10);
          assert.equal(lastDateFormated, '2018-04-01');
        });
      });
    });
  });
});
