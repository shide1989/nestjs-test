import { Module } from '@nestjs/common';
import { CoreService } from './core.service';
import { RatesModule } from './rates/rates.module';

@Module({
  providers: [CoreService],
  exports: [CoreService, RatesModule],
  imports: [RatesModule],
})
export class CoreModule {}
