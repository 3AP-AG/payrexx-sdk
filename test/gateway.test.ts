import { beforeEach, describe, expect, test } from 'vitest';
import { GatewayRequest, PayrexxClient } from '../lib';
import clientConfig from './client-config';

// THESE TEST ARE TO BE EXECUTED LOCALLY ONLY

describe('Gateway', () => {
  let client: PayrexxClient;

  beforeEach(() => {
    client = new PayrexxClient(clientConfig.instance, clientConfig.secret);
  });

  test.skip('test get', async () => {
    const result = await client.api.gateway.retrieve(10891782);
    console.log('result', result);
    expect(result.status).toEqual('success');
  });

  test.skip('test create', async () => {
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

  test.skip('test delete', async () => {
    const result = await client.api.gateway.remove(10891782);
    console.log('result', result);
    expect(result.status).toEqual('success');
  });
});
