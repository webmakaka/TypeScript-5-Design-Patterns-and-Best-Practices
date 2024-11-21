import { of, from, interval } from "rxjs"
import { filter, take, map } from "rxjs/operators"
import { describe, it, expect } from "vitest"

describe("Observable Tests", () => {
  it("should emit values from the array", async () => {
    const expectedValues = [1, 2, 3, 4, 5]
    const source$ = from(expectedValues)

    const receivedValues: number[] = []

    await new Promise((resolve) => {
      source$.subscribe({
        next: (value) => receivedValues.push(value),
        complete: resolve,
      })
    })

    expect(receivedValues).toEqual(expectedValues)
  })

  it("should emit squared values from interval", async () => {
    const result: number[] = []
    const source$ = interval(1000).pipe(
      take(5),
      map((v) => v * v),
    )

    source$.subscribe({
      next: (value) => result.push(value),
      complete: async () => {
        await expect(result).toEqual([0, 1, 4, 9, 16])
      },
    })
  })

  it("should handle errors gracefully", async () => {
    const errorSource$ = from([1, 2, 3, new Error("Error")])
    const result: any[] = []

    errorSource$.subscribe({
      next: (value) => result.push(value),
      error: async (e) => {
        await expect(e.message).toBe("Error")
        await expect(result).toEqual([1, 2, 3])
      },
    })
  })

  it("should filter values divisible by 3", async () => {
    const expectedValues = [3, 6, 9]
    const source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9)

    source$.pipe(filter((v: number) => v % 3 === 0)).subscribe({
      next: async (value) => {
        await expect(value).toBe(expectedValues.shift())
      },
    })
  })

  it("should map user objects to names", async () => {
    const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ]

    const results: string[] = []

    await new Promise((resolve) => {
      from(users)
        .pipe(map((user) => user.name))
        .subscribe({
          next: (name) => results.push(name),
          complete: resolve,
        })
    })

    // Use toEqual instead of toBe
    expect(results).toEqual(["Alice", "Bob", "Charlie"])
  })
})
