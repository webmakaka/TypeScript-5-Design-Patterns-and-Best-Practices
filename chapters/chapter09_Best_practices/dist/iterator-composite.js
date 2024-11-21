"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Composite {
    constructor(name) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: name
        });
        Object.defineProperty(this, "children", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    getName() {
        return this.name;
    }
    add(component) {
        this.children.push(component);
    }
    createIterator() {
        return new CompositeIterator(this.children);
    }
}
class CompositeIterator {
    constructor(children) {
        Object.defineProperty(this, "children", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: children
        });
        Object.defineProperty(this, "index", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
    }
    hasNext() {
        return this.index < this.children.length;
    }
    next() {
        if (this.hasNext()) {
            return this.children[this.index++];
        }
        return null;
    }
}
// Usage
const root = new Composite("Root");
root.add(new Composite("Child1"));
root.add(new Composite("Child2"));
const iterator = root.createIterator();
while (iterator.hasNext()) {
    const component = iterator.next();
    if (component) {
        console.log(component.getName());
    }
}
