import { beforeEach, describe, expect, test } from 'vitest';
import { PayrexxClient, TransactionRequest, TransactionResponse } from '../lib';
import clientConfig from './client-config';

// THESE TEST ARE TO BE EXECUTED LOCALLY ONLY

describe('Payout', () => {
  let client: PayrexxClient;

  beforeEach(() => {
    client = new PayrexxClient(clientConfig.instance, clientConfig.secret);
  });

  test.skip('test get transaction', async () => {
    const result: TransactionResponse = await client.api.transaction.retrieve(
      9088558,
    );

    console.log('RESULT', result);
    console.log('PAYMENT: ', result.data[0].payment);
    console.log('INVOICE: ', result.data[0].invoice);
    console.log('CONTACT: ', result.data[0].contact);
    expect(result.status).toEqual('success');
  });

  test.skip('test get all transactions', async () => {
    const result = await client.api.transaction.retrieveAll();
    console.log('RESULT', result);
    expect(result.status).toEqual('success');
  });

  test.skip('test create transaction', async () => {
    const request = new TransactionRequest(1500, 'CHF');
    request.addField('forename', 'Veljko');
    request.addField('surname', 'Test');
    const result = await client.api.transaction.create(request);
    console.log('RESULT', result);
    console.log('PAYMENT: ', result.data[0].payment);
    console.log('INVOICE: ', result.data[0].invoice);
    console.log('CONTACT: ', result.data[0].contact);
    expect(result.status).toEqual('success');
  });

  test.skip('test transaction refund - error', async () => {
    try {
      const result = await client.api.transaction.refund(9088558);
      console.log('RESULT', result);
      expect(result.status).toEqual('error');
    } catch (e) {
      console.log('ERROR', e);
    }
  });

  test.skip('test transaction capture - error', async () => {
    try {
      const result = await client.api.transaction.capture(9088558);
      console.log('RESULT', result);
      expect(result.status).toEqual('error');
    } catch (e) {
      console.log('ERROR', e);
    }
  });
});
