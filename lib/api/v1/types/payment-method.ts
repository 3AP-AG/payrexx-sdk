import { Response } from '../../interface/response';

interface PaymentMethodsResponse extends Response {
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

export type { PaymentMethodResponse, PaymentMethodsResponse };
