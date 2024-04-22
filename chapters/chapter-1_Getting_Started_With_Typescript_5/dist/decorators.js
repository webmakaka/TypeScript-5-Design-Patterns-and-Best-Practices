import { __esDecorate, __runInitializers } from "tslib";
function memoize(originalMethod, _context) {
    let cache = new Map();
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = originalMethod.apply(this, args);
        cache.set(key, result);
        return result;
    };
}
let MyClass = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _addNumbers_decorators;
    return _a = class MyClass {
            addNumbers(x, y) {
                console.log(`Calculating ${x} + ${y}`);
                return x + y;
            }
            constructor() {
                __runInitializers(this, _instanceExtraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _addNumbers_decorators = [memoize];
            __esDecorate(_a, null, _addNumbers_decorators, { kind: "method", name: "addNumbers", static: false, private: false, access: { has: obj => "addNumbers" in obj, get: obj => obj.addNumbers }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
const myClass = new MyClass();
const result1 = myClass.addNumbers(2, 3);
console.log(result1); // Output: 5
const result2 = myClass.addNumbers(2, 3);
console.log(result2); // Output: 5
