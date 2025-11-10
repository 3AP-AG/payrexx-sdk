import { beforeEach, describe, expect, test } from 'vitest';
import { GatewayCreateRequest, PayrexxClient } from '../lib';
import clientConfig from './client-config';

// THESE TEST ARE TO BE EXECUTED LOCALLY ONLY

describe('Gateway', () => {
  let client: PayrexxClient;

  beforeEach(() => {
    client = new PayrexxClient(clientConfig.instance, clientConfig.secret);
  });

  test.skip('test get', async () => {
    // create a gateway first with next test to get an id
    const result = await client.api.gateway.retrieve(10891782);
    console.log('result', result);
    expect(result.status).toEqual('success');
  });

  test.skip('test create', async () => {
    const params = new GatewayCreateRequest(1000, 'CHF');
    params.setFields({
      forename: { value: 'Test' },
      surname: { value: 'Test' },
      date_of_birth: { value: '2000-09-10' },
      custom_field_1: { value: 'Hej Hej', name: ['Test FR', 'Test DE'] },
    });
    params.addBasketItem(['ITEM'], 1, 1000, ['Some text']);
    const result = await client.api.gateway.create(params);

    console.log('RESULT TEST: ', result);
    expect(result.status).toEqual('success');
    console.log(`Created gateway id: ${result.data[0].id}`);
  });

  test.skip('test delete', async () => {
    // create a gateway first with next test to get an id
    const result = await client.api.gateway.remove(13796033);
    console.log('result', result);
    expect(result.status).toEqual('success');
  });
});
