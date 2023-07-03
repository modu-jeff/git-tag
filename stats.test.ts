import { max, min, average, sort, median, mode } from './stats';

describe('stats', () => {
  it('gets maximum value', () => {
    expect(max([1, 2, 3, 4])).toBe(4);
  });

  it('gets minimum value', () => {
    expect(min([1, 2, 3, 4])).toBe(1);
  });

  it('gets average value', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
  });

  describe('median', () => {
    it('sort array', () => {
      expect(sort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });
    it('gets median value for odd length', () => {
      expect(median([1, 2, 3, 4, 5])).toBe(3);
    });
    it('gets median value for even length', () => {
      expect(median([1, 2, 3, 4, 5, 6])).toBe(3.5);
    });
  });

  describe('mode', () => {
    it('빈도값 제일 높은거 찾기', () => {
      expect(mode([1, 2, 3, 4, 4, 5, 5, 5, 6, 6, 7])).toBe(5);
    });
    it('빈도값이 동일할 때는 null', () => {
      expect(mode([1, 2, 3, 4])).toBe(null);
    });
    it('빈도값이 여러개일 때는 배열로 리턴', () => {
      expect(mode([1, 2, 2, 3, 3, 4])).toEqual([2, 3]);
    });
  });
});
