import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const configService = app.get(ConfigService);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: configService.get<string>('MAIN_HOST'),
      port: configService.get<number>('AUTH_PORT'),
    },
  });
  await app.startAllMicroservices();
  console.log(
    `Server auth connect port : ${configService.get<number>('AUTH_PORT')}`,
  );
}
bootstrap();
