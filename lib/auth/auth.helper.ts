import { createHmac } from 'node:crypto';
import QueryString from 'qs';

export class AuthHelper {
  constructor(private readonly apiSecret: string) {}

  buildSignature() {
    return createHmac('sha256', this.apiSecret).update('').digest('base64');
  }

  buildPayloadWithSignature(params: any) {
    const queryStr = QueryString.stringify(params, { format: 'RFC1738' })
      .replace(/!/g, '%21')
      .replace(/'/g, '%27')
      .replace(/\(/g, '%28')
      .replace(/\)/g, '%29')
      .replace(/\*/g, '%2A');
    const signature = createHmac('sha256', this.apiSecret)
      .update(queryStr)
      .digest('base64');

    return QueryString.stringify({ ...params, ApiSignature: signature });
  }
}
