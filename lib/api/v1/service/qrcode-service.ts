import { Service } from '../../interface/service';
import { QrCodeRequest, QrCodeResponse } from '../types/qrcode';

export class QrCodeService extends Service<QrCodeRequest, QrCodeResponse> {
  constructor(instance: string, apiSecret: string) {
    super(instance, apiSecret);
  }

  async retrieve(id: number): Promise<QrCodeResponse> {
    const signature = this.authHelper.buildSiganture();
    const url = `${this.BASE_URL}/QrCode/${id}/?instance=${this.instance}&ApiSignature=${signature}`;
    const response = await fetch(url);

    const result: QrCodeResponse = await response.json();

    return this.handleResponse(result);
  }

  async create(request: QrCodeRequest): Promise<QrCodeResponse> {
    const url = `${this.BASE_URL}/QrCode/?instance=${this.instance}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: this.authHelper.buildPayloadWithSignature(request),
    });

    const result: QrCodeResponse = await response.json();

    return this.handleResponse(result);
  }

  async remove(id: number): Promise<QrCodeResponse> {
    const url = `${this.BASE_URL}/QrCode/${id}/?instance=${this.instance}`;
    const response = await fetch(url, {
      method: 'DELETE',
      body: this.authHelper.buildPayloadWithSignature(''),
    });

    const result: QrCodeResponse = await response.json();

    return this.handleResponse(result);
  }

  async removeScan(sessionId: string): Promise<QrCodeResponse> {
    const url = `${this.BASE_URL}/QrCode/?instance=${this.instance}`;
    const response = await fetch(url, {
      method: 'DELETE',
      body: this.authHelper.buildPayloadWithSignature({
        sessionId,
      }),
    });

    const result: QrCodeResponse = await response.json();

    return this.handleResponse(result);
  }
}
