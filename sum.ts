function sum(a: number, b: number) {
  return a + b;
}
function sumOf(numbers: number[]) {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

export { sum, sumOf };
