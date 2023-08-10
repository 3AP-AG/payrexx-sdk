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
  private webshopUrl: string;

  /**
   * Create a QR Code request
   * @param webshopUrl An URL where the your customer has to be redirected when they scanned your QR Code.
   */
  constructor(webshopUrl: string) {
    this.webshopUrl = webshopUrl;
  }

  public getWebshopUrl() {
    return this.webshopUrl;
  }
}

export { QrCodeRequest };
export type { QrCodeResponse };
