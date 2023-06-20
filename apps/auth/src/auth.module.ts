import { Module } from '@nestjs/common';
import { AuthController } from './auth/controllers/auth.controller';
import { AuthService } from './auth/services/auth.service';
import { ConfigModule } from '@nestjs/config';
import {
  CLIENT_APP_NAME,
  SERVICE_INFO,
  WinstonModule,
  createClientProxyFactory,
} from '@app/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot(),
    WinstonModule.register(process.env.AUTH_APP),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    createClientProxyFactory(
      CLIENT_APP_NAME.ACOUNTS,
      SERVICE_INFO.ACOUNTS.PORT,
      SERVICE_INFO.ACOUNTS.HOST,
    ),
  ],
})
export class AuthModule {}
