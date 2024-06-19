import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SellerServiceBase } from "./base/seller.service.base";

@Injectable()
export class SellerService extends SellerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
