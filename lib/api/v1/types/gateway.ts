interface GatewayResponse {
  status: string;
  data: [];
  message: string;
}

interface GatewayRequest {
  /**
   * Amount of payment in cents.
   */
  amount: number;
  /**
   * Currency of payment (ISO code).
   */
  currency: string;
  /**
   * VAT Rate Percentage
   */
  vatRate: number;
  /**
   * Product stock keeping unit
   */
  sku: string;
}

export type { GatewayResponse, GatewayRequest };
