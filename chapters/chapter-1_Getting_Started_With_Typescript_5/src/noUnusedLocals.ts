function greet() {
  const name = "Alice" // Used
  let message // Unused (error with noUnusedLocals)
  message = "Hello, " + name + "!"
  return message
}
