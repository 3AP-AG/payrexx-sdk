import { Response } from '../../interface/response';

/**
 * Some properties are available only when doing GET and others when doing POST requests.
 * Consult with Payrexx [API](https://developers.payrexx.com/reference/rest-api) if you need assistance.
 */
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
  invoice: Partial<Invoice>;
  contact: Contact;
  refundable: boolean;
  partiallyRefundable: boolean;
  subscription: any;
  metadata: any;
};

type Invoice = {
  number: string;
  currency: string;
  products: Partial<Product>[];
  discount: Discount;
  shippingAmount: number;
  totalAmount: number;
  amount: number;
  customFields: Record<string, CustomField>;
  referenceId: string;
  googleAnalyticProducts: any;
  paymentRequestId: number;
  paymentLink: any;
};

type Product = {
  quantity: number;
  name: string;
  amount: number;
  sku: number;
  vatRate: number;
};

type Discount = {
  code: string;
  percentage: number;
  amount: number;
};

type CustomField = {
  name: string;
  value: string;
  type?: string;
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

class TransactionRequest {
  private amount: number;
  private currency: string;
  private vatRate?: number;
  private purpose?: string;
  private fields?: Partial<Record<FieldKey, FieldValue>>;

  /**
   * Transaction create request
   * @param amount Amount for charge in cents.
   * @param currency Currency of payment (ISO code)
   */
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  public getAmount() {
    return this.amount;
  }

  /**
   *
   * @param amount Amount for charge in cents.
   */
  public setAmount(amount: number) {
    this.amount = amount;
  }

  public getCurrency() {
    return this.currency;
  }

  /**
   *
   * @param currency Currency of payment (ISO code)
   */
  public setCurrency(currency: string) {
    this.currency = currency;
  }

  public getVatRate() {
    return this.vatRate;
  }

  /**
   *
   * @param vatRate VAT Rate Percentage
   */
  public setVatRate(vatRate: number) {
    this.vatRate = vatRate;
  }

  public getPurpose() {
    return this.purpose;
  }

  /**
   *
   * @param purpose The purpose of the payment
   */
  public setPurpose(purpose: string) {
    this.purpose = purpose;
  }

  public getFields() {
    return this.fields;
  }

  /**
   * The contact data fields which should be stored along with transaction
   * @param type The type of field
   * @param value Value of the field
   * @param name Name of the field
   */
  public addField(type: FieldKey, value: string, name?: string[]) {
    const fields = { ...this.fields };
    fields[type] = {
      value,
      name,
    };
    this.fields = { ...fields };
  }
}

type FieldKey = 'email' | 'forename' | 'surname';

type FieldValue = {
  value: string;
  name?: string[];
};

export { TransactionRequest };
export type { TransactionResponse };
