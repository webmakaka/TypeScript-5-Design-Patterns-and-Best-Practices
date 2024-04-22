function createAccount(username, accountType) {
    return { username, accountType };
}
const checkingAccount = createAccount("John Doe", "checking"); // Valid
export {};
// Now this is correctly rejected:
// const invalidAccount: UserAccount<string> = createAccount("Jane Doe", "credit") // Error: Argument of type 'string' is not assignable to parameter of type '"checking" | "savings" | "investment"'.
