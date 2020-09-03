import { Body, Controller, Get, Post } from '@nestjs/common';
import { RatesService } from './rates.service';
import { RatesEntity } from './rates.entity';
import { FindManyOptions } from 'typeorm/index';

@Controller('rates')
export class RatesController {
  constructor(private readonly rateService: RatesService) {}

  @Post()
  async create(@Body() createRateData: Partial<RatesEntity>) {
    await this.rateService.create(createRateData);
  }

  @Get()
  async listRates(
    options?: FindManyOptions<RatesEntity>,
  ): Promise<RatesEntity[]> {
    return this.rateService.findAll(options);
  }
}
