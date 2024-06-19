import { SortOrder } from "../../util/SortOrder";

export type SellerOrderByInput = {
  businessName?: SortOrder;
  contactInformation?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
