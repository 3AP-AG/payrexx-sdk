import axios from 'axios';
import { Service } from '../../interface/service';
import { PaylinkRequest, PaylinkResponse } from '../types/paylink';

export class PaylinkService extends Service<PaylinkRequest, PaylinkResponse> {
  constructor(instance: string, apiSecret: string) {
    super(instance, apiSecret);
  }

  async retrieve(id: number): Promise<PaylinkResponse> {
    const signature = this.authHelper.buildSiganture();
    const url = `${this.BASE_URL}/Invoice/${id}/?instance=${this.instance}&ApiSignature=${signature}`;
    const result = await axios.get(url);

    return result.data;
  }

  async create(params: PaylinkRequest): Promise<PaylinkResponse> {
    const url = `${this.BASE_URL}/Invoice/?instance=${this.instance}`;
    const result = await axios.post(
      url,
      this.authHelper.buildPayloadWithSignature(params),
    );

    if (result.data.status === 'error') {
      // payrexx answers with 200 but error status and message on link creation failure
      throw new Error(result.data.message);
    } else {
      return result.data as PaylinkResponse;
    }
  }

  async remove(id: number): Promise<PaylinkResponse> {
    const url = `${this.BASE_URL}/Invoice/${id}/?instance=${this.instance}`;
    const result = await axios.request({
      url: url,
      data: this.authHelper.buildPayloadWithSignature(''),
      method: 'DELETE',
    });

    return result.data;
  }
}
