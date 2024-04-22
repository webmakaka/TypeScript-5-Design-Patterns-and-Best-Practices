// Allowed account types (list)
type AccountType = "checking" | "savings" | "investment"

// // Before NoInfer
// interface UserAccount<T extends string> {
//   username: T
//   accountType: T
// }

// function createAccount<T extends string>(username: T, accountType: T): UserAccount<T> {
//   return { username, accountType }
// }

// const checkingAccount: UserAccount<string> = createAccount("John Doe", "checking") // Valid
// const invalidAccount: UserAccount<string> = createAccount("Jane Doe", "credit") // Allowed, but undesirable

// After NoInfer (Stricter Type Checking)
interface UserAccount<T extends string> {
  username: T
  accountType: NoInfer<AccountType> // accountType must be from the allowed list
}

function createAccount<T extends string>(username: T, accountType: NoInfer<AccountType>): UserAccount<T> {
  return { username, accountType }
}

const checkingAccount: UserAccount<string> = createAccount("John Doe", "checking") // Valid

// Now this is correctly rejected:
// const invalidAccount: UserAccount<string> = createAccount("Jane Doe", "credit") // Error: Argument of type 'string' is not assignable to parameter of type '"checking" | "savings" | "investment"'.
