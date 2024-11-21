// Visitor interface
interface Visitor {
  visitElementA(element: ElementA): void
  visitElementB(element: ElementB): void
}

export interface Iterator<T> {
  hasNext(): boolean
  next(): T | null
}

// Element interface
interface Element {
  accept(visitor: Visitor): void
}

// Concrete Element classes
class ElementA implements Element {
  constructor(public name: string) {}

  accept(visitor: Visitor): void {
    visitor.visitElementA(this)
  }
}

class ElementB implements Element {
  constructor(public name: string) {}

  accept(visitor: Visitor): void {
    visitor.visitElementB(this)
  }
}

// Collection class with Iterator
class ElementCollection {
  private elements: Element[] = []

  add(element: Element): void {
    this.elements.push(element)
  }

  createIterator(): Iterator<Element> {
    let index = 0
    return {
      hasNext: (): boolean => index < this.elements.length,
      next: (): Element | null => {
        if (index < this.elements.length) {
          return this.elements[index++]
        } else {
          return null
        }
      },
    }
  }
}

// Concrete Visitor implementation
class ConcreteVisitor implements Visitor {
  visitElementA(element: ElementA): void {
    console.log(`Visiting ElementA: ${element.name}`)
  }

  visitElementB(element: ElementB): void {
    console.log(`Visiting ElementB: ${element.name}`)
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
