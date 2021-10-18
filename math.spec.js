import { describe, expect, it } from '@jest/globals'
import { isEven, isOdd, isDivisibleBy3, isDivisibleBy } from './math'

describe('math', () => {
  describe('isOdd', () => {
    it('returns true, if a number is odd', () => {
      const result = isOdd(1)
      expect(result).toBe(true)
    })

    it('returns true, if a negative number is odd', () => {
      const result = isOdd(-3)
      expect(result).toBe(true)
    })

    it('returns false, if a number is even', () => {
      const result = isOdd(2)
      expect(result).toBe(false)
    })

    it('returns false, if a negative number is even', () => {
      const result = isOdd(-4)
      expect(result).toBe(false)
    })
  })

  describe('isEven', () => {
    it('returns true, if a number is even', () => {
      const result = isEven(2)
      expect(result).toBe(true)
    })

    it('returns true, if a negative number is even', () => {
      const result = isEven(-6)
      expect(result).toBe(true)
    })

    it('returns false, if a number is odd', () => {
      const result = isEven(15)
      expect(result).toBe(false)
    })

    it('returns false, if a negative number is odd', () => {
      const result = isEven(-43)
      expect(result).toBe(false)
    })
  })

  describe('isDivisibleBy3', () => {
    it('returns true, if a number is divisible by 3', () => {
      const result = isDivisibleBy3(9)
      expect(result).toBe(true)
    })

    it('returns true, if a negative number is divisible by 3', () => {
      const result = isDivisibleBy3(-6)
      expect(result).toBe(true)
    })

    it('returns false, if a number is not divisible by 3', () => {
      const result = isDivisibleBy3(10)
      expect(result).toBe(false)
    })

    it('returns false, if a negative number is not divisible by 3', () => {
      const result = isDivisibleBy3(-43)
      expect(result).toBe(false)
    })
  })

  describe('isDivisibleBy', () => {
    const numberArray = [4, 16, 29, 7]

    numberArray.forEach(divisor => {
      it('returns true if a number is divisible by a divisor', () => {
        const result = isDivisibleBy(3 * divisor, divisor)
        expect(result).toBe(true)
      })

      it('returns false if a number is divisible by a divisor', () => {
        const result = isDivisibleBy(3 * divisor + 1, divisor)
        expect(result).toBe(false)
      })
    })

    it('return "don\'t devide by 0 you fool"', () => {
      const result = isDivisibleBy(3, 0)
      expect(result).toBe("don't devide by 0 you fool")
    })
  })
})
