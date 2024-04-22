const one = "one";
const two = false;
const three = 3;
const four = null;
const five = 5;
const six = 6;
const seven = Symbol("seven");
// 'never' is typically used for functions that don't return anything (void) or throw an error.
function neverReturningFunction() {
    throw new Error("This function never returns");
}
neverReturningFunction();
export {};
// let eight: never; // This wouldn't work as you can't assign a value to 'never'.
