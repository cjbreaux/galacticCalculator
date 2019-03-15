
import { test } from './../src/backEnd.js';
import { birthday } from './../src/backEnd.js';
import { getBirthYear } from './../src/backEnd.js';
import { checkMonth } from './../src/backEnd.js';
import { checkDate } from './../src/backEnd.js';





describe('test', function() {

  it('return a string of "working!"', function() {

    expect(test()).toEqual("working!");
  });

});


describe('birthday', function() {

  it('return an age using birth year as input', function() {
    const birthYear = 1983;
    const output = birthday(birthYear);
    expect(output).toEqual(36);
  });

});


describe('getBirthYear', function() {

  it('should return the birth year given an age', function() {
    const age = 35;
    const output = getBirthYear(age);
    expect(output).toEqual(1984);
  });
});

describe('checkMonth', function() {

  it('should check if current month is past the input month', function() {
    const output = checkMonth('January', 1990);
    expect(output).toEqual(true);
  });
});


describe('checkDate', function() {

  it('should check if current day of the month is past the current day of the month', function() {
    const output = checkDate('January 16, 1990');
    expect(output).toEqual(false);
  });
});
