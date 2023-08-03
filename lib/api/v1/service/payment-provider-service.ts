import { Service } from '../../interface/service';
import { PaymentProviderResponse } from '../types/payment-provider';

export class PaymentProviderService extends Service {
  constructor(instance: string, apiSecret: string) {
    super(instance, apiSecret, 'PaymentProvider');
  }
  /**
   *
   * @returns All Payment Providers
   */
  async retrieveAll(): Promise<PaymentProviderResponse> {
    return this.get();
  }
}
