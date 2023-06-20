import { NestFactory } from '@nestjs/core';
import { GatewayApiModule } from './gateway-api.module';

async function bootstrap() {
  const app = await NestFactory.create(GatewayApiModule);
  await app.listen(3000);
}
bootstrap();
