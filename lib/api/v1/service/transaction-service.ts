import { Service } from '../../interface/service';
import { TransactionRequest, TransactionResponse } from '../types/transaction';

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

  /**
   * Create a transaction
   * @param request Form data for creation of transaction
   * @returns Response from the Payrexx
   */
  async create(request: TransactionRequest): Promise<TransactionResponse> {
    return this.post(request);
  }
}
