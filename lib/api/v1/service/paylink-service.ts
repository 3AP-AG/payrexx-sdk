import { IPaylinkService } from "../../interface";

export class PaylinkService implements IPaylinkService {
  private readonly instance: string;
  private readonly apiSecret: string;

  constructor(instance: string, apiSecret: string) {
    this.instance = instance;
    this.apiSecret = apiSecret;
  }

  retrieve(): any {
    return "";
  }

  create(): any {
    return "";
  }

  remove(): any {
    return "";
  }
}
