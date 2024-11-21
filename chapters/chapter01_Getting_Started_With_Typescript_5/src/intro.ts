const one: string = "one"
const two: boolean = false
const three: number = 3
const four: null = null
const five: unknown = 5
const six: any = 6
const seven = Symbol("seven")

// 'never' is typically used for functions that don't return anything (void) or throw an error.
function neverReturningFunction(): never {
  throw new Error("This function never returns")
}
neverReturningFunction()

// let eight: never; // This wouldn't work as you can't assign a value to 'never'.
