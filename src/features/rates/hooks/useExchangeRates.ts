import { useQuery } from '@tanstack/react-query';
import { fetchExchangeRates } from '../api/fetchExchangeRates';
import type { ExchangeRates } from '../types/ExchangeRates';

export const useExchangeRates = () => {
  return useQuery<ExchangeRates>({
    queryKey: ['exchangeRates'],
    queryFn: fetchExchangeRates,
  });
};
