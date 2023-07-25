const transactionStatus = [
  'waiting',
  'confirmed',
  'cancelled',
  'declined',
  'authorized',
  'reserved',
  'refunded',
  'refund_pending',
  'partially-refunded',
  'chargeback',
  'error',
] as const;
export type TransactionStatus = (typeof transactionStatus)[number];

/**
 * Transaction documentation: https://developers.payrexx.com/docs/transaction
 */
interface Transaction {
  /**
   * Internal transaction ID
   */
  id: number;
  /**
   * Public transaction ID
   */
  uuid: number | string;
  /**
   * Date and time of transaction creation. Format YYYY-MM-DD HH:MM:SS
   */
  time: string;
  /**
   * The status of the transaction
   */
  status: TransactionStatus;
  /**
   * ISO 639-1 of shopper language
   */
  lang: string;
  /**
   * Name of the payment service provider used
   */
  psp: string;
  /**
   * The ID of the payment service provider
   */
  pspId: number;
  /**
   * The amount of the transaction in the smallest unit of the transaction currency
   */
  amount: number;
  /**
   * The transaction fee charged by Payrexx
   */
  payrexx_fee: number;
  /**
   * The ID of the origin pre-authorization transaction
   */
  preAuthorizationId: number;
  /**
   * Payment mean as array
   * 
    -brand (lowercase string)

    -cardNumber (truncated PAN) 
    
    -expiry (format: YY-MM) 
   */
  payment: [];
  /**
   * The reference which has been passed when creating a Gateway / Invoice.
   */
  referenceId: string;
  // TODO: https://developers.payrexx.com/docs/metadata
  metadata: any;
  // TODO: https://developers.payrexx.com/docs/subscription-3
  subscription: any;
  // TODO: https://developers.payrexx.com/docs/invoice-1
  invoice: any;
  // TODO: https://developers.payrexx.com/docs/contact
  contact: any;
  /**
   * Indicates whether refunds are possible
   */
  refundable: boolean;
  /**
   * Indicates whether partial refunds are possible
   */
  partiallyRefundable: boolean;
}

export type { Transaction };
