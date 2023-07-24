import { PayrexxClient } from '..';
import { test } from 'vitest';
import { PaylinkRequest } from '../api/v1/types/paylink';
// THESE TEST ARE ONLY TO BE EXECUTED LOCALLY

test.skip('test paylink get', async () => {
  const client = new PayrexxClient('3ap-test', 'SECRET');
  const result = await client.apiV1.paylink.retrieve(10755889);
  console.log('RESULT: ', result);
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
  const result = await client.apiV1.paylink.create(params);
  console.log('RESULT: ', result);
});
