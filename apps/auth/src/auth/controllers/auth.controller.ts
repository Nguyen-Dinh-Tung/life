import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { MessagePattern } from '@nestjs/microservices';
import { LoginDto } from '../dto/login.dto';
import { AuthGuards } from '@app/common/modules/guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @MessagePattern({ cmd: 'login' })
  @UseGuards(AuthGuards)
  async login(data: LoginDto) {
    return await this.authService.login(data);
  }
}
