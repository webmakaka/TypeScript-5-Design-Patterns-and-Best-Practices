export class Singleton {
  // Stores the singleton instance
  private static instance: Singleton

  // Prevents creation of new instances
  private constructor() {}

  // Method to retrieve instance
  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }
    return Singleton.instance
  }
}

class UserService {
  private static instance: UserService

  private constructor() {}

  static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService()
    }
    return UserService.instance
  }

  getUsers(): string[] {
    return ["Alex", "John", "Sarah"]
  }
}

// Usage
const userService = UserService.getInstance()
const users = userService.getUsers()
console.log(users) // Output: ['Alex', 'John', 'Sarah']
