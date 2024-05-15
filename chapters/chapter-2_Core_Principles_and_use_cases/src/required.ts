interface UserProfile {
  name: string
  email: string
  bio?: string // Optional user biography
  location?: string // Optional user location
}
type CompleteUserProfile = Required<UserProfile>

function displayPublicProfile(profile: CompleteUserProfile): void {
  console.log(`Name: ${profile.name}, Email: ${profile.email}`)
}

const incompleteProfile = { name: "John Doe" }
// Compilation error: email is missing
// const completeProfile: CompleteUserProfile = { name: "Jane Doe", email: "jane.doe@example.com" }
// displayPublicProfile(completeProfile)
