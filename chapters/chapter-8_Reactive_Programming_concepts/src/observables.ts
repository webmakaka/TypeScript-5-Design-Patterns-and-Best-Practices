import { of, from, interval, Observable } from "rxjs"
import { filter, take, share, map, tap } from "rxjs/operators"

import { mergeMap, catchError } from "rxjs/operators"

// From constant values or objects
of(1, 2, 3, 4, 5)
of({ id: 1, data: "value" })

// From an array of values
from([1, 2, 3, 4, 5])

// From a Promise
from(Promise.resolve("data"))

function* getNextRandom() {
  yield Math.random() * 100
}

// From a custom producer function
const randomValues = new Observable((subscriber) => {
  subscriber.next(1)
  subscriber.next(2)
  subscriber.next(3)

  setInterval(() => {
    subscriber.next(getNextRandom().next().value)
  }, 1000)
})
interval(1000).pipe(
  take(5),
  map((v: number) => v * v),
  tap(v => console.log(`Squared value: ${v}`)) // Side effect moved to tap
).subscribe();
// Output: Squared value: 0, 1, 4, 9, 16

let origin = from([1, 2, 3, 4, new Error("Error")]);

origin.subscribe({
  next: (v: any) => {
    console.log("Value accepted: ", v);
  },
  error: (e) => {
    console.log("Error accepted: ", e);
  },
  complete: () => {
    console.log("Finished");
  }
});
of([1, 2, 3]).subscribe({
  next: (values) => console.log("Values:", values),
  complete: () => console.info("Completed")
});

of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
  tap(v => console.log(`Processing value: ${v}`)), // Log before filtering
  filter((v: number) => v % 3 === 0),
  tap(v => console.log(`Divisible by 3: ${v}`))   // Log after filtering
).subscribe();
// Output: Divisible by 3: 3, 6, 9

from([
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
])
  .pipe(map((user) => user?.name))
  .subscribe((name: string) => console.log(`Name: ${name}`))
// Output: Name: Alice, Name: Bob, Name: Charlie

const users$ = from([
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
])

const getPosts = (userId: number) =>
  from([
    { userId: 1, id: 1, title: "Alice's post" },
    { userId: 2, id: 2, title: "Bob's post" },
    { userId: 1, id: 3, title: "Alice's second post" },
  ]).pipe(
    filter((post) => post.userId === userId),
    take(1),
  )

users$
  .pipe(
    mergeMap((user) =>
      getPosts(user.id).pipe(
        map((post) => ({ userName: user.name, postTitle: post.title })),
        catchError(() => of({ userName: user.name, postTitle: "No post found" })),
      ),
    ),
  )
  .subscribe((result) => console.log(`${result.userName}'s post: ${result.postTitle}`))
// Output:

const stream$ = interval(1000).pipe(take(5), share())

stream$.subscribe((v) => console.log("Value accepted from first subscriber: ", v))

setTimeout(() => {
  stream$.subscribe((v) => {
    console.log("Value accepted from second subscriber: ", v)
  })
}, 3000)
