import { beforeEach, describe, expect, test } from 'vitest';
import { PaymentProviderResponse, PayrexxClient } from '../lib';

// THESE TEST ARE TO BE EXECUTED LOCALLY ONLY

describe('Payment provider', () => {
  let client: PayrexxClient;

  beforeEach(() => {
    client = new PayrexxClient('3ap-test', 'cb3qqgqaDkTtP5ZO8pPvi6VkrReBka');
  });

  test('test get all', async () => {
    const result: PaymentProviderResponse =
      await client.api.paymentProvider.retrieveAll();

    console.log('RESULT', result);
    console.log('RESULT paymentMethods', result.data[0].paymentMethods);
    console.log(
      'RESULT activePaymentMethods',
      result.data[0].activePaymentMethods,
    );
    expect(result.status).toEqual('success');
  });
});
