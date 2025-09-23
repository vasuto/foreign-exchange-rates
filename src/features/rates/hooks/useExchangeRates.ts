import { useQuery } from '@tanstack/react-query';
import type { ExchangeRate } from '../types/ExchangeRate';
import { fetchExchangeRates } from '../api/fetchExchangeRates';

export const useExchangeRates = () => {
  return useQuery<ExchangeRate[]>({
    queryKey: ['exchangeRates'],
    queryFn: fetchExchangeRates,
  });
};
