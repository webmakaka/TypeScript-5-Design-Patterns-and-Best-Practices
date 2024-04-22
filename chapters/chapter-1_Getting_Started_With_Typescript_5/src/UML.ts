class Product {
  constructor(
    private name: string,
    private price: number,
  ) {
    this.name = name
    this.price = price
  }

  public getName(): string {
    return this.name
  }

  public getPrice(): number {
    return this.price
  }

  public discount(discountPercentage: number): void {
    this.price = this.price * (1 - discountPercentage / 100)
  }
}

interface Identifiable<T extends string | number> {
  id: T
}

class Author {
  id: string
  name: string

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
  }
}

class Blog implements Identifiable<string> {
  id: string
  author: Author

  constructor(id: string, author: Author) {
    this.id = id
    this.author = author
  }
}
class QueryBuilder {}

class EmptyQueryBuilder extends QueryBuilder {}

interface SearchParams {
  qb?: QueryBuilder
  path: string
}

class SearchService {
  queryBuilder?: QueryBuilder
  path: string

  constructor({ qb = new EmptyQueryBuilder(), path }: SearchParams) {
    this.queryBuilder = qb
    this.path = path
  }
}

class Room {
  private name: string

  constructor(name: string) {
    this.name = name
  }

  getName(): string {
    return this.name
  }
}

class House {
  private rooms: Room[]

  constructor(rooms?: Room[]) {
    this.rooms = rooms || [] // Initialize with empty array if not provided
  }

  addRoom(room: Room): void {
    this.rooms.push(room)
  }

  removeRoom(room: Room): void {
    // Implement logic to remove the room from the house
  }

  getRooms(): Room[] {
    return this.rooms // Return a copy to avoid modifying original array
  }
}
class SSHUser {
  constructor(
    private privateKey: string,
    public publicKey: string,
  ) {
    this.privateKey = privateKey
    this.publicKey = publicKey
  }

  public getBase64(): string {
    // Public method to access public data
    return Buffer.from(this.publicKey).toString("base64")
  }
}
