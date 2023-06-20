import { NestFactory } from '@nestjs/core';
import { GatewayApiModule } from './gateway-api.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(GatewayApiModule);
  const configService = app.get(ConfigService);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: configService.get<string>('MAIN_HOST'),
      port: configService.get<number>('GATEWAY_PORT'),
    },
  });
  await app.startAllMicroservices();
  console.log(
    `Server gateway connect port : ${configService.get<number>(
      'GATEWAY_PORT',
    )}`,
  );
}

bootstrap();
