import { NestFactory } from '@nestjs/core';
import { LoadBalancingModule } from './load-balancing.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(LoadBalancingModule);
  const configService = app.get(ConfigService);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: configService.get<string>('MAIN_HOST'),
      port: configService.get<number>('LOAD_BALANCING_PORT'),
    },
  });
  await app.startAllMicroservices();
  console.log(
    `Server load balancing connect port : ${configService.get<number>(
      'LOAD_BALANCING_PORT',
    )}`,
  );
}
bootstrap();
