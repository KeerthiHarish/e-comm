import { ProductUpdateManyWithoutSellersInput } from "./ProductUpdateManyWithoutSellersInput";

export type SellerUpdateInput = {
  businessName?: string | null;
  contactInformation?: string | null;
  products?: ProductUpdateManyWithoutSellersInput;
};
