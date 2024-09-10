type Reject = (reason?: any) => void
type Resolve<T> = (value: T) => void
type Execution<E, T> = (resolve: Resolve<T>, reject: Reject) => () => void

class Future<E, T> {
  private fn: Execution<E, T>

  constructor(ex: Execution<E, T>) {
    this.fn = ex
  }

  fork(reject: Reject, resolve: Resolve<T>): () => void {
    return this.fn(resolve, reject)
  }

  static success<E, T>(value: T): Future<E, T> {
    return new Future((resolve) => {
      resolve(value)
      return () => {}
    })
  }

  static fail<E, T>(error: E): Future<E, T> {
    return new Future((_, reject) => {
      reject(error)
      return () => {}
    })
  }

  then<U>(f: (value: T) => Future<E, U>): Future<E, U> {
    return new Future((resolve, reject) => {
      return this.fn((value: T) => f(value).fork(reject, resolve), reject)
    })
  }
}

const delayedTask = new Future<Error, string>((resolve, reject) => {
  const timerId = setTimeout(() => resolve("Hello, Future!"), 1000)
  return () => clearTimeout(timerId) // Cancellation function
})

// Chain operations
const uppercaseTask = delayedTask.then((value) => Future.success(value.toUpperCase()))

// Execute the Future
const cancelTask = uppercaseTask.fork(
  (error) => console.error("Task failed:", error),
  (result) => console.log("Task succeeded:", result),
)

// If needed, cancel the task
// cancelTask();
