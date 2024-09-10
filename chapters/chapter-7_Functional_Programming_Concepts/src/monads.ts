function add2(x: number): number {
  return x + 2
}

function mul3(x: number): number {
  return x * 3
}

function safeDivide(x: number, y: number): number | null {
  return y !== 0 ? x / y : null
}

function safeSquareRoot(x: number): number | null {
  if (x !== null) {
    return x >= 0 ? Math.sqrt(x) : null
  }
  return null
}
const result = safeSquareRoot(safeDivide(16, 4) as number) // Type: number | null

class Maybe<T> {
  private constructor(private value: T | null) {}

  static just<T>(value: T): Maybe<T> {
    return new Maybe(value)
  }

  static nothing<T>(): Maybe<T> {
    return new Maybe<T>(null)
  }

  map<U>(fn: (value: T) => U): Maybe<U> {
    return this.value === null ? Maybe.nothing() : Maybe.just(fn(this.value))
  }

  flatMap<U>(fn: (value: T) => Maybe<U>): Maybe<U> {
    return this.value === null ? Maybe.nothing() : fn(this.value)
  }

  equals(other: Maybe<T>, equalityFn?: (a: T, b: T) => boolean): boolean {
    if (this.value === null && other.value === null) {
      return true;
    }
    if (this.value === null || other.value === null) {
      return false;
    }
    if (equalityFn) {
      return equalityFn(this.value, other.value);
    }
    return this.value === other.value;
  }
}

class Either<L, R> {
  private constructor(
    private left: L | null,
    private right: R | null,
  ) {}
  static left<L, R>(value: L): Either<L, R> {
    return new Either<L, R>(value, null)
  }
  static right<L, R>(value: R): Either<L, R> {
    return new Either<L, R>(null, value)
  }
  // more methods here
}

function divide(a: number, b: number): Either<string, number> {
  return b === 0 ? Either.left("Division by zero") : Either.right(a / b)
}

function squareRoot(n: number): Either<string, number> {
  return n < 0 ? Either.left("Cannot calculate square root of negative number") : Either.right(Math.sqrt(n))
}

// // Usage
// const result = divide(10, 2).flatMap(squareRoot)
// // Either contains the result or an error message

class State<S, A> {
  constructor(public run: (s: S) => [A, S]) {}

  static of<S, A>(a: A): State<S, A> {
    return new State((s) => [a, s])
  }

  map<B>(f: (a: A) => B): State<S, B> {
    return new State((s) => {
      const [a, s1] = this.run(s)

      return [f(a), s1]
    })
  }

  flatMap<B>(f: (a: A) => State<S, B>): State<S, B> {
    return new State((s) => {
      const [a, s1] = this.run(s)

      return f(a).run(s1)
    })
  }
}

const increment = new State<number, void>((s) => [undefined, s + 1])

const getCount = new State<number, number>((s) => [s, s])

const program = increment.flatMap(() => increment).flatMap(() => getCount)

const [count, finalState] = program.run(0)

console.log(count, finalState) // 2, 2

// Left Identity
const a = 5
const f = (x: number) => Maybe.just(x * 2)
console.log(Maybe.just(a).flatMap(f).equals(f(a))) // true

// Right Identity
const m = Maybe.just(3)
console.log(m.flatMap(Maybe.just).equals(m)) // true

// Associativity
const g = (x: number) => Maybe.just(x + 1)
const h = (x: number) => Maybe.just(x * 3)
const m1 = Maybe.just(2).flatMap(g).flatMap(h)
const m2 = Maybe.just(2).flatMap((x) => g(x).flatMap(h))
console.log(m1.equals(m2)) // true
