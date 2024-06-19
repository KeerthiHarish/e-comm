import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  gender?: SortOrder;
  id?: SortOrder;
  material?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  sellerId?: SortOrder;
  size?: SortOrder;
  updatedAt?: SortOrder;
};
