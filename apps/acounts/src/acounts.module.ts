import { Module } from '@nestjs/common';
import { AcountsController } from './acounts.controller';
import { AcountsService } from './acounts.service';
import { DatabaseModule, MorganModule, WinstonModule } from '@app/common';

@Module({
  imports: [
    DatabaseModule,
    WinstonModule.register(process.env.ACOUNTS_APP),
    MorganModule,
  ],
  controllers: [AcountsController],
  providers: [AcountsService],
})
export class AcountsModule {}
