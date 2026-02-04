class Database {
    private static instance: Database;

    constructor() {
        console.log('Database created');
    }
    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
    public runQuery(query: string) {
        console.log('Executing query: ', query);
    }
}   
const db = Database.getInstance();
db.runQuery('SELECT * FROM users');
db.runQuery('SELECT * FROM products');