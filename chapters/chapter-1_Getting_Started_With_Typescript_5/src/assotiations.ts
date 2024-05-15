interface Id<T extends string | number> {
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

class Blog implements Id<string> {
  id: string

  author: Author

  constructor(id: string, author: Author) {
    this.id = id

    this.author = author
  }
}
