import { Injectable } from '@nestjs/common';

@Injectable()
export class LoadBalancingService {
  getHello(): string {
    return 'Hello World!';
  }
}
