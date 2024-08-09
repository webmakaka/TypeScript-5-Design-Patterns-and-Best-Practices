"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function lensProp(key) {
    return {
        get: (obj) => obj[key],
        set: (obj) => (value) => (Object.assign(Object.assign({}, obj), { [key]: value })),
    };
}
const person = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
};
const ageLens = lensProp("age");
const currentAge = ageLens.get(person);
console.log(currentAge); // Output: 30
const updatedPerson = ageLens.set(person)(35);
console.log(updatedPerson);
function view(lens, obj) {
    return lens.get(obj);
}
function set(lens, obj, value) {
    return lens.set(obj)(value);
}
function over(lens, f, obj) {
    return lens.set(obj)(f(lens.get(obj)));
}
const increaseAge = over(ageLens, (val) => val + 1, person);
console.log(view(ageLens, increaseAge)); // 31
const byItemIdLens = lensProp('byItemId');
function todoItemLens(id) {
    return lensProp(id);
}
const completedLens = lensProp('completed');
function reduceState(currentState, action) {
    switch (action.type) {
        case "UPDATE_TODO_ITEM_COMPLETED":
            const itemLens = todoItemLens(action.id);
            // View the current TodoItem
            const currentTodoItem = view(itemLens, currentState.byItemId);
            // Over the `completed` property of the TodoItem
            const updatedTodoItem = over(completedLens, () => action.completed, currentTodoItem);
            // Update the byItemId map
            const updatedByItemId = Object.assign(Object.assign({}, currentState.byItemId), { [action.id]: updatedTodoItem });
            // Return the new state with updated byItemId
            return set(byItemIdLens, currentState, updatedByItemId);
    }
    return currentState;
}
const initialState = {
    byItemId: {
        '1': { id: '1', title: 'Learn TypeScript', completed: false },
        '2': { id: '2', title: 'Build a project', completed: false },
    },
};
const action = {
    type: "UPDATE_TODO_ITEM_COMPLETED",
    id: '1',
    completed: true,
};
const newState = reduceState(initialState, action);
console.log(newState);
