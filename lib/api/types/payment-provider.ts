import { Response } from '../interface/response';

interface PaymentProviderResponse extends Response {
  data: PaymentProvider[];
}

type PaymentProvider = {
  id: number;
  name: string;
  paymentMethods: string[];
  activePaymentMethods: string[];
};

export type { PaymentProviderResponse };
