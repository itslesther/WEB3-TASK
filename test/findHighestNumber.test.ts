import { assert } from 'chai';
import { findHighestNumber } from '../index';

describe('findHighestNumber', function() {
  it('should return the highest number in the array', function() {
    const arr = [2, 5, 9, 8, 7, 5, 3, 2, 1];
    const result = findHighestNumber(arr);
    assert.equal(result, 9);
  });

  it('should return null for an empty array', function() {
    const arr: number[] = [];
    const result = findHighestNumber(arr);
    assert.isNull(result);
  });

  it('should return the only element for a single-element array', function() {
    const arr = [4];
    const result = findHighestNumber(arr);
    assert.equal(result, 4);
  });

});
