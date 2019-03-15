
import { test } from './../src/backEnd.js';




describe('test', function() {

  it('return a string of "working!"', function() {

    expect(test()).toEqual("working!");
  });

});
