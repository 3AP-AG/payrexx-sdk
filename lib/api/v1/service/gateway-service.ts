import { Service } from '../../interface/service';
import { GatewayRequest, GatewayResponse } from '../types/gateway';

export class GatewayService extends Service<GatewayRequest, GatewayResponse> {
  constructor(instance: string, apiSecret: string) {
    super(instance, apiSecret);
  }

  async retrieve(id: number): Promise<GatewayResponse> {
    const signature = this.authHelper.buildSiganture();
    const url = `${this.BASE_URL}/Gateway/${id}/?instance=${this.instance}&ApiSignature=${signature}`;
    const response = await fetch(url);

    return (await response.json()) as GatewayResponse;
  }

  async create(params: GatewayRequest): Promise<GatewayResponse> {
    const url = `${this.BASE_URL}/Gateway/?instance=${this.instance}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: this.authHelper.buildPayloadWithSignature(params),
    });

    const result: GatewayResponse = await response.json();

    if (result.status === 'error') {
      throw new Error(result.message);
    } else {
      return result;
    }
  }

  async remove(id: number): Promise<GatewayResponse> {
    const url = `${this.BASE_URL}/Gateway/${id}/?instance=${this.instance}`;
    const response = await fetch(url, {
      method: 'DELETE',
      body: this.authHelper.buildPayloadWithSignature(''),
    });

    return (await response.json()) as GatewayResponse;
  }
}
