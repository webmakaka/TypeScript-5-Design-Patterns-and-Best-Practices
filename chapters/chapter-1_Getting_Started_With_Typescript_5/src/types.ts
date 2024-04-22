type A = "A"
type B = "B"
type C = A | B

type User = {
  name: string
}

type ExtendedUser = User & {
  age: number
} // ExtendedUser requires both name (from User) and age

let user: ExtendedUser = {
  name: "Theo",
  age: 20,
}
