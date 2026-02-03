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