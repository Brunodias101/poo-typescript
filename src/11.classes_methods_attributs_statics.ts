abstract class payment {
    protected abstract tax: number;
    constructor(
        public amount: number,
        public date: Date,
        public description: string
    ) { }

    getPaymentInfo(): string {
        return `Payment of ${this.amount} on ${this.date} for ${this.description}`;
    }

    processPayment(): void {
        const newAmount = this.amount + this.amount * this.tax;
        console.log(`Processing payment of ${this.amount} -> ${newAmount} tax: ${this.tax}`);
    }
}

class PaymentPix extends payment{
    tax = 0.1;
}
class PaymentCreditCard extends payment{
    tax = 0.05;
}
class PaymentDebitCard extends payment{
    tax = 0.02;
}

const pixPayment = new PaymentPix(100, new Date(), 'Product A');
pixPayment.processPayment();
const creditCardPayment = new PaymentCreditCard(200, new Date(), 'Product B');
const debitCardPayment = new PaymentDebitCard(300, new Date(), 'Product C');