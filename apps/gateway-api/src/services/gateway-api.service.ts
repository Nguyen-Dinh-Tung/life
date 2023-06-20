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
    @Inject(CLIENT_APP_NAME.AUTH_APP)
    private readonly authClientProxy: ClientProxy,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  async gateBase(data: GateBaseDto) {
    return await this.getService(data.service)
      [data.method]({ cmd: data.cmd }, data.body)
      .toPromise();
  }
  getService(service: SERVICE_ENUM): ClientProxy {
    const services = {
      acounts: this.acountsClientProxy,
      auth: this.authClientProxy,
    };
    return services[service];
  }
}
