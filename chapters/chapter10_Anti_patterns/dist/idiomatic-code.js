"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, department) {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "department", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = id || "";
        this.name = name || "";
        this.department = department || "";
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getDepartment() {
        return this.department;
    }
    setDepartment(department) {
        this.department = department;
    }
}
// Usage
const emp = new Employee();
emp.setId("1");
emp.setName("John Doe");
emp.setDepartment("IT");
console.log(emp.getName()); // John Doe
function createEmployee(id, name, department) {
    return { id, name, department };
}
function updateEmployee(employee, updates) {
    return Object.assign(Object.assign({}, employee), updates);
}
// Usage
const emp2 = createEmployee('1', 'John Doe', 'IT');
console.log(emp2.name); // John Doe
const updatedEmp = updateEmployee(emp2, { department: 'HR' });
console.log(updatedEmp.department); // HR
