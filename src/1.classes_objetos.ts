class User{
    name: string;
    age: number;

    constructor(name: string, age: number){
       
        this.name= name;
        this.age = age;
        console.log(`User ${this.name} created eith age ${this.age}`);
    }
}

const user1 = new User("Vinicius",16);
const user2 = new User("Maria",20);