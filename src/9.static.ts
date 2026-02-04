class User{
    public static count: number = 0;
    constructor(public name: string){}
    static increment(){
        this.count++;
    }
    }

    const fernando = new User('Fernando');
    User.increment();
    console.log(User.count);