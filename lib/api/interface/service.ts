import axios from 'axios';
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
    const signature = this.authHelper.buildSiganture();

    if (path) {
      url = `${this.baseUrl}/${path}/?instance=${this.instance}&ApiSignature=${signature}`;
    } else {
      url = `${this.baseUrl}/?instance=${this.instance}&ApiSignature=${signature}`;
    }

    const response = await axios.get(url);

    const result: T = await response.data;

    return this.handleResponse(result);
  }

  protected async getWithData<T, R extends Response>(request: T): Promise<R> {
    const signature = this.authHelper.buildSiganture();
    const url = `${this.baseUrl}/?instance=${this.instance}&ApiSignature=${signature}`;

    const response = await axios.request({
      method: 'GET',
      url: url,
      data: this.authHelper.buildPayloadWithSignature(request),
      headers: {
        accept: 'application/json',
        'content-type': 'application/x-www-form-urlencoded',
      },
    });

    const result: R = await response.data;

    return this.handleResponse(result);
  }

  protected async post<T, R extends Response>(request: T): Promise<R> {
    const url = `${this.baseUrl}/?instance=${this.instance}`;
    const response = await axios.post(
      url,
      this.authHelper.buildPayloadWithSignature(request),
      {
        headers: {
          accept: 'application/json',
          'content-type': 'application/x-www-form-urlencoded',
        },
      },
    );

    const result: R = await response.data;

    return this.handleResponse(result);
  }

  protected async delete<T extends Response>(path: string): Promise<T> {
    const url = `${this.baseUrl}/${path}/?instance=${this.instance}`;
    const response = await axios.request({
      url: url,
      method: 'DELETE',
      data: this.authHelper.buildPayloadWithSignature(''),
      headers: {
        accept: 'application/json',
        'content-type': 'application/x-www-form-urlencoded',
      },
    });

    const result: T = await response.data;

    return this.handleResponse(result);
  }

  protected async deleteWithData<T extends Response>(data: any): Promise<T> {
    const url = `${this.baseUrl}/?instance=${this.instance}`;
    const response = await axios.request({
      url: url,
      method: 'DELETE',
      data: this.authHelper.buildPayloadWithSignature(data),
      headers: {
        accept: 'application/json',
        'content-type': 'application/x-www-form-urlencoded',
      },
    });

    const result: T = await response.data;

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
