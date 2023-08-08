import { beforeEach, describe, expect, test } from 'vitest';
import { PayoutResponse, PayoutsResponse, PayrexxClient } from '../lib';
import clientConfig from './client-config';

// THESE TEST ARE TO BE EXECUTED LOCALLY ONLY

describe('Payout', () => {
  let client: PayrexxClient;

  beforeEach(() => {
    client = new PayrexxClient(clientConfig.instance, clientConfig.secret);
  });

  test('test get payouts', async () => {
    const result: PayoutsResponse = await client.api.payout.retrieveAll();

    console.log('RESULT', result);
    expect(result.status).toEqual('success');
  });

  test.skip('test get payout with details', async () => {
    const result: PayoutResponse = await client.api.payout.retrieve(1, true);

    console.log('RESULT', result);
    expect(result.status).toEqual('success');
  });

  test.skip('test get payout', async () => {
    const result: PayoutResponse = await client.api.payout.retrieve(1);

    console.log('RESULT', result);
    expect(result.status).toEqual('success');
  });
});
