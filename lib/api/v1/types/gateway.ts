import { Response } from '../../interface/response';

interface GatewayResponse extends Response {
  data: Partial<GatewayData>[];
}

interface GatewayData {
  id: number;
  status: string;
  hash: string;
  referenceId: string;
  link: string;
  invoices: any[];
  preAuthorization: boolean;
  reservation: number;
  fields: FieldResponse;
  psp: any[];
  pm: any[];
  amount: number;
  currency: string;
  vatRate: string;
  sku: string;
  aplicationFee: number;
  createdAt: number;
}

const fields = [
  'title',
  'forename',
  'surname',
  'company',
  'street',
  'postcode',
  'place',
  'country',
  'phone',
  'email',
  'date_of_birth',
  'terms',
  'privacy_policy',
  'text',
  'custom_field_1',
  'custom_field_2',
  'custom_field_3',
  'custom_field_4',
  'custom_field_5',
] as const;
type FieldKey = (typeof fields)[number];

type Field = {
  active: boolean;
  mandatory: boolean;
  names?: {
    de: string;
    en: string;
    fr: string;
    it: string;
  };
};

type FieldResponse = Partial<Record<FieldKey, Field>>;

interface GatewayRequest {
  /**
   * Amount of payment in cents
   */
  amount: number;
  /**
   * Currency of payment (ISO code)
   */
  currency: string;
  /**
   * VAT Rate Percentage
   */
  vatRate?: number;
  /**
   * Product stock keeping unit
   */
  sku?: string;
  /**
   * The purpose of the payment
   */
  purpose?: string;
  /**
   * URL to redirect to after successful payment
   */
  successRedirectUrl?: string;
  /**
   * URL to redirect to after failed payment
   */
  failedRedirectUrl?: string;
  /**
   * URL to redirect to after manual cancellation by shopper
   */
  cancelRedirectUrl?: string;
  /**
   * List of all products (incl. shipping costs).
   * The sum of all product amounts must match the amount parameter above.
   * Basket products contains name, description, quantity, amount (in cents) and vatRate (in Percent)
   */
  basket?: BasketItem[];
  /**
   * List of PSPs to provide for payment. If empty all available PSPs are provied
   */
  psp?: number[];
  /**
   * List of payment mean names to display
   */
  pm?: string[];
  /**
   * Whether charge payment manually at a later date (type authorization)
   */
  preAuthorization?: boolean;
  /**
   * Whether charge payment manually at a later date (type reservation)
   */
  reservation?: boolean;
  /**
   * An internal reference id used by your system
   */
  referenceId?: string;
  /**
   * Only available for Concardis PSP and if the custom ORDERID option is activated in PSP settings in Payrexx administration.
   * This ORDERID will be transferred to the Payengine
   */
  concardisOrderId?: string;
  /**
   * The contact data fields which should be stored along with payment
   */
  fields?: Partial<FieldRequest>;
  /**
   * Skip result page and directly redirect to success or failed URL
   */
  skipResultPage?: boolean;
  /**
   * preAuthorization needs to be "true". This will charge the authorization during the first payment
   */
  chargeOnAuthorization?: boolean;
  /**
   * Gateway validity in minutes
   */
  validity?: number;
  /**
   * Defines whether the payment should be handled as subscription
   */
  subscriptionState?: boolean;
  /**
   * Payment interval
   */
  subscriptionInterval?: string;
  /**
   * Duration of the subscription
   */
  subscriptionPeriod?: string;
  /**
   * Defines the period, in which a subscription can be canceled
   */
  subscriptionCancellationInterval?: string;
  /**
   * Change the default button Text "Pay" to a custom String
   */
  buttonText?: string[];
  /**
   * UUID of the look and feel profile to use
   */
  lookAndFeelProfile?: string;
  /**
   * Custom success message on result page
   */
  successMessage?: string;
  /**
   * Holds the session ID of a scanned QR code. Only available and needed for Static QR Code with Twint.
   */
  qrCodeSessionId?: string;
}

interface BasketItem {
  /**
   * Name of item
   */
  name: string[];
  /**
   * Description of item
   */
  description: string[];
  /**
   * Quantity of item
   */
  quantity: number;
  /**
   * Amount in cents
   */
  amount: number;
  /**
   * VAT rate of item (overrides vatRate of Gateway, can be 0)
   */
  vatRate?: number;
}

interface FieldRequest {
  title: FieldValue;
  forename: FieldValue;
  surname: FieldValue;
  company: FieldValue;
  street: FieldValue;
  postcode: FieldValue;
  place: FieldValue;
  country: FieldValue;
  phone: FieldValue;
  email: FieldValue;
  date_of_birth: FieldValue;
  terms: string;
  privacy_policy: string;
  custom_field_1: FieldValue;
  custom_field_2: FieldValue;
  custom_field_3: FieldValue;
  custom_field_4: FieldValue;
  custom_field_5: FieldValue;
}

type FieldValue = {
  value: string;
  name?: string[];
};

export type { GatewayResponse, GatewayRequest };
