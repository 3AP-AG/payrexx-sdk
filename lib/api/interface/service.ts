import { AuthHelper } from '../../auth/auth.helper';
import { Response } from './response';

export abstract class Service {
  protected readonly baseUrl: string;
  protected readonly instance: string;
  protected readonly authHelper: AuthHelper;

  constructor(instance: string, apiSecret: string, endpoint: string) {
    this.instance = instance;
    this.authHelper = new AuthHelper(apiSecret);
    this.baseUrl = `https://api.payrexx.com/v1.0/${endpoint}`;
  }

  protected async get<T extends Response>(path?: string): Promise<T> {
    let url: string;
    const signature = this.authHelper.buildSignature();

    if (path) {
      url = `${this.baseUrl}/${path}/?instance=${this.instance}&ApiSignature=${signature}`;
    } else {
      url = `${this.baseUrl}/?instance=${this.instance}&ApiSignature=${signature}`;
    }

    const response = await fetch(url);

    const result: T = await response.json();

    return this.handleResponse(result);
  }

  protected async post<T, R extends Response>(
    request: T,
    path?: string,
  ): Promise<R> {
    let url: string;

    if (path) {
      url = `${this.baseUrl}/${path}/?instance=${this.instance}`;
    } else {
      url = `${this.baseUrl}/?instance=${this.instance}`;
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: this.authHelper.buildPayloadWithSignature(request),
    });

    const result: R = await response.json();

    return this.handleResponse(result);
  }

  protected async delete<T extends Response>(path: string): Promise<T> {
    const url = `${this.baseUrl}/${path}/?instance=${this.instance}`;
    const response = await fetch(url, {
      method: 'DELETE',
      body: this.authHelper.buildPayloadWithSignature(''),
    });

    const result: T = await response.json();

    return this.handleResponse(result);
  }

  protected async deleteWithData<T extends Response>(data: any): Promise<T> {
    const url = `${this.baseUrl}/?instance=${this.instance}`;
    const response = await fetch(url, {
      method: 'DELETE',
      body: this.authHelper.buildPayloadWithSignature(data),
    });

    const result: T = await response.json();

    return this.handleResponse(result);
  }

  protected handleResponse<T extends Response>(result: T) {
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
