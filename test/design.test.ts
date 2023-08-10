import { beforeEach, describe, expect, test } from 'vitest';
import clientConfig from './client-config';
import { DesignRequest, DesignResponse, PayrexxClient } from '../lib';

// THESE TEST ARE TO BE EXECUTED LOCALLY ONLY

describe('Design', () => {
  let client: PayrexxClient;

  beforeEach(() => {
    client = new PayrexxClient(clientConfig.instance, clientConfig.secret);
  });

  test.skip('test get all', async () => {
    const result: DesignResponse = await client.api.design.retrieveAll();
    console.log('RESULT', result);
    expect(result.status).toEqual('success');
  });

  test.skip('test get one', async () => {
    const result: DesignResponse = await client.api.design.retrieve('f4d812a9');
    console.log('RESULT', result);
    expect(result.status).toEqual('success');
  });

  test.skip('test creation', async () => {
    const request = new DesignRequest('Test design');
    const result: DesignResponse = await client.api.design.create(request);
    console.log('RESULT', result);
    expect(result.status).toEqual('success');
  });

  test('test delete', async () => {
    const result: DesignResponse = await client.api.design.remove('beaf0156');
    console.log('RESULT', result);
    expect(result.status).toEqual('success');
  });
});
