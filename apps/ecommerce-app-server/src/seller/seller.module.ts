import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SellerModuleBase } from "./base/seller.module.base";
import { SellerService } from "./seller.service";
import { SellerController } from "./seller.controller";
import { SellerResolver } from "./seller.resolver";

@Module({
  imports: [SellerModuleBase, forwardRef(() => AuthModule)],
  controllers: [SellerController],
  providers: [SellerService, SellerResolver],
  exports: [SellerService],
})
export class SellerModule {}
