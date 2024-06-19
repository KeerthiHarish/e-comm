import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type ProductWhereInput = {
  category?: CategoryWhereUniqueInput;
  description?: StringNullableFilter;
  gender?: StringNullableFilter;
  id?: StringFilter;
  material?: StringNullableFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  price?: FloatNullableFilter;
  seller?: SellerWhereUniqueInput;
  size?: StringNullableFilter;
};
