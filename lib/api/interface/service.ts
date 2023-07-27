import { AuthHelper } from '../../auth/auth.helper';
import { Response } from './response';

export abstract class Service<T, K extends Response> {
  protected readonly BASE_URL = 'https://api.payrexx.com/v1.0';
  protected readonly instance: string;
  protected readonly authHelper: AuthHelper;

  constructor(instance: string, apiSecret: string) {
    this.instance = instance;
    this.authHelper = new AuthHelper(apiSecret);
  }

  abstract retrieve(id: number): Promise<K>;
  abstract create(request: T): Promise<K>;
  abstract remove(id: number): Promise<K>;

  handleResponse(result: K) {
    if (result.status === 'error') {
      throw new Error(result.message);
    } else {
      return result;
    }
  }
}
