interface Component {
  getName(): string
  // Other component methods...
}

export interface Iterator<T> {
  hasNext(): boolean
  next(): T | null
}

class Composite implements Component {
  private children: Component[] = []

  constructor(private name: string) {}

  getName(): string {
    return this.name
  }

  add(component: Component): void {
    this.children.push(component)
  }

  createIterator(): Iterator<Component> {
    return new CompositeIterator(this.children)
  }
}

class CompositeIterator implements Iterator<Component> {
  private index: number = 0

  constructor(private children: Component[]) {}

  hasNext(): boolean {
    return this.index < this.children.length
  }

  next(): Component | null {
    if (this.hasNext()) {
      return this.children[this.index++]
    }
    return null
  }
}

// Usage
const root = new Composite("Root")
root.add(new Composite("Child1"))
root.add(new Composite("Child2"))

const iterator = root.createIterator();
while (iterator.hasNext()) {
    const component = iterator.next();
    if (component) {
        console.log(component.getName());
    }
}
