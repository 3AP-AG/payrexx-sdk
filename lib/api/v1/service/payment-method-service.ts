import { Service } from '../../interface/service';
import {
  PaymentMethodAllResponse,
  PaymentMethodResponse,
} from '../types/payment-method';

export class PaymentMethodService extends Service {
  constructor(instance: string, apiSecret: string) {
    super(instance, apiSecret, 'PaymentMethod');
  }

  /**
   *
   * @returns All Active Payment Methods
   */
  async retrieveAll(): Promise<PaymentMethodAllResponse> {
    return this.get();
  }

  /**
   *
   * @param paymentMethod The id of the payment method (e.g. "twint" or "mastercard")
   * @returns One Payment Method
   */
  async retrieve(paymentMethod: string): Promise<PaymentMethodResponse> {
    return this.get(paymentMethod);
  }
}
