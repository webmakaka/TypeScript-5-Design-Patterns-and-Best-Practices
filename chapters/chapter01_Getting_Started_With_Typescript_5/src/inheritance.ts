class BaseClient {
  constructor(protected baseUrl: string) {
    this.baseUrl = baseUrl
  }

  protected getBaseUrl(): string {
    return this.baseUrl
  }
}

class UsersApiClient extends BaseClient {
  constructor(baseUrl: string) {
    super(baseUrl)
  }

  getUsers(): void {
    console.log(`Fetching users from ${this.getBaseUrl()}/users`)
  }
}
