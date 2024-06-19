import { SellerWhereInput } from "./SellerWhereInput";
import { SellerOrderByInput } from "./SellerOrderByInput";

export type SellerFindManyArgs = {
  where?: SellerWhereInput;
  orderBy?: Array<SellerOrderByInput>;
  skip?: number;
  take?: number;
};
