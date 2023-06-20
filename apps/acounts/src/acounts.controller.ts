import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AcountsService } from './acounts.service';
import { MessagePattern } from '@nestjs/microservices';
import { LogPatternTcp } from '@app/common/modules/logs/log-tcp.interceptor.';

@Controller('acounts')
@UseInterceptors(LogPatternTcp)
export class AcountsController {
  constructor(private readonly acountsService: AcountsService) {}
  @MessagePattern({ cmd: 'find-all' })
  async findAll() {
    return await this.acountsService.findAll();
  }
}
