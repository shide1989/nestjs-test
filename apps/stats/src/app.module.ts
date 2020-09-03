import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './db/db.module';
import { RatesModule } from '@app/core/rates/rates.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    RatesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
