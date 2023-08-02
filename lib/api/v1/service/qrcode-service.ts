import { Service } from '../../interface/service';
import { QrCodeRequest, QrCodeResponse } from '../types/qrcode';

export class QrCodeService extends Service<QrCodeRequest, QrCodeResponse> {
  constructor(instance: string, apiSecret: string) {
    super(instance, apiSecret, 'QrCode');
  }

  async retrieve(id: number): Promise<QrCodeResponse> {
    return this.get(`${id}`);
  }

  async create(request: QrCodeRequest): Promise<QrCodeResponse> {
    return this.post(request);
  }

  async remove(id: number): Promise<QrCodeResponse> {
    return this.delete(`${id}`);
  }

  /**
   * Delete a QR Code Scan
   * @param sessionId The sessionId of the qr code scan to delete
   * @returns QrCodeResponse
   */
  async removeScan(sessionId: string): Promise<QrCodeResponse> {
    return this.deleteWithData({ sessionId });
  }
}
