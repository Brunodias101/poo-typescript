class user{
    constructor(
        private _name: string,
        private _age: number
    ) { }

    /*get getName(): string{ return this.name; }
    get getAge(): number{ return this.age; }
    set setName(name: string){ this.name = name; }
    set setAge(age: number){ this.age = age; } */

    get name(): string{ return this._name; }
    get age(): number{ return this._age; }
    set name(name: string){ this._name = name; }
    set age(age: number){ this._age = age; }
}

const user1 = new user('Fernando', 30);
console.log(user1.name);

user1.name = 'maria';
console.log(user1.name);