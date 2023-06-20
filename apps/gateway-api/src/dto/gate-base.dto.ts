import { METHOD_CLIENT_PROXY } from '@app/common/enums/method-client-proxy.enum';
import { SERVICE_ENUM } from 'apps/gateway-api/common/enums/service.enum';
import { IsNotEmpty, IsEnum, IsString, IsOptional } from 'class-validator';

export class GateBaseDto {
  @IsNotEmpty()
  @IsEnum(SERVICE_ENUM)
  service: SERVICE_ENUM;
  @IsNotEmpty()
  @IsEnum(METHOD_CLIENT_PROXY)
  method: METHOD_CLIENT_PROXY;
  @IsNotEmpty()
  @IsString()
  cmd: string;
  @IsOptional()
  body: any;
}
