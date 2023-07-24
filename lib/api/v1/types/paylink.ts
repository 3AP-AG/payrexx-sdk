interface PaylinkResponse {
  status: string;
  data: Partial<PaylinkData>[];
}

interface PaylinkData {
  id: number;
  hash: string;
  referenceId: string;
  link: string;
  invoices: [];
  preAuthorization: number;
  reservation: number;
  name: string;
  api: boolean;
  fields: Record<FieldKey, Field>;
  psp: string | number[];
  pm: string[];
  purpose: string;
  amount: number;
  vatRate: number;
  currency: string;
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
  'header', // custom field
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

interface PaylinkRequest {
  title: string[];
  description: string;
  referenceId: string;
  purpose: string[];
  amount: number;
  currency: string;
  vatRate?: number;
  expirationDate?: string;
  ApiSignature?: string;
  pm?: string[];
  fields?: string[];
  hideFields?: boolean;
}

export type { PaylinkRequest, PaylinkResponse };
