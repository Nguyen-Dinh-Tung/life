import { Module } from '@nestjs/common';
import { GatewayApiController } from './gateway-api.controller';
import { GatewayApiService } from './gateway-api.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [GatewayApiController],
  providers: [GatewayApiService],
})
export class GatewayApiModule {}
