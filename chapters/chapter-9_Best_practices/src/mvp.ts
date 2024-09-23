interface TodoModel {
  id: number
  title: string
  completed: boolean
  toggleCompletion(): void
}

class Todo implements TodoModel {
  constructor(
    public readonly id: number,
    public title: string,
    public completed: boolean = false,
  ) {}

  toggleCompletion(): void {
    this.completed = !this.completed
  }
}

class TodoList {
  private todos: Todo[] = []

  private nextId: number = 1

  addTodo(title: string): void {
    const newTodo = new Todo(this.nextId++, title)

    this.todos.push(newTodo)
  }

  getTodos(): Todo[] {
    return this.todos
  }
}

class TodoView {
  constructor(private model: TodoList) {}

  displayTodos() {
    console.log("Todo List:")

    this.model.getTodos().forEach((todo, index) => {
      console.log(`${index + 1}. ${todo}`)
    })
  }

  promptAddTodo() {
    const readline = require("readline").createInterface({
      input: process.stdin,

      output: process.stdout,
    })

    readline.question("Enter a new todo: ", (todo: string) => {
      this.model.addTodo(todo)

      console.log("Todo added successfully!")

      readline.close()
    })
  }
}

class TodoController {
  private model: TodoList
  private view: TodoView

  constructor(model: TodoList, view: TodoView) {
    this.model = model
    this.view = view
  }

  addTodo(title: string): void {
    this.model.addTodo(title)
    console.log("Todo added successfully!")
    this.view.displayTodos()
  }

  promptAddTodo(): void {
    this.view.promptAddTodo()
  }
}

// Example usage
const todoList = new TodoList()
const todoView = new TodoView(todoList)
const todoController = new TodoController(todoList, todoView)

// Start the interaction by prompting for a new todo
todoController.promptAddTodo()
