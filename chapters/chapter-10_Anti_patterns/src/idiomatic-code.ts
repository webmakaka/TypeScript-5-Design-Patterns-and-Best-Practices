class Employee {
  private id: string
  private name: string
  private department: string

  constructor()
  constructor(id: string, name: string, department: string)
  constructor(id?: string, name?: string, department?: string) {
    this.id = id || ""
    this.name = name || ""
    this.department = department || ""
  }

  public getId(): string {
    return this.id
  }

  public setId(id: string): void {
    this.id = id
  }

  public getName(): string {
    return this.name
  }

  public setName(name: string): void {
    this.name = name
  }

  public getDepartment(): string {
    return this.department
  }

  public setDepartment(department: string): void {
    this.department = department
  }
}

// Usage
const emp = new Employee()
emp.setId("1")
emp.setName("John Doe")
emp.setDepartment("IT")
console.log(emp.getName()) // John Doe

interface Employee2 {
    readonly id: string;
    readonly name: string;
    readonly department: string;
}

function createEmployee(id: string, name: string, department: string): Employee2 {
    return { id, name, department };
}

function updateEmployee(employee: Employee2, updates: Partial<Employee2>): Employee2 {
    return { ...employee, ...updates };
}

// Usage
const emp2 = createEmployee('1', 'John Doe', 'IT');
console.log(emp2.name); // John Doe

const updatedEmp = updateEmployee(emp2, { department: 'HR' });
console.log(updatedEmp.department); // HR
