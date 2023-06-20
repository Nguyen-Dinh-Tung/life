import { Inject, Injectable } from '@nestjs/common';
import { GateBaseDto } from '../dto/gate-base.dto';
import { CLIENT_APP_NAME } from '@app/common';
import { ClientProxy } from '@nestjs/microservices';
import { SERVICE_ENUM } from 'apps/gateway-api/common/enums/service.enum';

@Injectable()
export class GatewayApiService {
  constructor(
    @Inject(CLIENT_APP_NAME.ACOUNTS)
    private readonly acountsClientProxy: ClientProxy,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  gateBase(data: GateBaseDto) {
    console.log(this.getService(data.service));
  }
  getService(service: SERVICE_ENUM) {
    const services = {
      acounts: this.acountsClientProxy,
    };
    return services[service];
  }
}
