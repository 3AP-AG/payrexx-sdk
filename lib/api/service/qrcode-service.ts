import { Service } from '../interface/service';
import { QrCodeRequest, QrCodeResponse } from '../types/qrcode';

export class QrCodeService extends Service {
  constructor(instance: string, apiSecret: string) {
    super(instance, apiSecret, 'QrCode');
  }

  /**
   * Retrieve a QR code information
   * @param id The id of QR code
   * @returns Response from the Payrexx
   */
  async retrieve(id: number): Promise<QrCodeResponse> {
    return this.get(`${id}`);
  }

  /**
   * Create a QR code
   * @param request Form data for creation of QR code
   * @returns Response from the Payrexx
   */
  async create(request: QrCodeRequest): Promise<QrCodeResponse> {
    return this.post(request);
  }

  /**
   * Delete a QR code
   * @param id The id of QR code
   * @returns Response from the Payrexx
   */
  async remove(id: number): Promise<QrCodeResponse> {
    return this.delete(`${id}`);
  }

  /**
   * Delete a QR code scan
   * @param sessionId The sessionId of the qr code scan to delete
   * @returns QrCodeResponse
   */
  async removeScan(sessionId: string): Promise<QrCodeResponse> {
    return this.deleteWithData({ sessionId });
  }
}
