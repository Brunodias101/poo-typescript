class user {
    constructor(
        public name: string,
        public age: number
    ) { }

    getReportEmployee(): void {
        console.log(`Name: ${this.name} getReportsEmployee`);
    }

}

class Manager extends user {}
class Employee extends user {
    getReportEmployee(): void {
        console.log(`${this.name} is an employee and getReportsEmployee`);
    }
}

class Admin extends user {
    getReportsAdmin(): void {
        console.log(`Name: ${this.name} getReportsAdmin`);
    }
}

const manager = new Manager('vinicius', 30);
manager.getReportEmployee();

const admin = new Admin('vinicius', 30);
admin.getReportEmployee();
admin.getReportsAdmin();

const employee = new Employee('vinicius', 30);
employee.getReportEmployee();