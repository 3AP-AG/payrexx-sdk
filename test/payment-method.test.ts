import { beforeEach, describe, expect, test } from 'vitest';
import {
  PaymentMethodAllResponse,
  PaymentMethodResponse,
  PayrexxClient,
} from '../lib';

// THESE TEST ARE TO BE EXECUTED LOCALLY ONLY

describe('Payment method', () => {
  let client: PayrexxClient;

  beforeEach(() => {
    client = new PayrexxClient('3ap-test', 'cb3qqgqaDkTtP5ZO8pPvi6VkrReBka');
  });

  test.skip('test get visa', async () => {
    const result: PaymentMethodResponse =
      await client.api.paymentMethod.retrieve('visa');

    console.log('RESULT', result);
    console.log('RESULT options_by_psp', result.data.options_by_psp);
    expect(result.status).toEqual('success');
  });

  test('test get all', async () => {
    const result: PaymentMethodAllResponse =
      await client.api.paymentMethod.retrieveAll();
    console.log('RESULT', result);
    console.log('RESULT options_by_psp', result.data[0].options_by_psp);
    expect(result.status).toEqual('success');
  });
});
