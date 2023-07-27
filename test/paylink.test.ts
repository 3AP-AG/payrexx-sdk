import { PayrexxClient } from '../lib';
import { expect, test } from 'vitest';
import { PaylinkRequest } from '../lib/api/v1/types/paylink';

// THESE TEST ARE TO BE EXECUTED LOCALLY ONLY

test.skip('test paylink get', async () => {
  const client = new PayrexxClient('INSTANCE', 'SECRET');
  const result = await client.api.paylink.retrieve(1111111);

  console.log('result', result);
  expect(result.status).toEqual('success');
});

test.skip('test paylink create', async () => {
  const client = new PayrexxClient('INSTANCE', 'SECRET');

  const params: PaylinkRequest = {
    vatRate: 7.7,
    currency: 'CHF',
    amount: 11175,
    description: 'test',
    title: ['TEST FR', 'TEST DE'],
    purpose: ['TEST FR', 'TEST DE'],
    referenceId: '7500000061',
    expirationDate: '2023-09-10',
  };
  const result = await client.api.paylink.create(params);

  console.log('RESULT TEST: ', result);
  expect(result.status).toEqual('success');
});

test.skip('test paylink delete', async () => {
  const client = new PayrexxClient('INSTANCE', 'SECRET');

  const result = await client.api.paylink.remove(1111111);

  console.log('result', result);
  expect(result.status).toEqual('success');
});
