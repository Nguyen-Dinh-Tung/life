import { Module } from '@nestjs/common';
import { GatewayApiController } from './controllers/gateway-api.controller';
import { GatewayApiService } from './services/gateway-api.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SERVICE_INFO, WinstonModule } from '@app/common';
import { CLIENT_APP_NAME } from '@app/common/constants/client-app-name.constant';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ConfigModule.forRoot(),
    WinstonModule.register(process.env.GATEWAY_APP),
  ],
  controllers: [GatewayApiController],
  providers: [
    GatewayApiService,
    {
      provide: CLIENT_APP_NAME.ACOUNTS,
      useFactory: () =>
        ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            port: SERVICE_INFO.ACOUNTS.PORT,
            host: SERVICE_INFO.ACOUNTS.HOST,
          },
        }),
    },
  ],
})
export class GatewayApiModule {}
