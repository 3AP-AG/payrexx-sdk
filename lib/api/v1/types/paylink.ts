import { Response } from '../../interface/response';

interface PaylinkResponse extends Response {
  data: Partial<PaylinkData>[];
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
  fields: ResponseField;
  psp: number | number[] | string;
  pm: string | string[];
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
  'custom_field_4',
  'custom_field_5',
] as const;
type FieldKey = (typeof fields)[number];

type ResponseFieldValues = {
  active: boolean;
  mandatory: boolean;
  names?: {
    de: string;
    fr: string;
  };
};

type ResponseField = Partial<Record<FieldKey, ResponseFieldValues>>;

type RequestFieldValues = {
  mandatory?: boolean;
  name?: string | string[];
  defaultValue: string;
};

class PaylinkRequest {
  private title: string | string[];
  private description: string;
  private referenceId: string;
  private purpose: string | string[];
  private amount: number;
  private currency: string;
  private vatRate?: number;
  private psp?: string | number[];
  private pm?: string[];
  private sku?: string;
  private preAuthorization?: boolean;
  private reservation?: boolean;
  private name?: string;
  private fields?: Partial<Record<FieldKey, RequestFieldValues>>;
  private hideFields?: boolean;
  private concardisOrderId?: string;
  private buttonText?: string;
  private expirationDate?: string;
  private successRedirectUrl?: string;
  private failedRedirectUrl?: string;
  private subscriptionState?: boolean;
  private subscriptionInterval?: string;
  private subscriptionCancellationInterval?: string;

  constructor(
    /**
     * This is the page title which will be shown on the payment page.
     * Multi language support for FR and DE e.g. ['TITLE FR', 'TITLE DE']
     */
    title: string | string[],
    /**
     * This is a description which will be shown on the payment page.
     */
    description: string,
    /**
     * An internal reference id used by your system.
     */
    referenceId: string,
    /**
     * The purpose of the payment.
     * Multi language support for FR and DE e.g. ['PURPOSE FR', 'PURPOSE DE']
     */
    purpose: string | string[],
    /**
     * The amount of the payment in cents.
     */
    amount: number,
    /**
     * The currency of the payment.
     */
    currency: string,
  ) {
    this.title = title;
    this.description = description;
    this.referenceId = referenceId;
    this.purpose = purpose;
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * VAT rate percentage
   */
  setVatRate(vatRate: number) {
    this.vatRate = vatRate;
  }
  /**
   * The psp which should be used for the payment. (Can be an array of integers.)
   */
  setPsp(psp: string | number[]) {
    this.psp = psp;
  }
  /**
   * List of payment mean names to display
   */
  setPm(pm: string[]) {
    this.pm = pm;
  }
  /**
   * Product stock keeping unit
   */
  setSku(sku: string) {
    this.sku = sku;
  }
  /**
   * Whether charge payment manually at a later date (type authorization).
   */
  setPreAuthorization(preAuthorization: boolean) {
    this.preAuthorization = preAuthorization;
  }
  /**
   * Whether charge payment manually at a later date (type reservation).
   */
  setReservation(reservation: boolean) {
    this.reservation = reservation;
  }
  /**
   * This is an internal name of the payment page. This name will be displayed to the administrator only.
   */
  setName(name: string) {
    this.name = name;
  }
  /**
   * The contact data fields which should be displayed
   *
   * @param type The type of field
   * @param mandatory TRUE if the field has to be filled out for payment
   * @param defaultValue The default value. This value will be editable for the client.
   * @param name The name of the field, (this is only available for the fields custom_field_[1,2,3,4,5]
   */
  addField(
    type: FieldKey,
    mandatory: boolean,
    defaultValue?: string,
    name?: string | string[],
  ) {
    const fields = { ...this.fields };
    fields[type] = {
      mandatory: mandatory ? mandatory : undefined,
      defaultValue: defaultValue || '',
      name: name || '',
    };
    this.fields = { ...fields };
  }
  /**
   * Hide the whole contact fields section on invoice page
   */
  setHideFields(hideFields: boolean) {
    this.hideFields = hideFields;
  }
  /**
   * Only available for Concardis PSP and if the custom ORDERID option is activated in PSP settings in Payrexx administration.
   * This ORDERID will be transferred to the Payengine.
   */
  setConcardisOrderId(concardisOrderId: string) {
    this.concardisOrderId = concardisOrderId;
  }
  /**
   * Custom pay button text.
   */
  setButtonText(buttonText: string) {
    this.buttonText = buttonText;
  }
  /**
   * Expiration date for link. Date format: yyyy-MM-dd
   */
  setExpirationDate(expirationDate: string) {
    this.expirationDate = expirationDate;
  }
  /**
   * URL to redirect to after successful payment.
   */
  setSuccessRedirectUrl(successRedirectUrl: string) {
    this.successRedirectUrl = successRedirectUrl;
  }
  /**
   * URL to redirect to after failed payment.
   */
  setFailedRedirectUrl(failedRedirectUrl: string) {
    this.failedRedirectUrl = failedRedirectUrl;
  }
  /**
   * Defines whether the payment should be handled as subscription.
   */
  setSubscriptionState(subscriptionState: boolean) {
    this.subscriptionState = subscriptionState;
  }
  /**
   * Duration of the subscription
   */
  setSubscriptionInterval(subscriptionInterval: string) {
    this.subscriptionInterval = subscriptionInterval;
  }
  /**
   * Defines the period, in which a subscription can be canceled.
   */
  setSubscriptionCancellationIntervalvate(
    subscriptionCancellationInterval: string,
  ) {
    this.subscriptionCancellationInterval = subscriptionCancellationInterval;
  }
}

export { PaylinkRequest };
export type { PaylinkResponse };
