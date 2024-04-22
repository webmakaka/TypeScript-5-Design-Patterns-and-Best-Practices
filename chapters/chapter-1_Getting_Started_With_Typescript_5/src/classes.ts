class User {
  constructor(private readonly name: string) {
    this.name = name
  }

  public getName(): string {
    return this.name
  }
}

const user = new User("Theo")

console.log(user.getName()) // Output: "Theo"

abstract class BaseApiClient {
  abstract fetch(req: RequestInfo): Promise<any> // More specific request type

  protected async performFetch(req: RequestInfo): Promise<any> {
    const response = await fetch(req)

    // Type guard or type assertion (TypeScript 5) to potentially narrow response type
    if (response.ok) {
      return response.json() // Assuming JSON response
    } else {
      throw new Error(`API request failed with status ${response.status}`)
    }
  }
}

class UsersClient extends BaseApiClient {
  async fetch(req: RequestInfo): Promise<User[]> {
    const data = await this.performFetch(req)
    return data
  }
}

const client = new UsersClient()
client.fetch("/users")
