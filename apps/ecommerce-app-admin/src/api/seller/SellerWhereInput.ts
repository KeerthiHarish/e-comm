import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type SellerWhereInput = {
  businessName?: StringNullableFilter;
  contactInformation?: StringNullableFilter;
  id?: StringFilter;
  products?: ProductListRelationFilter;
};
