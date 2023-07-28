import { Response } from '../../interface/response';

interface PaylinkResponse extends Response {
  data: Partial<PaylinkData>[];
}

type PaylinkData = {
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
  fields: Partial<Record<FieldKey, ResponseField>>;
  psp: number | number[] | string;
  pm: string | string[];
  purpose: Record<string, string>;
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
};

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

type ResponseField = {
  active: boolean;
  mandatory: boolean;
  names?: {
    de: string;
    fr: string;
  };
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
  private fields?: Partial<Record<FieldKey, RequestField>>;
  private hideFields?: boolean;
  private concardisOrderId?: string;
  private buttonText?: string;
  private expirationDate?: string;
  private successRedirectUrl?: string;
  private failedRedirectUrl?: string;
  private subscriptionState?: boolean;
  private subscriptionInterval?: string;
  private subscriptionCancellationInterval?: string;

  /**
   * Paylink creation request
   * @param title The page title which will be shown on the payment page. Multi language support for FR and DE e.g. ['TITLE FR', 'TITLE DE']
   * @param description The description which will be shown on the payment page
   * @param referenceId An internal reference id used by your system
   * @param purpose The purpose of the payment. Multi language support for FR and DE e.g. ['PURPOSE FR', 'PURPOSE DE']
   * @param amount The amount of the payment in cents
   * @param currency The corresponding payment currency for the amount (use ISO codes)
   */
  constructor(
    title: string | string[],
    description: string,
    referenceId: string,
    purpose: string | string[],
    amount: number,
    currency: string,
  ) {
    this.title = title;
    this.description = description;
    this.referenceId = referenceId;
    this.purpose = purpose;
    this.amount = amount;
    this.currency = currency;
  }

  getTitle() {
    return this.title;
  }

  /**
   *
   * @param title The page title which will be shown on the payment page. Multi language support for FR and DE e.g. ['TITLE FR', 'TITLE DE']
   */
  setTitle(title: string | string[]) {
    this.title = title;
  }

  getDescription() {
    return this.description;
  }

  /**
   *
   * @param description The description which will be shown on the payment page.
   */
  setDescription(description: string) {
    this.description = description;
  }

  getReferenceId() {
    return this.referenceId;
  }

  /**
   *
   * @param referenceId An internal reference id used by your system.
   */
  setReferenceId(referenceId: string) {
    this.referenceId = referenceId;
  }

  getPurpose() {
    return this.purpose;
  }

  /**
   *
   * @param purpose The purpose of the payment. Multi language support for FR and DE e.g. ['PURPOSE FR', 'PURPOSE DE']
   */
  setPurpose(purpose: string | string[]) {
    this.purpose = purpose;
  }

  getAmount() {
    return this.amount;
  }

  /**
   *
   * @param amount The amount of the payment in cents
   */
  setAmount(amount: number) {
    this.amount = amount;
  }

  getCurrency() {
    return this.currency;
  }

  /**
   *
   * @param currency The corresponding payment currency for the amount (use ISO codes)
   */
  setCurrency(currency: string) {
    this.currency = currency;
  }

  getVatRate() {
    return this.vatRate;
  }

  /**
   * @param vatRate VAT rate percentage
   */
  setVatRate(vatRate: number) {
    this.vatRate = vatRate;
  }

  getPsp() {
    return this.psp;
  }

  /**
   * @param psp The psp which should be used for the payment. (Can be an array of integers.)
   */
  setPsp(psp: string | number[]) {
    this.psp = psp;
  }

  getPm() {
    return this.pm;
  }

  /**
   * @param pm List of payment mean names to display
   */
  setPm(pm: string[]) {
    this.pm = pm;
  }

  getSku() {
    return this.sku;
  }

  /**
   * @param sku Product stock keeping unit
   */
  setSku(sku: string) {
    this.sku = sku;
  }

  getPreAuthorization() {
    return this.preAuthorization;
  }

  /**
   * @param preAuthorization Whether charge payment manually at a later date (type authorization).
   */
  setPreAuthorization(preAuthorization: boolean) {
    this.preAuthorization = preAuthorization;
  }

  getReservation() {
    return this.reservation;
  }

  /**
   * @param reservation Whether charge payment manually at a later date (type reservation).
   */
  setReservation(reservation: boolean) {
    this.reservation = reservation;
  }

  getName() {
    return this.name;
  }

  /**
   * @param name This is an internal name of the payment page. This name will be displayed to the administrator only.
   */
  setName(name: string) {
    this.name = name;
  }

  getFields() {
    return this.fields;
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
    defaultValue?: string | null,
    name?: string | string[] | null,
  ) {
    const fields = { ...this.fields };
    fields[type] = {
      mandatory: mandatory ? mandatory : undefined,
      defaultValue: defaultValue || '',
      name: name || '',
    };
    this.fields = { ...fields };
  }

  getHideFields() {
    return this.hideFields;
  }

  /**
   * @param hideFields Hide the whole contact fields section on invoice page
   */
  setHideFields(hideFields: boolean) {
    this.hideFields = hideFields;
  }

  getConcardisOrderId() {
    return this.concardisOrderId;
  }

  /**
   * @param concardisOrderId Only available for Concardis PSP and if the custom ORDERID option is activated in PSP settings in Payrexx administration. This ORDERID will be transferred to the Payengine.
   */
  setConcardisOrderId(concardisOrderId: string) {
    this.concardisOrderId = concardisOrderId;
  }

  getButtonText() {
    return this.buttonText;
  }

  /**
   * @param buttonText Custom pay button text.
   */
  setButtonText(buttonText: string) {
    this.buttonText = buttonText;
  }

  getExpirationDate() {
    return this.expirationDate;
  }

  /**
   * @param expirationDate Expiration date for link. Date format: yyyy-MM-dd
   */
  setExpirationDate(expirationDate: string) {
    this.expirationDate = expirationDate;
  }

  getSuccessRedirectUrl() {
    return this.successRedirectUrl;
  }

  /**
   * @param successRedirectUrl URL to redirect to after successful payment.
   */
  setSuccessRedirectUrl(successRedirectUrl: string) {
    this.successRedirectUrl = successRedirectUrl;
  }

  getFailedRedirectUrl() {
    return this.failedRedirectUrl;
  }

  /**
   * @param failedRedirectUrl URL to redirect to after failed payment.
   */
  setFailedRedirectUrl(failedRedirectUrl: string) {
    this.failedRedirectUrl = failedRedirectUrl;
  }

  getSubscriptionState() {
    return this.subscriptionState;
  }

  /**
   * @param subscriptionState Defines whether the payment should be handled as subscription.
   */
  setSubscriptionState(subscriptionState: boolean) {
    this.subscriptionState = subscriptionState;
  }

  getSubscriptionInterval() {
    return this.subscriptionInterval;
  }

  /**
   * @param subscriptionInterval Duration of the subscription
   */
  setSubscriptionInterval(subscriptionInterval: string) {
    this.subscriptionInterval = subscriptionInterval;
  }

  getSubscriptionCancellationInterval() {
    return this.subscriptionCancellationInterval;
  }

  /**
   * @param subscriptionCancellationInterval Defines the period, in which a subscription can be canceled.
   */
  setSubscriptionCancellationInterval(
    subscriptionCancellationInterval: string,
  ) {
    this.subscriptionCancellationInterval = subscriptionCancellationInterval;
  }
}

type RequestField = {
  mandatory?: boolean;
  name?: string | string[];
  defaultValue: string;
};

export { PaylinkRequest };
export type { PaylinkResponse };
