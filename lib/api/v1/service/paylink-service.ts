import { Service } from '../../interface/service';
import { PaylinkRequest, PaylinkResponse } from '../types/paylink';

export class PaylinkService extends Service<PaylinkRequest, PaylinkResponse> {
  constructor(instance: string, apiSecret: string) {
    super(instance, apiSecret, 'Invoice');
  }

  async retrieve(id: number): Promise<PaylinkResponse> {
    return this.get(`${id}`);
  }

  async create(request: PaylinkRequest): Promise<PaylinkResponse> {
    return this.post(request);
  }

  async remove(id: number): Promise<PaylinkResponse> {
    return this.delete(`${id}`);
  }
}
