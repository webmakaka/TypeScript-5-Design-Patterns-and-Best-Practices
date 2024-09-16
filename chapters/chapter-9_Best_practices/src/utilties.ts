type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>
}

interface NestedObject {
  a: { b: { c: number } }
}

type ReadonlyNested = DeepReadonly<NestedObject>

// Usage
const nested: ReadonlyNested = {
  a: { b: { c: 42 } },
}

// Error: Cannot assign to 'c' because it is a read-only property.
// nested.a.b.c = 43

type OptionalKeys<T> = { [K in keyof T]-?: {} extends Pick<T, K> ? K : never }[keyof T]
type RequiredKeys<T> = { [K in keyof T]-?: {} extends Pick<T, K> ? never : K }[keyof T]

interface User {
  id: number
  name: string
  email?: string
}

type UserOptionalKeys = OptionalKeys<User> // "email"
type UserRequiredKeys = RequiredKeys<User> // "id" | "name"

type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}

type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T]

type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>

interface Calculator {
  readonly value: number
  add: (n: number) => void
  subtract: (n: number) => void
}

type MutableCalculator = Mutable<Calculator>
type CalculatorMethods = FunctionProperties<Calculator>

// Usage
const calc: MutableCalculator = {
  value: 0,
  add(n) {
    this.value += n
  },
  subtract(n) {
    this.value -= n
  },
}

calc.value = 10 // This is now allowed
