function processValue(value: any) {
  console.log(value.toUpperCase()) // This will throw an error if value is not a string
}

processValue("hello") // Works fine
processValue(123) // Runtime error: value.toUpperCase is not a function

// interface Callback {
//   onEvent: Function // Permissive type
// }

// const callback1: Callback = {
//   onEvent: (a: string) => a.toUpperCase(),
// }

// const callback2: Callback = {
//   onEvent: () => "Hello",
// }

// const callback3: Callback = {
//   onEvent: () => 1,
// }
interface Callback<T> {
  onEvent: (arg: T) => void
}

const stringCallback: Callback<string> = {
  onEvent: (a) => console.log(a.toUpperCase()), // Accepts only strings
}

const numberCallback: Callback<number> = {
  onEvent: (n) => console.log(n * 2), // Accepts only numbers
}

stringCallback.onEvent("hello") // Works fine

numberCallback.onEvent(5) // Works fine

// stringCallback.onEvent(5);      // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
