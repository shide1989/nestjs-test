import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RatesEntity } from './rates.entity';
import { FindConditions, FindManyOptions, Repository } from 'typeorm/index';

@Injectable()
export class RatesService {
  constructor(
    @InjectRepository(RatesEntity)
    private readonly rateRepository: Repository<RatesEntity>,
  ) {}

  public async create(data: Partial<RatesEntity>) {
    const newData = await this.rateRepository.create(data);
    await this.rateRepository.save(newData);
    return newData;
  }

  async delete(id: string): Promise<void> {
    await this.rateRepository.delete(id);
  }

  public async findOne(options?: FindConditions<RatesEntity>) {
    return this.rateRepository.findOne(options);
    /*return [
      {
        currency: 'EUR',
        exchangeRates: {
          hidden: 169,
          ATOM: '0.424071343440605746106400675170941',
          BAT: '5.45033079179784900949478990312375',
          BCH: '0.004767580452920143',
          BTC: '0.00012058718724959318',
          DAI: '1.08467421677632052809526849853785',
          DASH: '0.0149627400784500453107792372206235',
          EOS: '0.4279905842071474',
          ETC: '0.16687526074259493',
          ETH: '0.005333760034136064',
          EUR: '1.0',
          KNC: '1.6082876773947607458458260399119',
          LINK: '0.28202219704775699591930074445439',
          LTC: '0.025236593059936908',
          OMG: '0.6458698921004149',
          OXT: '5.7049409346456594408855579227127',
          REP: '0.087484914533294646497586523261762',
          USDC: '1.0904994596575177',
          XLM: '16.426295213377575',
          XRP: '5.535566011624688',
          XTZ: '0.400300807450817740066731590488568',
          ZEC: '0.0238074328055347157288311933906692',
          ZRX: '3.358544809704851',
        },
        createdAt: '2020-05-24T16:06:01+02:00',
      },
    ]*/
  }

  public async findAll(options?: FindManyOptions<RatesEntity>): Promise<RatesEntity[]> {
    return await this.rateRepository.find(options);
  }
  /*async getExchangeRates: (
    baseCurrency: string,
    currencies: Array<string>
  ) => Promise<ExchangeRate> = async (baseCurrency = 'EUR', currencies) => {
    const rates = await Client.getExchangeRates({ currency: baseCurrency })
    const newRates: { hidden: number } = Object.entries(rates.data.rates).reduce(
      (sum, [key, value]) => ({
        ...sum,
        [currencies.includes(key) ? key : 'hidden']: currencies.includes(key)
          ? value
          : sum.hidden + 1,
      }),
      { hidden: 0 }
    )
    return {
      currency: baseCurrency,
      exchangeRates: newRates,
      createdAt: moment().format(),
    }
  }

  async getAccounts = async (withBalance?: boolean) => {
    return Client.getAccounts(withBalance)
  }
  async storeRates: (
    rates: ExchangeRate
  ) => Promise<ExchangeRateDoc> = async (rates) => {
    const rate = new ExchangeRateModel(rates)
    const result = await rate.save() //await Mongo.create('cryptobot', 'rates', rates)
    console.log('storeRates result', result)
    return result
  }*/
}
