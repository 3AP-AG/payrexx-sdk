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

// This object is coming from payrexx: https://developers.payrexx.com/docs/transaction
// TODO: Add remaining fields
interface Transaction {
  id: number;
  uuid: number | string;
  time: string;
  status: TransactionStatus;
  referenceId: string;
  lang: string;
  psp: string;
  pspId: number;
  amount: number;
  payrexx_fee: number;
}

export type { Transaction };
