import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type ProductCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  gender?: string | null;
  material?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
  price?: number | null;
  seller?: SellerWhereUniqueInput | null;
  size?: string | null;
};
