class User{
    constructor(
        private name: string,
        private age: number,
        private address: Address
    ){
        console.log(`User ${this.name} created eith age ${this.age}`);
        console.log(`Address: ${this.address.streetAdress}, ${this.address.cityAdress}`);
    }
}

class Address{
    constructor(
        private street: string,
        private city: string,
        private number?: number
    ){
        console.log(`Address created: ${this.street}, ${this.city}, ${this.number}`);
    }

    get streetAdress(): string{
        return this.street;
    }

    get cityAdress(): string{
        return this.city;
    }
}

const address = new Address('Main Street', 'New York');
new User('John doe',30,address);