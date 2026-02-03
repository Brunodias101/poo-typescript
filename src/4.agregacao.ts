class user {
    constructor(
        private name: string,
        private age: number,
        private adress: Address[]
    ) { }

    showAdress(): void {
        this.adress.forEach(adress => {
            console.log(adress.street, adress.number);
        })
    }
}

class Address {
    constructor(public street: string, public number?: number) { }
}

const user1 = new user('John Doe', 30, [new Address('Main Street', 123), new Address('Second Street', 456)]);

user1.showAdress();