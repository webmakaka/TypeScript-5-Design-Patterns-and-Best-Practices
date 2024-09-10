function double(x: number): number {
  return x * 2
}
function increment(x: number): number {
  return x + 1
}
const doubleAndIncrement = (x: number): number => increment(double(x))
console.log(doubleAndIncrement(3)) // Output: 7
// Explanation: (3 * 2) + 1 = 7

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}
function removeSpaces(str: string): string {
  return str.replace(/\s+/g, "")
}
function truncate(str: string, length: number): string {
  return str.length > length ? str.slice(0, length) + "..." : str
}
const formatUserInput = (input: string): string => {
  return truncate(removeSpaces(capitalizeFirstLetter(input)), 10)
}

console.log(formatUserInput("  john doe  ")) // Output: "Johndoe..."
console.log(formatUserInput("ALICE IN WONDERLAND")) // Output: "Aliceinwo..."

function compose<T>(...fns: Array<(arg: T) => T>) {
  return (x: T) => fns.reduceRight((acc, fn) => fn(acc), x)
}
function curry<T, U, V>(fn: (a: T, b: U) => V): (a: T) => (b: U) => V {
  return (a: T) => (b: U) => fn(a, b)
}
const curriedTruncate = curry(truncate)
const formatAndTruncate = compose((s: string) => curriedTruncate(s)(7), removeSpaces, capitalizeFirstLetter)
console.log(formatAndTruncate("  john doe  ")) // Output: "Johndoe..."
console.log(formatAndTruncate("ALICE IN WONDERLAND")) // Output: "Alicein..."
