interface SignupFormState {
  email: string
  name: string
}
interface ActionPayload<T> {
  key: keyof T // Capture all keys of type T using keyof
  value: string
}

// Usage with SignupFormState
type SignupFormAction = ActionPayload<SignupFormState>

const updateEmailAction: SignupFormAction = {
  key: "email", // Autocomplete suggests all keys from SignupFormState
  value: "new_email@example.com",
}

const updateNameAction: SignupFormAction = {
  key: "name",
  value: "John Doe",
}

updateEmailAction.key
