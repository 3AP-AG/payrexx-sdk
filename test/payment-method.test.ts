import { beforeEach, describe, expect, test } from 'vitest';
import {
  PaymentMethodAllResponse,
  PaymentMethodResponse,
  PayrexxClient,
} from '../lib';
import clientConfig from './client-config';

// THESE TEST ARE TO BE EXECUTED LOCALLY ONLY

describe('Payment method', () => {
  let client: PayrexxClient;

  beforeEach(() => {
    client = new PayrexxClient(clientConfig.instance, clientConfig.secret);
  });

  test.skip('test get visa', async () => {
    const result: PaymentMethodResponse =
      await client.api.paymentMethod.retrieve('visa');

    console.log('RESULT', result);
    console.log('RESULT options_by_psp', result.data.options_by_psp);
    expect(result.status).toEqual('success');
  });

  test.skip('test get all', async () => {
    console.log('INSTANCE', process.env.INSTANCE);
    const result: PaymentMethodAllResponse =
      await client.api.paymentMethod.retrieveAll();
    console.log('RESULT', result);
    console.log('RESULT options_by_psp', result.data[0].options_by_psp);
    expect(result.status).toEqual('success');
  });
});
