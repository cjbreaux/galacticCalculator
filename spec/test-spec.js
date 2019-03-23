
import { test } from './../src/backEnd.js';
import { birthday } from './../src/backEnd.js';
import { checkMonth } from './../src/backEnd.js';
import { checkDate } from './../src/backEnd.js';
import { findAge } from './../src/backEnd.js';
import { GalacticAge } from './../src/backEnd.js';




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


describe('checkMonth', function() {

  it('should check if current month is past the input month', function() {
    const output = checkMonth('January', 1990);
    expect(output).toEqual(true);
  });
});


describe('checkDate', function() {

  it('should check if current day of the week is past the input day of the week', function() {
    const output = checkDate('January 1, 1990');
    expect(output).toEqual(true);
  });
});

describe('findAge', function() {
  it('should correctly return an age give month, date, year', function() {
    const output = findAge('September', 9, 1993);
    expect(output).toEqual(25);
  });
});

describe('GalacticAge', function() {
  it('should return an object containing the galactic ages given an age on earth', function() {
    let myAge = new GalacticAge(35);
    expect(myAge.age).toEqual(35.00);
    expect(myAge.ageMercury).toEqual(145.83);
    expect(myAge.ageVenus).toEqual(56.45);
    expect(myAge.ageMars).toEqual(18.62);
    expect(myAge.ageJupiter).toEqual(2.95);
  });

  it('should return years exceeding life expectancy on any planet', function() {
    let myAge = new GalacticAge(25);
    let output = myAge.yearsLeft(10, myAge.age)
    expect(output).toEqual(`You have exceeded the life expectancy on this planet by 15 years.`);
  });

  it('should return years left to live on any planet', function() {
    let myAge = new GalacticAge(35);
    let output = myAge.yearsLeft(79, myAge.age)
    expect(output).toEqual(`You have 44 years left to live on this planet`);
  });
});
