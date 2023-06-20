import { Controller, UseInterceptors } from '@nestjs/common';
import { AcountsService } from '../services/acounts.service';
import { MessagePattern } from '@nestjs/microservices';
import { LogPatternTcp } from '@app/common/modules/logs/log-tcp.interceptor.';
import { FindAcountByFieldDto } from '../dto/find-acount-by-field.dto';
import { MESSAGE_PATTERN } from '@app/common';
import { CheckRolesDto } from '../dto/check-roles.dto';

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
  @MessagePattern({ cmd: MESSAGE_PATTERN.acounts.roles })
  async checkRoles(data: CheckRolesDto) {
    return await this.acountsService.findRoles(data);
  }
}
