import { Product } from "../product/Product";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  orderedAt: Date | null;
  product?: Product | null;
  quantity: number | null;
  updatedAt: Date;
  user?: User | null;
};
