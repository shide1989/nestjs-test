import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RateModule } from './rate/rate.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './db/db.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    RateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
