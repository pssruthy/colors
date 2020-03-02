const assert = require('assert');
const sum = require('../sum');

describe('sum', () => {
  it('should add two numbers', () => {
    assert.strictEqual(sum(2, 3), 6);
  });
});
