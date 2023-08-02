import { beforeEach, describe, expect, test } from 'vitest';
import { PayrexxClient, QrCodeRequest } from '../lib';

// UNABLE TO TEST QR CODE ATM, TWINT IS NOT ENABLED ON THE PAYREXX

describe('QR code', () => {
  let client: PayrexxClient;

  beforeEach(() => {
    client = new PayrexxClient('INSTANCE', 'SECRET');
  });

  test.skip('test create', async () => {
    const request = new QrCodeRequest('https://3ap.ch/en');
    const result = await client.api.qrCode.create(request);

    console.log('RESULT', result);
    expect(result.status).toEqual('success');
  });
});
