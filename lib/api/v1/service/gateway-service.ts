import { Service } from '../../interface/service';
import { GatewayRequest, GatewayResponse } from '../types/gateway';

// THESE TEST ARE TO BE EXECUTED LOCALLY ONLY

export class GatewayService extends Service<GatewayRequest, GatewayResponse> {
  constructor(instance: string, apiSecret: string) {
    super(instance, apiSecret);
  }

  async retrieve(id: number): Promise<GatewayResponse> {
    const signature = this.authHelper.buildSiganture();
    const url = `${this.BASE_URL}/Gateway/${id}/?instance=${this.instance}&ApiSignature=${signature}`;
    const response = await fetch(url);

    const result: GatewayResponse = await response.json();

    return this.handleResponse(result);
  }

  async create(request: GatewayRequest): Promise<GatewayResponse> {
    const url = `${this.BASE_URL}/Gateway/?instance=${this.instance}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: this.authHelper.buildPayloadWithSignature(request),
    });

    const result: GatewayResponse = await response.json();

    return this.handleResponse(result);
  }

  async remove(id: number): Promise<GatewayResponse> {
    const url = `${this.BASE_URL}/Gateway/${id}/?instance=${this.instance}`;
    const response = await fetch(url, {
      method: 'DELETE',
      body: this.authHelper.buildPayloadWithSignature(''),
    });

    const result: GatewayResponse = await response.json();

    return this.handleResponse(result);
  }
}
