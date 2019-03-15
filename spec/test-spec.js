
import { test } from './../src/backEnd.js';
import { birthday } from './../src/backEnd.js';




describe('test', function() {

  it('return a string of "working!"', function() {

    expect(test()).toEqual("working!");
  });

});


describe('birthday', function() {

  it('return an age using birth year as input', function() {
    let birthYear = 1983;
    let output = birthday(birthYear);
    expect(output).toEqual(36);
  });

});
