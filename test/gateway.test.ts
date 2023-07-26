import { expect, test } from 'vitest';
import { PayrexxClient } from '../lib';
import { GatewayRequest } from '../lib/api/v1/types/gateway';

test('test paylink create', async () => {
  const client = new PayrexxClient('3ap-test', 'SECRET');

  const params: GatewayRequest = {
    currency: 'CHF',
    amount: 1075,
    purpose: 'test',
    referenceId: '7500000061',
  };
  const result = await client.api.gateway.create(params);

  console.log('RESULT TEST: ', result);
  expect(result.status).toEqual('success');
});
