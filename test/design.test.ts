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

  test.skip('test creation', async () => {
    const request = new DesignRequest('TEST_DESIGN');
    const result: DesignResponse = await client.api.design.create(request);
    console.log('RESULT', result);
    expect(result.status).toEqual('success');
  });

  test.skip('test delete', async () => {
    // GIVEN
    const request = new DesignRequest('TEST_DESIGN');
    const createdDesign: DesignResponse = await client.api.design.create(
      request,
    );
    const id = createdDesign.data[0].uuid;

    // WHEN
    const result: DesignResponse = await client.api.design.remove(id);

    // THEN
    console.log('RESULT', result);
    expect(result.status).toEqual('success');
  });

  test.skip('test update', async () => {
    // GIVEN
    const createRequest = new DesignRequest('TEST_DESIGN');
    const createdDesign: DesignResponse = await client.api.design.create(
      createRequest,
    );
    const id = createdDesign.data[0].uuid;

    // WHEN
    const updateRequest = new DesignRequest('TEST_DESIGN');
    updateRequest.setFontFamily('Georgia');
    const result: DesignResponse = await client.api.design.update(
      id,
      updateRequest,
    );

    // THEN
    console.log('RESULT', result);
    expect(result.status).toEqual('success');
  });
});
