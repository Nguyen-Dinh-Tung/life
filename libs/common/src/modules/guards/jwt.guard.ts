import {
  CLIENT_APP_NAME,
  MESSAGE_PATTERN,
  SERVICE_INFO,
} from '@app/common/constants';
import { createClientProxyFactory } from './../../funcs/create-client-proxy';
import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ClientProxy, TcpContext } from '@nestjs/microservices';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuards implements CanActivate {
  constructor(
    @Inject(CLIENT_APP_NAME.ACOUNTS)
    private readonly acountClientProxy: ClientProxy,
    private readonly jwtService: JwtService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const pattern = JSON.parse(
      context.switchToRpc().getContext<TcpContext>().getPattern(),
    );
    const req = context.switchToHttp().getRequest();
    if (MESSAGE_PATTERN[req['service']][pattern['cmd']]['isPublic'])
      return true;
    try {
      const data = await this.jwtService.verifyAsync(req['jwt']);
      console.log(data, 'data');
    } catch (e) {
      if (e) throw new UnauthorizedException();
    }
    return true;
  }
}
