// With strictNullChecks: error
let maybeNumber: number | null = null
// let value = maybeNumber * 10

// Workaround: type guard or nullish coalescing operator
let value2
if (maybeNumber !== null) {
  value2 = maybeNumber * 10
} else {
  value2 = 0
}

let value3 = maybeNumber ?? 0
