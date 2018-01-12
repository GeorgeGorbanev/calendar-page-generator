const assert = require('assert');
const CalendarPage = require('../index.js');

describe('CalendarPage', function() {
  describe('#forSingleDate', function() {
    it('should be a function', function() {
      assert.equal(typeof CalendarPage.forSingleDate, 'function');
    });

    describe('for given date', function() {
      const date = new Date(Date.parse('2018-01-01'));
      const result = CalendarPage.forSingleDate(date);

      describe('should return array', function() {
        it('', function() {
          assert.equal(typeof result, 'Array');
        });

        it('with length 35', function() {
          assert.equal(result.length, 35);
        });

        it('with first element date is 2018-01-01', function() {
          const firstDateFormated = result[0].toISOString().slice(0, 10);
          assert.equal(firstDateFormated, '2018-01-01');
        });

        it('with last element date is 2018-02-04', function() {
          const firstDateFormated = result[34].toISOString().slice(0, 10);
          assert.equal(firstDateFormated, '2018-02-04');
        });
      });
    });
  });
});
