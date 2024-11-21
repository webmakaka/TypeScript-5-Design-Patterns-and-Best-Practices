"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const operators_2 = require("rxjs/operators");
// From constant values or objects
(0, rxjs_1.of)(1, 2, 3, 4, 5);
(0, rxjs_1.of)({ id: 1, data: "value" });
// From an array of values
(0, rxjs_1.from)([1, 2, 3, 4, 5]);
// From a Promise
(0, rxjs_1.from)(Promise.resolve("data"));
function* getNextRandom() {
    yield Math.random() * 100;
}
// From a custom producer function
const randomValues = new rxjs_1.Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setInterval(() => {
        subscriber.next(getNextRandom().next().value);
    }, 1000);
});
(0, rxjs_1.interval)(1000).pipe((0, operators_1.take)(5), (0, operators_1.map)((v) => v * v), (0, operators_1.tap)(v => console.log(`Squared value: ${v}`)) // Side effect moved to tap
).subscribe();
// Output: Squared value: 0, 1, 4, 9, 16
let origin = (0, rxjs_1.from)([1, 2, 3, 4, new Error("Error")]);
origin.subscribe({
    next: (v) => {
        console.log("Value accepted: ", v);
    },
    error: (e) => {
        console.log("Error accepted: ", e);
    },
    complete: () => {
        console.log("Finished");
    }
});
(0, rxjs_1.of)([1, 2, 3]).subscribe({
    next: (values) => console.log("Values:", values),
    complete: () => console.info("Completed")
});
(0, rxjs_1.of)(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe((0, operators_1.tap)(v => console.log(`Processing value: ${v}`)), // Log before filtering
(0, operators_1.filter)((v) => v % 3 === 0), (0, operators_1.tap)(v => console.log(`Divisible by 3: ${v}`)) // Log after filtering
).subscribe();
// Output: Divisible by 3: 3, 6, 9
(0, rxjs_1.from)([
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 35 },
])
    .pipe((0, operators_1.map)((user) => user === null || user === void 0 ? void 0 : user.name))
    .subscribe((name) => console.log(`Name: ${name}`));
// Output: Name: Alice, Name: Bob, Name: Charlie
const users$ = (0, rxjs_1.from)([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
]);
const getPosts = (userId) => (0, rxjs_1.from)([
    { userId: 1, id: 1, title: "Alice's post" },
    { userId: 2, id: 2, title: "Bob's post" },
    { userId: 1, id: 3, title: "Alice's second post" },
]).pipe((0, operators_1.filter)((post) => post.userId === userId), (0, operators_1.take)(1));
users$
    .pipe((0, operators_2.mergeMap)((user) => getPosts(user.id).pipe((0, operators_1.map)((post) => ({ userName: user.name, postTitle: post.title })), (0, operators_2.catchError)(() => (0, rxjs_1.of)({ userName: user.name, postTitle: "No post found" })))))
    .subscribe((result) => console.log(`${result.userName}'s post: ${result.postTitle}`));
// Output:
const stream$ = (0, rxjs_1.interval)(1000).pipe((0, operators_1.take)(5), (0, operators_1.share)());
stream$.subscribe((v) => console.log("Value accepted from first subscriber: ", v));
setTimeout(() => {
    stream$.subscribe((v) => {
        console.log("Value accepted from second subscriber: ", v);
    });
}, 3000);
