class User{
    private name: string;
    private age: number; //public, private, protected

    constructor(name: string, age: number){
        if (age <= 0 || age >= 120){
            throw new Error('Invalid age');
        }

        this.name= name;
        this.age = age;
        console.log(`User ${this.name} created eith age ${this.age}`);
    }

    changeAge(newAge: number):void{
        if (newAge <= 0 || newAge >= 120){
            throw new Error('Invalid age');
        }
        this.age = newAge;
    }
}

const user1 = new User("Vinicius",16);
console.log(user1);
user1.changeAge(34);
console.log(user1);