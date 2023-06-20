import { Module } from '@nestjs/common';
import { GatewayApiController } from './gateway-api.controller';
import { GatewayApiService } from './gateway-api.service';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from '@app/common';

@Module({
  imports: [
    ConfigModule.forRoot(),
    WinstonModule.register(process.env.GATEWAY_APP),
  ],
  controllers: [GatewayApiController],
  providers: [GatewayApiService],
})
export class GatewayApiModule {}
