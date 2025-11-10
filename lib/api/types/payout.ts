import { Response } from '../interface/response';

interface PayoutResponse extends Response {
  data: PayoutData;
}

interface PayoutsResponse extends Response {
  data: PayoutData[];
}

type PayoutData = {
  uuid: string;
  object: string;
  amount: number;
  total_fees: number;
  currency: string;
  date: string;
  statement: string;
  status: string;
  destination: DestinationData;
  transfers: any[];
  merchant: MerchantData;
};

type DestinationData = {
  type: string;
  iban: string;
  account_holder: string;
};

type MerchantData = {
  name: string;
  site_title: string;
  owner: OwnerData;
};

type OwnerData = {
  company: string;
  first_name: string;
  last_name: string;
  address: string;
  zip: string;
  place: string;
  email: string;
};

export type { PayoutResponse, PayoutsResponse };
