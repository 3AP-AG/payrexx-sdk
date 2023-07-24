import { AuthHelper } from '../../auth/auth.helper';

export abstract class Service<Request, Response> {
  protected readonly BASE_URL = 'https://api.payrexx.com/v1.0';
  protected readonly instance: string;
  protected readonly authHelper: AuthHelper;

  constructor(instance: string, apiSecret: string) {
    this.instance = instance;
    this.authHelper = new AuthHelper(apiSecret);
  }

  abstract retrieve(id: number): Promise<Response>;
  abstract create(params: Request): Promise<Response>;
  abstract remove(id: number): Promise<Response>;
}
