import { Module } from '@nestjs/common';
import { LoadBalancingController } from './load-balancing.controller';
import { LoadBalancingService } from './load-balancing.service';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from '@app/common';

@Module({
  imports: [
    ConfigModule.forRoot(),
    WinstonModule.register(process.env.LOAD_BALANCING_APP),
  ],
  controllers: [LoadBalancingController],
  providers: [LoadBalancingService],
})
export class LoadBalancingModule {}
