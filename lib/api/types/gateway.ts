import { Response } from '../interface/response';

interface GatewayCreateResponse extends Response {
  data: GatewayDataCreate[];
}

interface GatewayRetrieveResponse extends Response {
  data: GatewayDataRetrieve[];
}

interface GatewayDeleteResponse extends Response {
  data: GatewayDataDelete[];
}

type GatewayDataBase = {
  id: number;
  status: string;
  hash: string;
  referenceId: string;
  link: string;
  invoices: any[];
  preAuthorization: number;
  fields: GatewayResponseFields;
  psp: any[];
  pm: any[];
  amount: number;
  vatRate: number;
  currency: string;
  sku: string;
  createdAt: number;
};

type GatewayDataCreate = GatewayDataBase & {
  reservation: number;
};

type GatewayDataRetrieve = GatewayDataBase & {
  applicationFee: number;
};

type GatewayDataDelete = {
  id: number;
};

type ResponseFieldBase = {
  active: boolean;
  mandatory: boolean;
};

type ResponseFieldWithNames = ResponseFieldBase & {
  names?: {
    de?: string;
    en?: string;
    fr?: string;
    it?: string;
  };
};

type GatewayResponseFields = {
  title?: ResponseFieldBase;
  forename?: ResponseFieldBase;
  surname?: ResponseFieldBase;
  company?: ResponseFieldBase;
  street?: ResponseFieldBase;
  postcode?: ResponseFieldBase;
  place?: ResponseFieldBase;
  country?: ResponseFieldBase;
  phone?: ResponseFieldBase;
  email?: ResponseFieldBase;
  date_of_birth?: ResponseFieldBase;
  terms?: ResponseFieldBase;
  privacy_policy?: ResponseFieldBase;
  text?: ResponseFieldWithNames;
};

type RequestFieldValue = {
  value: string;
};

type RequestFieldCustom = {
  value: string;
  name?: string[];
  export_name?: string;
};

type GatewayRequestFields = {
  title?: RequestFieldValue;
  forename?: RequestFieldValue;
  surname?: RequestFieldValue;
  company?: RequestFieldValue;
  street?: RequestFieldValue;
  postcode?: RequestFieldValue;
  place?: RequestFieldValue;
  country?: RequestFieldValue;
  delivery_title?: RequestFieldValue;
  delivery_forename?: RequestFieldValue;
  delivery_surname?: RequestFieldValue;
  delivery_company?: RequestFieldValue;
  delivery_street?: RequestFieldValue;
  delivery_postcode?: RequestFieldValue;
  delivery_place?: RequestFieldValue;
  delivery_country?: RequestFieldValue;
  phone?: RequestFieldValue;
  email?: RequestFieldValue;
  date_of_birth?: RequestFieldValue;
  terms?: string;
  privacy_policy?: string;
  custom_field_1?: RequestFieldCustom;
  custom_field_2?: RequestFieldCustom;
  custom_field_3?: RequestFieldCustom;
  custom_field_4?: RequestFieldCustom;
  custom_field_5?: RequestFieldCustom;
};

/**
 * For detailed information visit https://developers.payrexx.com/reference/create-a-gateway
 */
class GatewayCreateRequest {
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
  private fields?: GatewayRequestFields;
  private language?: string;
  private concardisOrderId?: string;
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
  private applicationFee?: number;
  private reserveOnAuthorization?: boolean;
  private isPriceExclusiveVat?: boolean;

  /**
   * Gateway create request
   * @param amount Amount of payment in cents
   * @param currency Currency of payment (ISO code)
   */
  constructor(
    private amount: number,
    private currency: string,
  ) {}

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

  public getFields() {
    return this.fields;
  }

  /**
   * Set the contact data fields which should be stored along with payment
   * @param fields The fields object
   */
  public setFields(fields: GatewayRequestFields) {
    this.fields = fields;
  }

  public getLanguage() {
    return this.language;
  }

  /**
   * @param language The language ISO code by ISO 639-1
   */
  public setLanguage(language: string) {
    this.language = language;
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

  public getApplicationFee() {
    return this.applicationFee;
  }

  /**
   * @param applicationFee Amount in the smallest unit of the currency
   */
  public setApplicationFee(applicationFee: number) {
    this.applicationFee = applicationFee;
  }

  public getReserveOnAuthorization() {
    return this.reserveOnAuthorization;
  }

  /**
   * @param reserveOnAuthorization preAuthorization needs to be "true". This will create a reservation based on an authorization during the first payment
   */
  public setReserveOnAuthorization(reserveOnAuthorization: boolean) {
    this.reserveOnAuthorization = reserveOnAuthorization;
  }

  public getIsPriceExclusiveVat() {
    return this.isPriceExclusiveVat;
  }

  /**
   * @param isPriceExclusiveVat If set to true the vat will be added on top of amount
   */
  public setIsPriceExclusiveVat(isPriceExclusiveVat: boolean) {
    this.isPriceExclusiveVat = isPriceExclusiveVat;
  }
}

type BasketItem = {
  name: string[];
  description?: string[];
  quantity: number;
  amount: number;
  vatRate?: number;
};

export type {
  GatewayCreateResponse,
  GatewayRetrieveResponse,
  GatewayDeleteResponse,
};

export { GatewayCreateRequest };
