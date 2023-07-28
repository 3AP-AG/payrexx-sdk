import { expect, test } from 'vitest';
import { PayrexxClient } from '../lib';
import { GatewayRequest } from '../lib/api/v1/types/gateway';

// THESE TEST ARE TO BE EXECUTED LOCALLY ONLY

test.skip('test gateway get', async () => {
  const client = new PayrexxClient('INSTACE', 'SECRET');
  const result = await client.api.gateway.retrieve(10817927);

  console.log('result', result);
  console.log('invoices', result.data[0].invoices);
  console.log('result', result.data[0].fields);
  expect(result.status).toEqual('success');
});

test.skip('test gateway create', async () => {
  const client = new PayrexxClient('INSTACE', 'SECRET');

  const params = new GatewayRequest(1000, 'CHF');
  params.addField('forename', 'Test');
  params.addField('surname', 'Test');
  params.addField('date_of_birth', '2000-09-10');
  params.addField('custom_field_1', 'Hej Hej', ['Test FR', 'Test DE']);
  params.addBasketItem(['ITEM'], 1, 1000, ['Some text']);
  const result = await client.api.gateway.create(params);

  console.log('RESULT TEST: ', result);
  expect(result.status).toEqual('success');
});

test.skip('test gateway delete', async () => {
  const client = new PayrexxClient('INSTANCE', 'SECRET');
  const result = await client.api.gateway.remove(1111111);

  console.log('result', result);
  expect(result.status).toEqual('success');
});
