import { NestFactory } from '@nestjs/core';
import { GatewayApiModule } from './gateway-api.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(GatewayApiModule);
  const configService = app.get(ConfigService);
  app.enableCors();
  app.setGlobalPrefix('api');
  await app.listen(configService.get<number>('GATEWAY_PORT'));
  console.log(
    `Server gateway connect port : ${configService.get<number>(
      'GATEWAY_PORT',
    )}`,
  );
}

bootstrap();
