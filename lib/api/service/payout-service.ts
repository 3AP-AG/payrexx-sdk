import { Service } from '../interface/service';
import { PayoutResponse, PayoutsResponse } from '../types/payout';

export class PayoutService extends Service {
  constructor(instance: string, apiSecret: string) {
    super(instance, apiSecret, 'Payout');
  }

  /**
   * @returns Returns all payouts
   */
  async retrieveAll(): Promise<PayoutsResponse> {
    return this.get();
  }

  /**
   *
   * @param id The id of payout to be retrieved
   * @param withDetails Flag for fetching details
   * @returns Returns a payout
   */
  async retrieve(id: number, withDetails?: boolean): Promise<PayoutResponse> {
    return withDetails ? this.get(`${id}/details`) : this.get(`${id}`);
  }
}
