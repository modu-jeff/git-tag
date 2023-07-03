import { sum, sumOf } from './sum';

describe('sum', () => {
  it('1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('모든 수를 더한다', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(sumOf(arr)).toBe(15);
  });
});
