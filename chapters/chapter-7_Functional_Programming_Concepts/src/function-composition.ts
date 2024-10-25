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

function compose<T extends any[], R1, R2>(
  f1: (...args: T) => R1,
  f2: (a: R1) => R2
): (...args: T) => R2;
function compose<T extends any[], R1, R2, R3>(
  f1: (...args: T) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3
): (...args: T) => R3;
function compose<T extends any[], R1, R2, R3, R4>(
  f1: (...args: T) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4
): (...args: T) => R4;
function compose(...fns: Function[]) {
  return fns.reduce(
    (prevFn, nextFn) => (...args: any) => nextFn(prevFn(...args)),
    (value: any) => value
  );
}
function curry<T, U, V>(fn: (a: T, b: U) => V): (a: T) => (b: U) => V {
  return (a: T) => (b: U) => fn(a, b)
}
const curriedTruncate = curry(truncate)
const formatAndTruncate = compose((s: string) => curriedTruncate(s)(7), removeSpaces, capitalizeFirstLetter)
console.log(formatAndTruncate("  john doe  ")) // Output: "Johndoe..."
console.log(formatAndTruncate("ALICE IN WONDERLAND")) // Output: "Alicein..."

interface Person {
  name: string;
  age: number;
}

function getDisplayName(p: Person): string {
  return p.name.toLowerCase();
}

function getLength(s: string): number {
  return s.length;
}

// Now the type of getDisplayNameLength is correctly inferred as '(p: Person) => number'
const getDisplayNameLength = compose(getDisplayName, getLength);

// Usage example
const person: Person = { name: "John Doe", age: 30 };
console.log(getDisplayNameLength(person)); // Output: 8