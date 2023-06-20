import { Inject, Injectable } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';
import { CLIENT_APP_NAME } from '@app/common';
import { ClientProxy } from '@nestjs/microservices';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    @Inject(CLIENT_APP_NAME.ACOUNTS)
    private readonly acountClientProxy: ClientProxy,
    private readonly jwtService: JwtService,
  ) {}
  async login(data: LoginDto) {
    const checkAcount = await this.validateAcount(data.username);
    if (!checkAcount) return false;
    else if (!bcrypt.compareSync(data.password, checkAcount['password']))
      return false;
    return await this.createToken({ id: checkAcount.id });
  }
  async validateAcount(username: string) {
    return await this.acountClientProxy
      .send(
        {
          cmd: 'find-one-acount-by-field',
        },
        { username: username },
      )
      .toPromise();
  }
  async createToken(data: any) {
    return await this.jwtService.signAsync(data);
  }
}
