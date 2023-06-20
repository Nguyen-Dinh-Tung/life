import { NestFactory } from '@nestjs/core';
import { AcountsModule } from './acounts.module';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AcountsModule);
  const configService = app.get(ConfigService);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: configService.get<string>('MAIN_HOST'),
      port: configService.get<number>('ACOUNT_PORT'),
    },
  });
  await app.startAllMicroservices();
  console.log(
    `Server acounts connect port : ${configService.get<number>('ACOUNT_PORT')}`,
  );
}
bootstrap();
