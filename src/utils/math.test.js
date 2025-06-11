// src/utils/math.test.js
import { multiply } from './math';

describe('multiply()', () => {
  it('correctly multiplies two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(-2, 5)).toBe(-10);
  });
});
