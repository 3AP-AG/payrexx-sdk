import { Service } from '../../interface/service';
import { TransactionResponse } from '../types/transaction';

export class TransactionService extends Service {
  constructor(instance: string, apiSecret: string) {
    super(instance, apiSecret, 'Transaction');
  }

  /**
   * Retrieve a transaction
   * @param id The id of a transaction
   * @returns Response from the Payrexx
   */
  async retrieve(id: number): Promise<TransactionResponse> {
    return this.get(`${id}`);
  }

  /**
   * Retrieve all transactions
   * @returns Response from the Payrexx
   */
  async retrieveAll(): Promise<TransactionResponse> {
    return this.get();
  }
}
