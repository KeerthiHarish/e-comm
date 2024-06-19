import { ProductCreateNestedManyWithoutSellersInput } from "./ProductCreateNestedManyWithoutSellersInput";

export type SellerCreateInput = {
  businessName?: string | null;
  contactInformation?: string | null;
  products?: ProductCreateNestedManyWithoutSellersInput;
};
