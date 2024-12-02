"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Todo {
    constructor(id, title, completed = false) {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: id
        });
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: title
        });
        Object.defineProperty(this, "completed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: completed
        });
    }
    toggleCompletion() {
        this.completed = !this.completed;
    }
}
class TodoList {
    constructor() {
        Object.defineProperty(this, "todos", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "nextId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 1
        });
    }
    addTodo(title) {
        const newTodo = new Todo(this.nextId++, title);
        this.todos.push(newTodo);
    }
    getTodos() {
        return this.todos;
    }
}
class TodoView {
    constructor(model) {
        Object.defineProperty(this, "model", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: model
        });
    }
    displayTodos() {
        console.log("Todo List:");
        this.model.getTodos().forEach((todo, index) => {
            console.log(`${index + 1}. ${todo}`);
        });
    }
    promptAddTodo() {
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        readline.question("Enter a new todo: ", (todo) => {
            this.model.addTodo(todo);
            console.log("Todo added successfully!");
            readline.close();
        });
    }
}
class TodoController {
    constructor(model, view) {
        Object.defineProperty(this, "model", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.model = model;
        this.view = view;
    }
    addTodo(title) {
        this.model.addTodo(title);
        console.log("Todo added successfully!");
        this.view.displayTodos();
    }
    promptAddTodo() {
        this.view.promptAddTodo();
    }
}
// Example usage
const todoList = new TodoList();
const todoView = new TodoView(todoList);
const todoController = new TodoController(todoList, todoView);
// Start the interaction by prompting for a new todo
todoController.promptAddTodo();
