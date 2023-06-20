import { Module } from '@nestjs/common';
import { LoadBalancingController } from './load-balancing.controller';
import { LoadBalancingService } from './load-balancing.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [LoadBalancingController],
  providers: [LoadBalancingService],
})
export class LoadBalancingModule {}
