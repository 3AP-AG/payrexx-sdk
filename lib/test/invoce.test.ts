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

  const params = {
    vatRate: 7.7,
    currency: 'CHF',
    amount: 1075,
    description: 'test',
    title: ['Versement à Foundera AG', 'Zahlung an Foundera AG'],
    purpose: ['Multiple cities GmbH', 'Multiple cities GmbH'],
    referenceId: '7500000061',
    expirationDate: '2023-08-10',
  } as PaylinkRequest;
  const result = await client.apiV1.paylink.create(params);
  console.log('RESULT: ', result);
});
