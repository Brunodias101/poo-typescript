class user{
    constructor(
        public name: string,
        public age: number,
        public email: string,
        public password: string
    ) { }
}

class Manager extends user{
    constructor(
        public name: string,
        public age: number,
        public email: string,
        public password: string,
        public role: string = 'Manager'
    ) { super(name, age, email, password) }

    getRole(): void{
        console.log(`Role: ${this.role}`);
    }
}
class Admin extends user{}

const manager = new Manager('vinicius', 30, 'email', 'password');
console.log(manager);
manager.getRole();

const super_manager = new Manager('vinicius', 30, 'email', 'password', 'super_manager');
console.log(super_manager);
super_manager.getRole();