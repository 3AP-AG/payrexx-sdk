import { Service } from '../../interface/service';
import { PaylinkRequest, PaylinkResponse } from '../types/paylink';

export class PaylinkService extends Service<PaylinkRequest, PaylinkResponse> {
  constructor(instance: string, apiSecret: string) {
    super(instance, apiSecret);
  }

  async retrieve(id: number): Promise<PaylinkResponse> {
    const signature = this.authHelper.buildSiganture();
    const url = `${this.BASE_URL}/Invoice/${id}/?instance=${this.instance}&ApiSignature=${signature}`;
    const response = await fetch(url);

    const result: PaylinkResponse = await response.json();

    return this.handleResponse(result);
  }

  async create(request: PaylinkRequest): Promise<PaylinkResponse> {
    const url = `${this.BASE_URL}/Invoice/?instance=${this.instance}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: this.authHelper.buildPayloadWithSignature(request),
    });

    const result: PaylinkResponse = await response.json();

    return this.handleResponse(result);
  }

  async remove(id: number): Promise<PaylinkResponse> {
    const url = `${this.BASE_URL}/Invoice/${id}/?instance=${this.instance}`;
    const response = await fetch(url, {
      method: 'DELETE',
      body: this.authHelper.buildPayloadWithSignature(''),
    });

    const result: PaylinkResponse = await response.json();

    return this.handleResponse(result);
  }
}
