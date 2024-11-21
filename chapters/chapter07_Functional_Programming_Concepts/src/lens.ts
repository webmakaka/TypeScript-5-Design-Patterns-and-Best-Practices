interface Lens<T, A> {
  get: (obj: T) => A
  set: (obj: T) => (value: A) => T
}

function lensProp<T, K extends keyof T>(key: K): Lens<T, T[K]> {
  return {
    get: (obj: T): T[K] => obj[key],
    set:
      (obj: T) =>
      (value: T[K]): T => ({ ...obj, [key]: value }),
  }
}
interface Person {
  name: string
  age: number
  email: string
}
const person: Person = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
}
const ageLens = lensProp<Person, "age">("age")
const currentAge = ageLens.get(person)
console.log(currentAge) // Output: 30
const updatedPerson = ageLens.set(person)(35)
console.log(updatedPerson)

function view<T, A>(lens: Lens<T, A>, obj: T): A {
  return lens.get(obj)
}
function set<T, A>(lens: Lens<T, A>, obj: T, value: A): T {
  return lens.set(obj)(value)
}
function over<T, A, B>(lens: Lens<T, A>, f: (x: A) => A, obj: T) {
  return lens.set(obj)(f(lens.get(obj)))
}

const increaseAge = over(ageLens, (val: number) => val + 1, person)
console.log(view(ageLens, increaseAge)) // 31

interface TodoItem {
  id: string
  title: string
  completed: boolean
}
interface TodoListState {
  byItemId: { [id: string]: TodoItem }
}

interface UpdateTodoItemCompletedAction {
  type: "UPDATE_TODO_ITEM_COMPLETED"
  id: string
  completed: boolean
}
const byItemIdLens = lensProp<TodoListState, 'byItemId'>('byItemId');
function todoItemLens(id: string): Lens<{ [key: string]: TodoItem; }, TodoItem> {
  return lensProp<{ [key: string]: TodoItem }, string | number>(id as keyof { [key: string]: TodoItem });
}
const completedLens = lensProp<TodoItem, 'completed'>('completed');

function reduceState(currentState: TodoListState, action: UpdateTodoItemCompletedAction): TodoListState {
  switch (action.type) {
    case "UPDATE_TODO_ITEM_COMPLETED":
      const itemLens = todoItemLens(action.id);
      
      // View the current TodoItem
      const currentTodoItem = view(itemLens, currentState.byItemId);

      // Over the `completed` property of the TodoItem
      const updatedTodoItem = over(completedLens, () => action.completed, currentTodoItem);

      // Update the byItemId map
      const updatedByItemId = {
        ...currentState.byItemId,
        [action.id]: updatedTodoItem,
      };

      // Return the new state with updated byItemId
      return set(byItemIdLens, currentState, updatedByItemId);
  }
  return currentState;
}
const initialState: TodoListState = {
  byItemId: {
    '1': { id: '1', title: 'Learn TypeScript', completed: false },
    '2': { id: '2', title: 'Build a project', completed: false },
  },
};
const action: UpdateTodoItemCompletedAction = {
  type: "UPDATE_TODO_ITEM_COMPLETED",
  id: '1',
  completed: true,
};
const newState = reduceState(initialState, action);
console.log(newState);
