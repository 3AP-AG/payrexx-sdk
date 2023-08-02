import { GatewayService } from './service/gateway-service';
import { PaylinkService } from './service/paylink-service';
import { QrCodeService } from './service/qrcode-service';

export default class Api {
  public readonly paylink: PaylinkService;
  public readonly gateway: GatewayService;
  public readonly qrcode: QrCodeService;

  constructor(instance: string, apiSecret: string) {
    this.paylink = new PaylinkService(instance, apiSecret);
    this.gateway = new GatewayService(instance, apiSecret);
    this.qrcode = new QrCodeService(instance, apiSecret);
  }
}
