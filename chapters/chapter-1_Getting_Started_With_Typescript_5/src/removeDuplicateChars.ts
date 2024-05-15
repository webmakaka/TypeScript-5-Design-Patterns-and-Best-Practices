function removeDuplicateChars(input: string) {
  const result = []
  const seen = new Set<string>()
  for (let c of input) {
    if (!seen.has(c)) {
      seen.add(c)
      result.push(c)
    }
  }
  return result
}

console.log(removeDuplicateChars("aarfqwevzxcddd"))

const numbers: number[] = []
numbers.push(1)
// TypeScript error: Argument of type '"two"' is not assignable to parameter of type 'number'.
// numbers.push("two")
