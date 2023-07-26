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

    return (await response.json()) as PaylinkResponse;
  }

  async create(params: PaylinkRequest): Promise<PaylinkResponse> {
    const url = `${this.BASE_URL}/Invoice/?instance=${this.instance}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: this.authHelper.buildPayloadWithSignature(params),
    });

    const result: PaylinkResponse = await response.json();

    if (result.status === 'error') {
      // payrexx answers with 200 but error status and message on link creation failure
      throw new Error(result.message);
    } else {
      return result;
    }
  }

  async remove(id: number): Promise<PaylinkResponse> {
    const url = `${this.BASE_URL}/Invoice/${id}/?instance=${this.instance}`;
    const response = await fetch(url, {
      method: 'DELETE',
      body: this.authHelper.buildPayloadWithSignature(''),
    });

    return (await response.json()) as PaylinkResponse;
  }
}
