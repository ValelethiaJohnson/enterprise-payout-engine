export type PayoutStatus = 'PENDING' | 'PROCESSING' | 'SETTLED' | 'FAILED' | 'REVERSED';

export type PayoutMethod = 'BANK_TRANSFER' | 'CARD_PAYOUT' | 'WALLETS';

export interface RecipientAccount {
  accountId: string;
  accountHolderName: string;
  bankCode: string;
  accountNumberMasked: string;
  currency: string; // ISO 4217 (e.g., USD, EUR, VND)
}

export interface PayoutInstruction {
  payoutId: string;
  ledgerId: string;
  amount: number; // Stored in minor units (cents) to prevent floating-point errors
  currency: string;
  status: PayoutStatus;
  method: PayoutMethod;
  recipient: RecipientAccount;
  idempotencyKey: string;
  retryCount: number;
  metadata?: Record<string, string>;
  createdAt: string;
  updatedAt: string;
}

export interface PayoutBatchRequest {
  batchId: string;
  totalAmount: number;
  currency: string;
  payouts: PayoutInstruction[];
}
