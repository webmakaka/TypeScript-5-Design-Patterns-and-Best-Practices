function memoize<T>(originalMethod: any, _context: any) {
  let cache: Map<string, T> = new Map()
  return function (this: any, ...args: any[]) {
    const key = JSON.stringify(args)

    if (cache.has(key)) {
      return cache.get(key)
    }

    const result = originalMethod.apply(this, args)
    cache.set(key, result)
    return result
  }
}

class MyClass {
  @memoize
  public addNumbers(x: number, y: number): number {
    console.log(`Calculating ${x} + ${y}`)
    return x + y
  }
}

const myClass = new MyClass()
const result1 = myClass.addNumbers(2, 3)
console.log(result1) // Output: 5

const result2 = myClass.addNumbers(2, 3)
console.log(result2) // Output: 5
