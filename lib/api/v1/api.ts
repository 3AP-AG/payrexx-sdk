import { GatewayService } from './service/gateway-service';
import { PaylinkService } from './service/paylink-service';

export default class Api {
  public readonly paylink: PaylinkService;
  public readonly gateway: GatewayService;

  constructor(instance: string, apiSecret: string) {
    this.paylink = new PaylinkService(instance, apiSecret);
    this.gateway = new GatewayService(instance, apiSecret);
  }
}
