import { PayrexxClient } from '../lib';
import { expect, test } from 'vitest';
import { PaylinkRequest } from '../lib/api/v1/types/paylink';
// THESE TEST ARE ONLY TO BE EXECUTED LOCALLY

test.skip('test paylink get', async () => {
  const client = new PayrexxClient('3ap-test', 'SECRET');
  const result = await client.api.paylink.retrieve(10784762);

  expect(result.status).toEqual('success');
});

test.skip('test paylink create', async () => {
  const client = new PayrexxClient('3ap-test', 'SECRET');

  const params: PaylinkRequest = {
    vatRate: 7.7,
    currency: 'CHF',
    amount: 1075,
    description: 'test',
    title: ['TEST FR', 'TEST DE'],
    purpose: ['TEST FR', 'TEST DE'],
    referenceId: '7500000061',
    expirationDate: '2023-08-10',
  };
  const result = await client.api.paylink.create(params);

  console.log('RESULT TEST: ', result);
  expect(result.status).toEqual('success');
});

test.skip('test paylink delete', async () => {
  const client = new PayrexxClient('3ap-test', 'SECRET');

  const result = await client.api.paylink.remove(10784762);

  console.log('result', result);
  expect(result.status).toEqual('success');
});
