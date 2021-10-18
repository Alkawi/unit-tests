export function isOdd(number) {
  return Math.abs(number % 2) === 1
}

export function isEven(number) {
  // implement here
  return number % 2 === 0
}

export function isDivisibleBy3(number) {
  // implement here
  return number % 3 === 0
}

export function isDivisibleBy(number, divisor) {
  // implement here
  if (divisor !== 0) {
    return number % divisor === 0
  } else {
    return "don't devide by 0 you fool"
  }
}
