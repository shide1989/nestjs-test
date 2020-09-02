import { Injectable } from '@nestjs/common';

import {
  Client,
  Account,
  ExchangeRate,
  Currencies,
  Price,
  Buy,
} from 'coinbase';
import { ClientTypes } from './types';

const _client = new Client({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
  strictSSL: false,
});
const _accountsWithBalance = (a: Account) => Number(a.balance.amount) > 0;

@Injectable()
export class CoinbaseService {
  buyResource = (
    account: Account,
    resource: { currency: string; amount: string },
  ) =>
    new Promise((res, rej) =>
      account.buy({ ...resource, commit: false }, (err, result: Buy) =>
        err ? rej(err) : res(result),
      ),
    );
  getSellPrice: (args?: ClientTypes.CurrencyPair) => Promise<Price> = ({
    currencyPair = 'XLM-EUR',
  } = {}) =>
    new Promise((res, rej) => {
      console.log('[getSellPrice] currencypair:', currencyPair);
      _client.getSellPrice({ currencyPair }, (err: Error, obj: Price) =>
        err ? rej(err) : res(obj),
      );
    });
  getBuyPrice: (args?: ClientTypes.CurrencyPair) => Promise<Price> = ({
    currencyPair = 'XLM-EUR',
  } = {}) =>
    new Promise((res, rej) => {
      console.log('[getBuyPrice] currencypair:', currencyPair);
      _client.getBuyPrice({ currencyPair }, (err: Error, obj: Price) =>
        err ? rej(err) : res(obj),
      );
    });

  getExchangeRates: (args?: { currency?: string }) => Promise<ExchangeRate> = ({
    currency = 'EUR',
  } = {}): Promise<ExchangeRate> =>
    new Promise((res, rej) => {
      console.log('[getExchangeRates] currency', currency);
      _client.getExchangeRates(
        { currency },
        (err: Error, exchangeRate: ExchangeRate) =>
          err ? rej(err) : res(exchangeRate),
      );
    });
  getAccounts: (withBalance?: boolean) => Promise<Account[]> = (
    withBalance = true,
  ) =>
    new Promise((res, rej) => {
      _client.getAccounts({}, (err: Error, accounts: Account[]) =>
        err
          ? rej(err)
          : res(withBalance ? accounts.filter(_accountsWithBalance) : accounts),
      );
    });
}
