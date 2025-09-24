import type { ExchangeRate } from '../types/ExchangeRate';
import type { ExchangeRates } from '../types/ExchangeRates';

const parseDate = (dateLine: string) => {
  const monthMap: Record<string, number> = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
  };

  const [dayStr, monthStr, yearStr] = dateLine.split(' ');
  const day = parseInt(dayStr, 10);
  const year = parseInt(yearStr, 10);
  const month = monthMap[monthStr as keyof typeof monthMap];

  const date = new Date(Date.UTC(year, month, day));
  return date;
}

export const parseExchangeRates = (text: string): ExchangeRates => {
  const lines = text.trim().split('\n');
  const [dateLine, _, ...dataLines] = lines;

  // Extract and format date
  const date = parseDate(dateLine);

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

  return {
    date: date,
    rates: exchangeRates
  };
};
