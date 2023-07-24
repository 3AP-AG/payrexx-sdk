import Api from "./v1/api";

export class PayrexxClient {
  public readonly apiV1: Api;

  constructor(instance: string, apiSecret: string) {
    this.apiV1 = new Api(instance, apiSecret);
  }
}
