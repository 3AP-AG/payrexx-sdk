import { Response } from '../../interface/response';

interface GatewayResponse extends Response {
  data: Partial<GatewayData>[];
}

type GatewayData = {
  id: number;
  status: string;
  hash: string;
  referenceId: string;
  link: string;
  invoices: any[];
  preAuthorization: boolean;
  reservation: number;
  fields: Partial<Record<FieldKey, ResponseField>>;
  psp: any[];
  pm: any[];
  amount: number;
  currency: string;
  vatRate: string;
  sku: string;
  aplicationFee: number;
  createdAt: number;
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
  'text',
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

/**
 * For detailed information visit https://developers.payrexx.com/reference/create-a-gateway
 */
class GatewayRequest {
  private amount: number;
  private currency: string;
  private vatRate?: number;
  private sku?: string;
  private purpose?: string;
  private successRedirectUrl?: string;
  private failedRedirectUrl?: string;
  private cancelRedirectUrl?: string;
  private basket?: BasketItem[];
  private psp?: number[];
  private pm?: string[];
  private preAuthorization?: boolean;
  private reservation?: boolean;
  private referenceId?: string;
  private concardisOrderId?: string;
  private fields?: Partial<Record<FieldKey, RequestField>>;
  private skipResultPage?: boolean;
  private chargeOnAuthorization?: boolean;
  private validity?: number;
  private subscriptionState?: boolean;
  private subscriptionInterval?: string;
  private subscriptionPeriod?: string;
  private subscriptionCancellationInterval?: string;
  private buttonText?: string[];
  private lookAndFeelProfile?: string;
  private successMessage?: string;
  private qrCodeSessionId?: string;

  /**
   * Gateway create request
   * @param amount Amount of payment in cents
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
   * @param amount Amount of payment in cents
   */
  public setAmount(amount: number) {
    this.amount = amount;
  }

  public getCurrency() {
    return this.currency;
  }

  /**
   * @param currency Currency of payment (ISO code)
   */
  public setCurrency(currency: string) {
    this.currency = currency;
  }

  public getVatRate() {
    return this.vatRate;
  }

  /**
   * @param vatRate VAT Rate Percentage
   */
  public setVatRate(vatRate: number) {
    this.vatRate = vatRate;
  }

  public getSku() {
    return this.sku;
  }

  /**
   * @param sku Product stock keeping unit
   */
  public setSku(sku: string) {
    this.sku = sku;
  }

  public getPurpose() {
    return this.purpose;
  }

  /**
   * @param purpose The purpose of the payment
   */
  public setPurpose(purpose: string) {
    this.purpose = purpose;
  }

  public getSuccessRedirectUrl() {
    return this.successRedirectUrl;
  }

  /**
   * @param successRedirectUrl URL to redirect to after successful payment
   */
  public setSuccessRedirectUrl(successRedirectUrl: string) {
    this.successRedirectUrl = successRedirectUrl;
  }

  public getFailedRedirectUrl() {
    return this.failedRedirectUrl;
  }

  /**
   * @param failedRedirectUrl URL to redirect to after failed payment
   */
  public setFailedRedirectUrl(failedRedirectUrl: string) {
    this.failedRedirectUrl = failedRedirectUrl;
  }

  public getCancelRedirectUrl() {
    return this.cancelRedirectUrl;
  }

  /**
   * @param cancelRedirectUrl URL to redirect to after manual cancellation by shopper
   */
  public setCancelRedirectUrl(cancelRedirectUrl: string) {
    this.cancelRedirectUrl = cancelRedirectUrl;
  }

  public getBasket() {
    return this.basket;
  }

  /**
   * @param name Name of the item
   * @param quantity Quantity of the item
   * @param amount Amount in cents
   * @param description Item's description
   * @param vatRate VAT rate of item (overrides vatRate of Gateway, can be 0)
   */
  public addBasketItem(
    name: string[],
    quantity: number,
    amount: number,
    description?: string[] | null,
    vatRate?: number | null,
  ) {
    if (this.basket === undefined) {
      this.basket = [];
    }

    this.basket = [
      ...this.basket,
      {
        name,
        amount,
        quantity,
        description: description || undefined,
        vatRate: vatRate || undefined,
      },
    ];
  }

  public getPsp() {
    return this.psp;
  }

  /**
   * @param psp List of PSPs to provide for payment. If empty all available PSPs are provied
   */
  public setPsp(psp: number[]) {
    this.psp = psp;
  }

  public getPm() {
    return this.pm;
  }

  /**
   * @param pm List of payment mean names to display
   */
  public setPm(pm: string[]) {
    this.pm = pm;
  }

  public getPreAuthorization() {
    return this.preAuthorization;
  }

  /**
   * @param preAuthorization Whether charge payment manually at a later date (type authorization)
   */
  public setPreAuthorization(preAuthorization: boolean) {
    this.preAuthorization = preAuthorization;
  }

  public getReservation() {
    return this.reservation;
  }

  /**
   * @param reservation Whether charge payment manually at a later date (type reservation)
   */
  public setReservation(reservation: boolean) {
    this.reservation = reservation;
  }

  public getReferenceId() {
    return this.referenceId;
  }

  /**
   * @param referenceId An internal reference id used by your system
   */
  public setReferenceId(referenceId: string) {
    this.referenceId = referenceId;
  }

  public getConcardisOrderId() {
    return this.concardisOrderId;
  }

  /**
   * @param concardisOrderId Only available for Concardis PSP and if the custom ORDERID option is activated in PSP settings in Payrexx administration. This ORDERID will be transferred to the Payengine
   */
  public setConcardisOrderId(concardisOrderId: string) {
    this.concardisOrderId = concardisOrderId;
  }

  public getFields() {
    return this.fields;
  }

  /**
   * The contact data fields which should be stored along with payment
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

  public getSkipResultPage() {
    return this.skipResultPage;
  }

  /**
   * @param skipResultPage Skip result page and directly redirect to success or failed URL
   */
  public setSkipResultPage(skipResultPage: boolean) {
    this.skipResultPage = skipResultPage;
  }

  public getChargeOnAuthorization() {
    return this.chargeOnAuthorization;
  }

  /**
   * @param chargeOnAuthorization preAuthorization needs to be "true". This will charge the authorization during the first payment
   */
  public setChargeOnAuthorization(chargeOnAuthorization: boolean) {
    this.chargeOnAuthorization = chargeOnAuthorization;
  }

  public getValidity() {
    return this.validity;
  }

  /**
   * @param validity Gateway validity in minutes
   */
  public setValidity(validity: number) {
    this.validity = validity;
  }

  public getSubscriptionState() {
    return this.subscriptionState;
  }

  /**
   * @param subscriptionState Defines whether the payment should be handled as subscription
   */
  public setSubscriptionState(subscriptionState: boolean) {
    this.subscriptionState = subscriptionState;
  }

  public getSubscriptionInterval() {
    return this.subscriptionInterval;
  }

  /**
   * @param subscriptionInterval Payment interval
   */
  public setSubscriptionInterval(subscriptionInterval: string) {
    this.subscriptionInterval = subscriptionInterval;
  }

  public getSubscriptionPeriod() {
    return this.subscriptionPeriod;
  }

  /**
   * @param subscriptionPeriod Duration of the subscription
   */
  public setSubscriptionPeriod(subscriptionPeriod: string) {
    this.subscriptionPeriod = subscriptionPeriod;
  }

  public getSubscriptionCancellationInterval() {
    return this.subscriptionCancellationInterval;
  }

  /**
   * @param subscriptionCancellationInterval Defines the period, in which a subscription can be canceled
   */
  public setSubscriptionCancellationInterval(
    subscriptionCancellationInterval: string,
  ) {
    this.subscriptionCancellationInterval = subscriptionCancellationInterval;
  }

  public getButtonText() {
    return this.buttonText;
  }

  /**
   * @param buttonText Change the default button Text "Pay" to a custom String
   */
  public setButtonText(buttonText: string[]) {
    this.buttonText = buttonText;
  }

  public getLookAndFeelProfile() {
    return this.lookAndFeelProfile;
  }

  /**
   * @param lookAndFeelProfile UUID of the look and feel profile to use
   */
  public setLookAndFeelProfile(lookAndFeelProfile: string) {
    this.lookAndFeelProfile = lookAndFeelProfile;
  }

  public getSuccessMessage() {
    return this.successMessage;
  }

  /**
   * @param successMessage Custom success message on result page
   */
  public setSuccessMessage(successMessage: string) {
    this.successMessage = successMessage;
  }

  public getQrCodeSessionId() {
    return this.qrCodeSessionId;
  }

  /**
   * @param qrCodeSessionId Holds the session ID of a scanned QR code. Only available and needed for Static QR Code with Twint.
   */
  public setQrCodeSessionId(qrCodeSessionId: string) {
    this.qrCodeSessionId = qrCodeSessionId;
  }
}

type BasketItem = {
  name: string[];
  description?: string[];
  quantity: number;
  amount: number;
  vatRate?: number;
};

type RequestField = {
  value: string;
  name?: string[];
};

export type { GatewayResponse };

export { GatewayRequest };
