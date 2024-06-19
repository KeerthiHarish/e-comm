import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SellerService } from "./seller.service";
import { SellerControllerBase } from "./base/seller.controller.base";

@swagger.ApiTags("sellers")
@common.Controller("sellers")
export class SellerController extends SellerControllerBase {
  constructor(
    protected readonly service: SellerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
