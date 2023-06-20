import { Injectable } from '@nestjs/common';

@Injectable()
export class AcountsService {
  getHello(): string {
    return 'Hello World!';
  }
}
