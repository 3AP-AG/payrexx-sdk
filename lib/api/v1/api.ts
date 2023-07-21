import { PaylinkService } from "./service/paylink-service";

export default class Api {
  public readonly paylink: PaylinkService;

  constructor(instance: string, apiSecret: string) {
    this.paylink = new PaylinkService(instance, apiSecret);
  }
}
