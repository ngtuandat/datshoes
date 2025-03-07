export interface Voucher {
  code: string;
  discount: number;
  expiryDate: string;
  userId: string;
}

export interface VoucherReq {
  discount: number;
  expiryDate: Date;
}

export interface VoucherValidator {
  discount: number;
  expiryDate: string;
  quantity: number;
}
export interface CategoryValidator {
  name: string;
}

export interface DataVoucherProps {
  id: string;
  code: string;
  discount: number;
  expiryDate: string;
  createdAt: string;
  updatedAt: string;
}
