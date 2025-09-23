import type { ExchangeRate } from '../types/ExchangeRate';

export const parseExchangeRates = (text: string): ExchangeRate[] => {
  const lines = text.trim().split('\n');

  // Remove header
  const dataLines = lines.slice(2);

  const exchangeRates: ExchangeRate[] = dataLines.map(line => {
    const [country, currency, amountStr, code, rateStr] = line.split('|');

    return {
      country: country.trim(),
      currency: currency.trim(),
      amount: parseInt(amountStr.trim(), 10),
      code: code.trim(),
      rate: parseFloat(rateStr.trim()),
    };
  });

  return exchangeRates;
};
