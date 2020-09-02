import { Body, Controller, Get, Post } from '@nestjs/common';
import { RateService } from './rate.service';
import { RateEntity } from './rate.entity';
import { FindConditions } from 'typeorm/index';

@Controller('rates')
export class RateController {
  constructor(private readonly rateService: RateService) {}

  @Post()
  async create(@Body() createRateData: Partial<RateEntity>) {
    await this.rateService.save(createRateData);
  }

  @Get()
  async listRates(options?: FindConditions<RateEntity>): Promise<RateEntity[]> {
    return this.rateService.find(options);
  }
}
