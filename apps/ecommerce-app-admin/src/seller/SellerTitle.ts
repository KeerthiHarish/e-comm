import { Seller as TSeller } from "../api/seller/Seller";

export const SELLER_TITLE_FIELD = "businessName";

export const SellerTitle = (record: TSeller): string => {
  return record.businessName?.toString() || String(record.id);
};
