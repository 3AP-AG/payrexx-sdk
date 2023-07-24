import { HmacSHA256 } from 'crypto-js';
import Base64 from 'crypto-js/enc-base64';
import QueryString from 'qs';

export class AuthHelper {
  private readonly apiSecret: string;
  constructor(apiSecret: string) {
    this.apiSecret = apiSecret;
  }

  buildSiganture() {
    return Base64.stringify(HmacSHA256('', this.apiSecret));
  }

  buildPayloadWithSignature(params: any) {
    const queryStr = QueryString.stringify(params, { format: 'RFC1738' })
      .replace(/!/g, '%21')
      .replace(/'/g, '%27')
      .replace(/\(/g, '%28')
      .replace(/\)/g, '%29')
      .replace(/\*/g, '%2A');
    const signature = Base64.stringify(HmacSHA256(queryStr, this.apiSecret));

    return QueryString.stringify({ ...params, ApiSignature: signature });
  }
}
