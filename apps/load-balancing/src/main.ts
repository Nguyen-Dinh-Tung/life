import { NestFactory } from '@nestjs/core';
import { LoadBalancingModule } from './load-balancing.module';

async function bootstrap() {
  const app = await NestFactory.create(LoadBalancingModule);
  await app.listen(3000);
}
bootstrap();
