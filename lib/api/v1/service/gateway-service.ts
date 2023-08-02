import { Service } from '../../interface/service';
import { GatewayRequest, GatewayResponse } from '../types/gateway';

export class GatewayService extends Service<GatewayRequest, GatewayResponse> {
  constructor(instance: string, apiSecret: string) {
    super(instance, apiSecret, 'Gateway');
  }

  /**
   * Retrieve a gateway payment information
   * @param id The id of gateway payment
   * @returns Response from the Payrexx
   */
  async retrieve(id: number): Promise<GatewayResponse> {
    return this.get(`${id}`);
  }

  /**
   * Create a gateway payment
   * @param request Form data for creation of gateway payment
   * @returns Response from the Payrexx
   */
  async create(request: GatewayRequest): Promise<GatewayResponse> {
    return this.post(request);
  }

  /**
   * Delete a gateway payment
   * @param id The id of gateway payment
   * @returns Response from the Payrexx
   */
  async remove(id: number): Promise<GatewayResponse> {
    return this.delete(`${id}`);
  }
}
