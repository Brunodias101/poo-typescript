interface ProcessPaymentInterface {
    taxRate: number;
    startProcessPayment(amount: number): Promise<string>;
    confirmPayment(paymentId: string): Promise<boolean>;
    cancelPayment(paymentId: string): Promise<boolean>;
    getPaymentStatus(paymentId: string): Promise<string>;  
}

class pixPayment implements ProcessPaymentInterface {
    taxRate = 1;
    async startProcessPayment(amount: number): Promise<string> {
        return Promise.resolve('Payment started');
    }
    confirmPayment(paymentId: string): Promise<boolean> {
        return Promise.resolve(true);
    }
    cancelPayment(paymentId: string): Promise<boolean> {
        return Promise.resolve(true);
    }
    getPaymentStatus(paymentId: string): Promise<string> {
        return Promise.resolve('Payment confirmed');
    }
}

class MercadoPagoPayment {
    taxRate = 1;
    async startProcessPayment(amount: number): Promise<string> {
        return Promise.resolve('Payment started');
    }
    confirmPayment(paymentId: string): Promise<boolean> {
        return Promise.resolve(true);
    }
    cancelPayment(paymentId: string): Promise<boolean> {
        return Promise.resolve(true);
    }
    getPaymentStatus(paymentId: string): Promise<string> {
        return Promise.resolve('Payment confirmed');
    }
}

const processPayment = async (payment: ProcessPaymentInterface) => {
    const paymentId = await payment.startProcessPayment(100);
    console.log(`Payment started with id: ${paymentId}`);
    const status = await payment.getPaymentStatus(paymentId);
    console.log(`Payment status: ${status}`);
}

const pix = new pixPayment();
const mercadoPago = new MercadoPagoPayment();

processPayment(pix);
processPayment(mercadoPago);
