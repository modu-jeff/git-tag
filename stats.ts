function max(numbers: number[]) {
  return Math.max(...numbers);
}

function min(numbers: number[]) {
  return Math.min(...numbers);
}

function average(numbers: number[]) {
  return numbers.reduce((acc, cur, i, { length }) => acc + cur / length, 0);
}

function sort(numbers: number[]) {
  return numbers.sort((a, b) => a - b);
}

function median(numbers: number[]) {
  const middle = Math.floor(numbers.length / 2);
  const nums = sort(numbers);
  return numbers.length % 2
    ? nums[middle]
    : (nums[middle - 1] + nums[middle]) / 2;
}

function mode(numbers: number[]) {
  const counts = numbers.reduce(
    (acc, cur) => acc.set(cur, acc.get(cur) + 1 || 1),
    new Map()
  );
  const maxCount = Math.max(...counts.values());
  const modes = [...counts.keys()].filter(
    (number) => counts.get(number) === maxCount
  );
  if (modes.length === numbers.length) {
    return null;
  }
  if (modes.length > 1) {
    return modes;
  }
  return modes[0];
}

export { max, min, average, sort, median, mode };

// TDD의 3공식
// 1. 실패 : 테스트 코드를 작성해서 일단 실패하게 만든다.
// 2. 성공 : 작성한 테스트코드를 근간으로 함수를 작성해서 성공하게 만든다.
// 3. 리팩토링 : 테스트 코드를 깨뜨리지 않고 현 로직에서 코드를 개선한다.
