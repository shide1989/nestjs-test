import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatesEntity } from './rates.entity';
import { RatesService } from './rates.service';
import { RatesController } from './rates.controller';

@Module({

  imports: [TypeOrmModule.forFeature([RatesEntity])],
  providers: [RatesService],
  controllers: [RatesController],
  exports: [TypeOrmModule]
})
export class RatesModule {}
