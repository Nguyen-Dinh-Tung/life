import { Module } from '@nestjs/common';
import { AcountsController } from './acounts/controllers/acounts.controller';
import { AcountsService } from './acounts/services/acounts.service';
import { DatabaseModule, MorganModule, WinstonModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    WinstonModule.register(process.env.ACOUNTS_APP),
    MorganModule,
  ],
  controllers: [AcountsController],
  providers: [AcountsService],
})
export class AcountsModule {}
