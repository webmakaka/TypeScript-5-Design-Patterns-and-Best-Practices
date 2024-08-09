const name = "Alice";
// name = "Bob"; // Error: Cannot assign to 'name' because it is a constant.

const numbers = [1, 2, 3];
numbers.push(4); // This is allowed and modifies the array
// numbers = [5, 6, 7]; // Error: Cannot assign to 'numbers' because it is a constant.

interface User {
    name: string;
    age: number;
}

const user: Readonly<User> = {
    name: "Alice",
    age: 30
};

//user.age = 31; // Error: Cannot assign to 'age' because it is a read-only property.

type DeepReadonly<T> = 
    T extends (infer R)[] ? ReadonlyArray<DeepReadonly<R>> :
    T extends Function ? T :
    T extends object ? {readonly [K in keyof T]: DeepReadonly<T[K]>} :
    T;

interface Department {
    name: string;
    employees: {id: number, name: string}[];
}

const dept: DeepReadonly<Department> = {
    name: "Engineering",
    employees: [{id: 1, name: "Alice"}, {id: 2, name: "Bob"}]
};

// dept.name = "Sales"; // Error
// dept.employees.push({id: 3, name: "Charlie"}); // Error
// dept.employees[0].name = "Alicia"; // Error
(dept.name as string) = "Sales"

class ImmutablePerson {
    readonly #name: string;
    readonly #age: number;
    constructor(name: string, age: number) {
        this.#name = name;
        this.#age = age;
    }
    get name(): string {
        return this.#name;
    }
    get age(): number {
        return this.#age;
    }
    withAge(newAge: number): ImmutablePerson {
        return new ImmutablePerson(this.#name, newAge);
    }
}
const person1 = new ImmutablePerson("Alice", 30);
const person2 = person1.withAge(31);
console.log(person1.age); // 30
console.log(person2.age); // 31

import Immutable from 'immutable';

const list1 = Immutable.List([1, 2, 3]);
const list2 = list1.push(4);

console.log(list1.toArray()); // [1, 2, 3]
console.log(list2.toArray()); // [1, 2, 3, 4]

const map1 = Immutable.Map({ a: 1, b: 2 });
const map2 = map1.set('b', 3);

console.log(map1.toObject()); // { a: 1, b: 2 }
console.log(map2.toObject()); // { a: 1, b: 3 }

(list1 as any).push(5);
console.log(list1.toArray()); // [ 1, 2, 3 ]
