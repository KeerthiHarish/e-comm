import { Category } from "../category/Category";
import { Order } from "../order/Order";
import { Seller } from "../seller/Seller";

export type Product = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  gender: string | null;
  id: string;
  material: string | null;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  seller?: Seller | null;
  size: string | null;
  updatedAt: Date;
};
