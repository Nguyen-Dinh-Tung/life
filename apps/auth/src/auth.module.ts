import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from '@app/common';

@Module({
  imports: [
    ConfigModule.forRoot(),
    WinstonModule.register(process.env.AUTH_APP),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
