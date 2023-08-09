import { Response } from '../../interface/response';

interface TransactionResponse extends Response {
  data: Partial<TransactionData>[];
}

/**
 * Transaction documentation: https://developers.payrexx.com/docs/transaction
 */
type TransactionData = {
  id: number;
  uuid: string;
  status: TransactionStatus;
  time: string;
  lang: string;
  pageUuid: string;
  payment: any;
  psp: string;
  pspId: number;
  mode: string;
  referenceId: string;
  invoice: Invoice;
  contact: Contact;
  refundable: boolean;
  partiallyRefundable: boolean;
};

type Invoice = {
  currencyAlpha3: string;
  products: Product[];
  discount: Discount;
  shippingAmount: number;
  totalAmount: number;
  customFields: Record<string, CustomField>;
};

type Product = {
  quantity: number;
  name: string;
  amount: number;
};

type Discount = {
  code: string;
  percentage: number;
  amount: number;
};

type CustomField = {
  name: string;
  value: string;
};

type Contact = {
  id: number;
  uuid: string;
  company: string;
  title: string;
  firstname: string;
  lastname: string;
  street: string;
  zip: string;
  place: string;
  country: string;
  countryISO: string;
  date_of_birth: string;
  email: string;
  phone: string;
  delivery_company: string;
  delivery_title: string;
  delivery_firstname: string;
  delivery_lastname: string;
  delivery_street: string;
  delivery_zip: string;
  delivery_place: string;
  delivery_country: string;
  delivery_countryISO: string;
};

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
  'uncaptured',
] as const;
export type TransactionStatus = (typeof transactionStatus)[number];

export type { TransactionResponse };
