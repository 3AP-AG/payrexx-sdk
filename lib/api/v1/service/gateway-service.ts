import { Service } from '../../interface/service';
import { GatewayRequest, GatewayResponse } from '../types/gateway';

export class GatewayService extends Service<GatewayRequest, GatewayResponse> {
  constructor(instance: string, apiSecret: string) {
    super(instance, apiSecret, 'Gateway');
  }

  async retrieve(id: number): Promise<GatewayResponse> {
    return this.get(`${id}`);
  }

  async create(request: GatewayRequest): Promise<GatewayResponse> {
    return this.post(request);
  }

  async remove(id: number): Promise<GatewayResponse> {
    return this.delete(`${id}`);
  }
}
