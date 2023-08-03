import { PaylinkRequest, PayrexxClient } from '../lib';
import { beforeEach, describe, expect, test } from 'vitest';
import clientConfig from './client-config';

// THESE TEST ARE TO BE EXECUTED LOCALLY ONLY
describe('Paylink', () => {
  let client: PayrexxClient;

  beforeEach(() => {
    client = new PayrexxClient(clientConfig.instance, clientConfig.secret);
  });

  test.skip('test get', async () => {
    const result = await client.api.paylink.retrieve(10891761);
    console.log('result', result.data[0]);
    expect(result.status).toEqual('success');
  });

  test.skip('test create', async () => {
    const params = new PaylinkRequest(
      'TITLE',
      'DESCRIPTION',
      '123456',
      'PURPOSE',
      1000,
      'CHF',
    );
    params.addField('forename', true, 'Name');
    params.addField('surname', false, 'Surname');

    const result = await client.api.paylink.create(params);
    console.log('RESULT TEST: ', result);
    expect(result.status).toEqual('success');
  });

  test.skip('test delete', async () => {
    const result = await client.api.paylink.remove(10891761);
    console.log('result', result);
    expect(result.status).toEqual('success');
  });
});
