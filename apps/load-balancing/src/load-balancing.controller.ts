import { Controller, Get } from '@nestjs/common';
import { LoadBalancingService } from './load-balancing.service';

@Controller()
export class LoadBalancingController {
  constructor(private readonly loadBalancingService: LoadBalancingService) {}

  @Get()
  getHello(): string {
    return this.loadBalancingService.getHello();
  }
}
