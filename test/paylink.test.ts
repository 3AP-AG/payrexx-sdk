import { PayrexxClient } from '../lib';
import { expect, test } from 'vitest';
import { PaylinkRequest } from '../lib/api/v1/types/paylink';

// THESE TEST ARE TO BE EXECUTED LOCALLY ONLY

test.skip('test paylink get', async () => {
  const client = new PayrexxClient('INSTANCE', 'SECRET');
  const result = await client.api.paylink.retrieve(10816776);

  console.log('result', result.data[0]);
  expect(result.status).toEqual('success');
});

test.skip('test paylink create', async () => {
  const client = new PayrexxClient('INSTANCE', 'SECRET');

  const params = new PaylinkRequest(
    'TITLE',
    'DESCRIPTION',
    '123456',
    'PURPOSE',
    1000,
    'CHF',
  );
  params.addField('forename', true, 'Veljko');

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
