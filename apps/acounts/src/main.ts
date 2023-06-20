import { NestFactory } from '@nestjs/core';
import { AcountsModule } from './acounts.module';

async function bootstrap() {
  const app = await NestFactory.create(AcountsModule);
  await app.listen(3000);
}
bootstrap();
