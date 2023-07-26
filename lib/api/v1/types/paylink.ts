interface PaylinkResponse {
  status: string;
  data: Partial<PaylinkData>[];
  message?: string;
}

interface PaylinkData {
  id: number;
  status: string;
  hash: string;
  referenceId: string;
  link: string;
  invoices: [];
  concardisOrderId: string;
  expirationDate: string;
  preAuthorization: number;
  reservation: number;
  name: string;
  title: string;
  description: string;
  buttonText: string;
  api: boolean;
  fields: FieldRecord;
  psp: string | number[];
  pm: string[];
  purpose: any;
  amount: number;
  vatRate: number;
  currency: string;
  sku: string;
  applicationFee: number;
  createdAt: number;
  subscriptionState: boolean;
  subscriptionInterval: string;
  subscriptionPeriod: string;
  subscriptionPeriodMinAmount: string;
  subscriptionCancellationInterval: string;
}

const fields = [
  'header',
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
  'custom_field_1',
  'custom_field_2',
  'custom_field_3',
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

type FieldRecord = Partial<Record<FieldKey, Field>>;

/**
 * Interface for paylink request.
 * For more information visit: https://developers.payrexx.com/reference/create-a-paylink
 */
interface PaylinkRequest {
  /**
   * This is the page title which will be shown on the payment page.
   * Multi language support for FR and DE e.g. ['TITLE FR', 'TITLE DE']
   */
  title: string[];
  /**
   * This is a description which will be shown on the payment page.
   */
  description: string;
  /**
   * An internal reference id used by your system.
   */
  referenceId: string;
  /**
   * The purpose of the payment.
   * Multi language support for FR and DE e.g. ['PURPOSE FR', 'PURPOSE DE']
   */
  purpose: string[];
  /**
   * The amount of the payment in cents.
   */
  amount: number;
  /**
   * The currency of the payment.
   */
  currency: string;
  /**
   * VAT rate percentage
   */
  vatRate?: number;
  /**
   * The psp which should be used for the payment. (Can be an array of integers.)
   */
  psp?: string | number[];
  /**
   * List of payment mean names to display
   */
  pm?: string[];
  /**
   * Product stock keeping unit
   */
  sku?: string;
  /**
   * Whether charge payment manually at a later date (type authorization).
   */
  preAuthorization?: boolean;
  /**
   * Whether charge payment manually at a later date (type reservation).
   */
  reservation?: boolean;
  /**
   * This is an internal name of the payment page. This name will be displayed to the administrator only.
   */
  name?: string;
  /**
   * The contact data fields which should be displayed
   */
  fields?: string[];
  /**
   * Hide the whole contact fields section on invoice page
   */
  hideFields?: boolean;
  /**
   * Only available for Concardis PSP and if the custom ORDERID option is activated in PSP settings in Payrexx administration.
   * This ORDERID will be transferred to the Payengine.
   */
  concardisOrderId?: string;
  /**
   * Custom pay button text.
   */
  buttonText?: string;
  /**
   * Expiration date for link. Date format: yyyy-MM-dd
   */
  expirationDate?: string;
  /**
   * URL to redirect to after successful payment.
   */
  successRedirectUrl?: string;
  /**
   * URL to redirect to after failed payment.
   */
  failedRedirectUrl?: string;
  /**
   * Defines whether the payment should be handled as subscription.
   */
  subscriptionState?: boolean;
  /**
   * Duration of the subscription
   */
  subscriptionInterval?: string;
  /**
   * Defines the period, in which a subscription can be canceled.
   */
  subscriptionCancellationInterval?: string;
  /**
   * Generated API signature based on params and API secret.
   * Do NOT provide this value manually!
   */
  ApiSignature?: string;
}

export type { PaylinkRequest, PaylinkResponse };
