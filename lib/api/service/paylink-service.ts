import { Service } from '../interface/service';
import { PaylinkRequest, PaylinkResponse } from '../types/paylink';

export class PaylinkService extends Service {
  constructor(instance: string, apiSecret: string) {
    super(instance, apiSecret, 'Invoice');
  }

  /**
   * Retrieve a paylink payment information
   * @param id The id of paylink payment
   * @returns Response from the Payrexx
   */
  async retrieve(id: number): Promise<PaylinkResponse> {
    return this.get(`${id}`);
  }

  /**
   * Create a paylink payment
   * @param request Form data for creation of paylink payment
   * @returns Response from the Payrexx
   */
  async create(request: PaylinkRequest): Promise<PaylinkResponse> {
    return this.post(request);
  }

  /**
   * Delete a paylink payment
   * @param id The id of paylink payment
   * @returns Response from the Payrexx
   */
  async remove(id: number): Promise<PaylinkResponse> {
    return this.delete(`${id}`);
  }
}
