import * as R from "ramda"
export interface IO<A> {
  (): A
}
const log =
  (s: unknown): IO<void> =>
  () =>
    console.log(s)

function main(): IO<void> {
  return R.compose(log, sumList, getArgs)(11, 4)
}
function sumList(numbers: number[]): number {
  return numbers.reduce((prev, curr) => prev + curr, 0)
}

function getArgs(a: number, b: number): number[] {
  return [a, b]
}
console.log(main()()) // 15

function sortList(list: number[]): number[] {
  return list.sort((a, b) => a - b)
}
let originalList = [3, 1, 4, 1, 5, 9]
let sortedList = sortList(originalList)
console.log(sortedList) // [1, 1, 3, 4, 5, 9]
console.log(originalList) // [1, 1, 3, 4, 5, 9] - Original list is mutated!

function pureSort(list: number[]): number[] {
  return [...list].sort((a, b) => a - b)
}
let numbers = [3, 1, 4, 1, 5, 9]
let sorted1 = pureSort(numbers)
let sorted2 = pureSort(numbers)
console.log(sorted1) // [1, 1, 3, 4, 5, 9]
console.log(sorted2) // [1, 1, 3, 4, 5, 9]
console.log(numbers) // [3, 1, 4, 1, 5, 9] - Original list remains unchanged

function memoize<T>(originalMethod: any, _context?: any) {
  let cache: Map<string, T> = new Map()
  if (typeof originalMethod !== "function") {
    throw new Error("Memoize decorator can only be used on functions")
  }
  return function (this: unknown, ...args: unknown[]) {
    const key = JSON.stringify(args)

    if (cache.has(key)) {
      return cache.get(key)
    }

    const result = originalMethod.apply(this, args)
    cache.set(key, result)
    return result
  }
}
const process = (n: number): number => {
  console.log(`Processing ${n}...`)
  return n * n
}

const memoizedCalculation = memoize(process)
console.log(memoizedCalculation(4)) // Logs: Processing for 4... / Output: 16
console.log(memoizedCalculation(4)) // Output: 16 from cache
console.log(memoizedCalculation(5)) // Logs: Processing for 5... / Output: 25
