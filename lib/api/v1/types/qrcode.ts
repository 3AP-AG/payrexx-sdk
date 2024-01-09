import { Response } from '../../interface/response';

interface QrCodeResponse extends Response {
  data: QrCodeData;
}

type QrCodeData = {
  uuid: string;
  webshopUrl: string;
  png: string;
  svg: string;
  sessionId: string;
};

class QrCodeRequest {
  /**
   * Create a QR Code request
   * @param webshopUrl An URL where the your customer has to be redirected when they scanned your QR Code.
   */
  constructor(private webshopUrl: string) {}

  public getWebshopUrl() {
    return this.webshopUrl;
  }
}

export { QrCodeRequest };
export type { QrCodeResponse };
