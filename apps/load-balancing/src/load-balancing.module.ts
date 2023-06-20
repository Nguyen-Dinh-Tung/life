import { Module } from '@nestjs/common';
import { LoadBalancingController } from './load-balancing.controller';
import { LoadBalancingService } from './load-balancing.service';

@Module({
  imports: [],
  controllers: [LoadBalancingController],
  providers: [LoadBalancingService],
})
export class LoadBalancingModule {}
