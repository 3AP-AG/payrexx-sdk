import { Service } from '../../interface/service';
import { PayoutResponse, PayoutsResponse } from '../types/payout';

export class PayoutService extends Service {
  constructor(instance: string, apiSecret: string) {
    super(instance, apiSecret, 'Payout');
  }

  async retrieveAll(): Promise<PayoutsResponse> {
    return this.get();
  }

  async retrieve(id: number, withDetails?: boolean): Promise<PayoutResponse> {
    return withDetails ? this.get(`${id}/details`) : this.get(`${id}`);
  }
}
