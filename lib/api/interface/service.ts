import { AuthHelper } from '../../auth/auth.helper';
import { Response } from './response';

export abstract class Service<T, K extends Response> {
  protected readonly baseUrl: string;
  protected readonly instance: string;
  protected readonly authHelper: AuthHelper;

  constructor(instance: string, apiSecret: string, endpoint: string) {
    this.instance = instance;
    this.authHelper = new AuthHelper(apiSecret);
    this.baseUrl = `https://api.payrexx.com/v1.0/${endpoint}`;
  }

  protected async get(path: string): Promise<K> {
    const signature = this.authHelper.buildSiganture();
    const url = `${this.baseUrl}/${path}/?instance=${this.instance}&ApiSignature=${signature}`;
    const response = await fetch(url);

    const result: K = await response.json();

    return this.handleResponse(result);
  }

  protected async post(request: T): Promise<K> {
    const url = `${this.baseUrl}/?instance=${this.instance}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: this.authHelper.buildPayloadWithSignature(request),
    });

    const result: K = await response.json();

    return this.handleResponse(result);
  }

  protected async delete(path: string): Promise<K> {
    const url = `${this.baseUrl}/${path}/?instance=${this.instance}`;
    const response = await fetch(url, {
      method: 'DELETE',
      body: this.authHelper.buildPayloadWithSignature(''),
    });

    const result: K = await response.json();

    return this.handleResponse(result);
  }

  protected async deleteWithData(data: any): Promise<K> {
    const url = `${this.baseUrl}/?instance=${this.instance}`;
    const response = await fetch(url, {
      method: 'DELETE',
      body: this.authHelper.buildPayloadWithSignature(data),
    });

    const result: K = await response.json();

    return this.handleResponse(result);
  }

  protected handleResponse(result: K) {
    if (result.status === 'error') {
      throw new Error(
        result.message ||
          'Something went wrong with the API call! \n Error message from the Payrexx is unavailable',
      );
    } else {
      return result;
    }
  }
}
