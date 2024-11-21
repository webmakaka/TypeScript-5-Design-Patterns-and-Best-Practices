function isArray(arg: unknown): arg is readonly unknown[] {
  // Unknown argument, return narrowed type
  return Array.isArray(arg)
}

const myList = { item1: "apple", item2: "orange" }
console.log(isArray(myList))
