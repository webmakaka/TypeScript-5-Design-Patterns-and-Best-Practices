import { kebabCase } from "lodash"

class User {
  constructor(
    private name: string,
    private email: string,
    private password: string,
  ) {}
  login(email: string, password: string) {}
  sendEmail(email: string, template: string) {}
  generateSlug(): string {
    return kebabCase(this.name)
  }
}

class UserAccountService {
  login(user: User, password: string) {}
}
class EmailService {
  sendEmailToUser(user: User, template: string) {}
}

type AccountType = "Normal" | "Premium" | "Ultimate"
class User2 {
  constructor(
    private name: string,
    private email: string,
    private password: string,
    private accountType: AccountType = "Normal",
  ) {}
  isPremium(): boolean {
    return this.accountType === "Premium"
  }
  isUltimate(): boolean {
    return this.accountType === "Ultimate"
  }
}
class VoucherService {
  getVoucher(user: User2): string {
    if (user.isPremium()) {
      return "15% discount"
    } else {
      return "10% discount"
    }
  }
}

type Voucher = string
const userTypeToVoucherMap: Record<AccountType, Voucher> = {
  Normal: "10% discount",
  Premium: "15% discount",
  Ultimate: "20% discount",
}

interface Bag<T> {
  push(item: T): void
  pop(): T | undefined
  isEmpty(): boolean
}
class Stack<T> implements Bag<T> {
  constructor(private items = []) {}
  push<T>(item: T) {}
  pop(): T | undefined {
    if (this.items.length > 0) {
      return this.items.pop()
    }

    return undefined
  }
  isEmpty(): boolean {
    return this.items.length === 0
  }
}
class NonEmptyStack<T> implements Bag<T> {
  private tag: any = Symbol()
  constructor(private items: T[] = []) {
    if (this.items.length == 0) {
      this.items.push(this.tag)
    }
  }
  push(item: T) {
    this.items.push(item)
  }
  pop(): T | undefined {
    if (this.items.length === 1) {
      const item = this.items.pop()
      this.items.push(this.tag)
      return item
    }
    if (this.items.length > 1) {
      return this.items.pop()
    }
    return undefined
  }
  isEmpty(): boolean {
    return this.items.length === 0
  }
}
interface Collection<T> {
  pushBack(item: T): void
  popBack(): T
  pushFront(item: T): void
  popFront(): T
  isEmpty(): boolean
  insertAt(item: T, index: number): void
  deleteAt(index: number): T | undefined
}
interface Collection<T> {
  isEmpty(): boolean
}
interface Array<T> extends Collection<T> {
  insertAt(item: T, index: number): void
  deleteAt(index: number): T | undefined
}
interface Stack<T> extends Collection<T> {
  pushFront(item: T): void
  popFront(): T
}
interface Queue<T> extends Collection<T> {
  pushBack(item: T): void
  popFront(): T
}

type User3 = {
  name: string
  email: string
}
class UserService {
  constructor() {}
  findByEmail(email: string): User3 | undefined {
    const userRepo = UserRepositoryFactory.getInstance()
    return userRepo.findByEmail(email)
  }
}
class UserRepositoryFactory {
  static getInstance(): UserRepository {
    return new UserRepository()
  }
}
class UserRepository {
  users: User3[] = [{ name: "Theo", email: "theo@example.com" }]
  findByEmail(email: string): User3 | undefined {
    const user = this.users.find((u) => u.email === email)
    return user
  }
}