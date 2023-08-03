import { Service } from '../../interface/service';
import {
  PaymentMethodAllResponse,
  PaymentMethodRequest,
  PaymentMethodResponse,
} from '../types/payment-method';

export class PaymentMethodService extends Service {
  constructor(instance: string, apiSecret: string) {
    super(instance, apiSecret, 'PaymentMethod');
  }

  /**
   *
   * @param paymentMethodRequest Form data for filtering payment methods
   * @returns All Active Payment Methods
   */
  async retrieveAll(
    paymentMethodRequest?: PaymentMethodRequest,
  ): Promise<PaymentMethodAllResponse> {
    return paymentMethodRequest
      ? this.getWithData(paymentMethodRequest)
      : this.get();
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
