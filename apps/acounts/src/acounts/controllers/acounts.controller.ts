import { Body, Controller, Get, UseInterceptors } from '@nestjs/common';
import { AcountsService } from '../services/acounts.service';
import { MessagePattern } from '@nestjs/microservices';
import { LogPatternTcp } from '@app/common/modules/logs/log-tcp.interceptor.';
import { FindAcountByFieldDto } from '../dto/find-acount-by-field.dto';

@Controller('acounts')
@UseInterceptors(LogPatternTcp)
export class AcountsController {
  constructor(private readonly acountsService: AcountsService) {}
  @MessagePattern({ cmd: 'find-all' })
  async findAll() {
    return await this.acountsService.findAll();
  }
  @MessagePattern({ cmd: 'find-one-acount-by-field' })
  async findByField(data: FindAcountByFieldDto) {
    return await this.acountsService.findAcountByField(data);
  }
}
