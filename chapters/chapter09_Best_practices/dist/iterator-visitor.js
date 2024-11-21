"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Concrete Element classes
class ElementA {
    constructor(name) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: name
        });
    }
    accept(visitor) {
        visitor.visitElementA(this);
    }
}
class ElementB {
    constructor(name) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: name
        });
    }
    accept(visitor) {
        visitor.visitElementB(this);
    }
}
// Collection class with Iterator
class ElementCollection {
    constructor() {
        Object.defineProperty(this, "elements", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    add(element) {
        this.elements.push(element);
    }
    createIterator() {
        let index = 0;
        return {
            hasNext: () => index < this.elements.length,
            next: () => {
                if (index < this.elements.length) {
                    return this.elements[index++];
                }
                else {
                    return null;
                }
            },
        };
    }
}
// Concrete Visitor implementation
class ConcreteVisitor {
    visitElementA(element) {
        console.log(`Visiting ElementA: ${element.name}`);
    }
    visitElementB(element) {
        console.log(`Visiting ElementB: ${element.name}`);
    }
}
// Usage example
const collection = new ElementCollection();
collection.add(new ElementA("Element A1"));
collection.add(new ElementB("Element B1"));
collection.add(new ElementA("Element A2"));
const visitor = new ConcreteVisitor();
const iterator = collection.createIterator();
while (iterator.hasNext()) {
    const element = iterator.next();
    if (element) {
        element.accept(visitor);
    }
}
