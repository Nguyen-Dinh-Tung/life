import { Controller, Get } from '@nestjs/common';
import { AcountsService } from './acounts.service';

@Controller()
export class AcountsController {
  constructor(private readonly acountsService: AcountsService) {}

  @Get()
  getHello(): string {
    return this.acountsService.getHello();
  }
}
