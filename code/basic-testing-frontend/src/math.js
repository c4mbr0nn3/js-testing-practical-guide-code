export function add(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

export function subtract(numbers) {
  let subraction = 0;
  for (const number of numbers) {
    subraction -= number;
  }
  return subraction;
}
