import { Response } from '../../interface/response';

interface PaymentMethodAllResponse extends Response {
  data: PaymentMethodData[];
}

interface PaymentMethodResponse extends Response {
  data: PaymentMethodData;
}

type PaymentMethodData = {
  id: string;
  name: string;
  label: Record<string, string>;
  logo: Record<string, string>;
  options_by_psp: OptionsByPsp;
};

type OptionsByPsp = {
  mode: string;
  payment_types: string[];
  currencies: string[];
};

/**
 * [Reference](https://developers.payrexx.com/reference/get-all-active-payment-methods)
 */
class PaymentMethodRequest {
  private filterCurrency?: string;
  private filterPaymentType?: string;
  private filterPsp?: number;

  constructor() {}

  public getFilterCurrency() {
    return this.filterCurrency;
  }

  /**
   *
   * @param filterCurrency The currency which is needed (e.g. CHF)
   */
  public setFilterCurrency(filterCurrency: string) {
    this.filterCurrency = filterCurrency;
  }

  public getFilterPaymentType() {
    return this.filterPaymentType;
  }

  /**
   *
   * @param filterPaymentType The payment type which is needed (possible values: one-time, reservation, authorization, subscription
   */
  public setFilterPaymentType(filterPaymentType: string) {
    this.filterPaymentType = filterPaymentType;
  }

  public getFilterPsp() {
    return this.filterPsp;
  }

  /**
   *
   * @param filterPsp The psp to filter for. Pass the ID of the payment service provider
   */
  public setFilterPsp(filterPsp: number) {
    this.filterPsp = filterPsp;
  }
}

export { PaymentMethodRequest };
export type { PaymentMethodResponse, PaymentMethodAllResponse };
