import { expect, test } from 'vitest';
import { PayrexxClient } from '../lib';
import { GatewayRequest } from '../lib/api/v1/types/gateway';

test.skip('test gateway get', async () => {
  const client = new PayrexxClient(
    '3ap-test',
    'cb3qqgqaDkTtP5ZO8pPvi6VkrReBka',
  );
  const result = await client.api.gateway.retrieve(1111111);

  console.log('result', result);
  expect(result.status).toEqual('success');
});

test.skip('test gateway create', async () => {
  const client = new PayrexxClient(
    '3ap-test',
    'cb3qqgqaDkTtP5ZO8pPvi6VkrReBka',
  );

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

test.skip('test gateway delete', async () => {
  const client = new PayrexxClient(
    '3ap-test',
    'cb3qqgqaDkTtP5ZO8pPvi6VkrReBka',
  );
  const result = await client.api.gateway.remove(1111111);

  console.log('result', result);
  expect(result.status).toEqual('success');
});
