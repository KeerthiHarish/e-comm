import { Product } from "../product/Product";

export type Seller = {
  businessName: string | null;
  contactInformation: string | null;
  createdAt: Date;
  id: string;
  products?: Array<Product>;
  updatedAt: Date;
};
