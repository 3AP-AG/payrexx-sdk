import { PayrexxClient } from './api/client';
import {
  TransactionResponse,
  TransactionRequest,
  ChargeRequest,
} from './api/v1/types/transaction';
import { PaylinkRequest, PaylinkResponse } from './api/v1/types/paylink';
import { GatewayRequest, GatewayResponse } from './api/v1/types/gateway';
import { QrCodeRequest, QrCodeResponse } from './api/v1/types/qrcode';
import { PaymentProviderResponse } from './api/v1/types/payment-provider';
import {
  PaymentMethodResponse,
  PaymentMethodsResponse,
} from './api/v1/types/payment-method';
import { PayoutResponse, PayoutsResponse } from './api/v1/types/payout';
import { DesignResponse } from './api/v1/types/design';

export {
  PayrexxClient,
  PaylinkRequest,
  GatewayRequest,
  QrCodeRequest,
  TransactionRequest,
};
export type {
  PaylinkResponse,
  GatewayResponse,
  QrCodeResponse,
  PaymentProviderResponse,
  PaymentMethodResponse,
  PaymentMethodsResponse,
  PayoutResponse,
  PayoutsResponse,
  TransactionResponse,
  ChargeRequest,
  DesignResponse,
};
