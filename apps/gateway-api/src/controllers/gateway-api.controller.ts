import { Controller, Get, Post, Body } from '@nestjs/common';
import { GatewayApiService } from '../services/gateway-api.service';
import { GateBaseDto } from '../dto/gate-base.dto';

@Controller('gateway-api')
export class GatewayApiController {
  constructor(private readonly gatewayApiService: GatewayApiService) {}
  @Get()
  getHello(): string {
    return this.gatewayApiService.getHello();
  }
  @Post()
  async gateBase(@Body() data: GateBaseDto) {
    return this.gatewayApiService.gateBase(data);
  }
}
