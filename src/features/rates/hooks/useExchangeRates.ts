import { useQuery } from '@tanstack/react-query';
import type { ExchangeRate } from '../types/ExchangeRate';

const baseUrl = import.meta.env.VITE_API_BASE_URL || window.location.origin

const fetchExchangeRates = async (): Promise<ExchangeRate[]> => {
  const response = await fetch(`${baseUrl}/api/rates/daily`);
  const text = await response.text();

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

export const useExchangeRates = () => {
  return useQuery<ExchangeRate[]>({
    queryKey: ['exchangeRates'],
    queryFn: fetchExchangeRates,
  });
};
