import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type ProductUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  gender?: string | null;
  material?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
  price?: number | null;
  seller?: SellerWhereUniqueInput | null;
  size?: string | null;
};
