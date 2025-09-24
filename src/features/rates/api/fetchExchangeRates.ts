import type { ExchangeRate } from '../types/ExchangeRate';
import { parseExchangeRates } from '../utils/parseExchangeRates';

const baseUrl =
  typeof process !== 'undefined' && process.env.VITE_API_BASE_URL
    ? process.env.VITE_API_BASE_URL
    : window.location.origin;


export const fetchExchangeRates = async (): Promise<ExchangeRate[]> => {
  const response = await fetch(`${baseUrl}/api/rates/daily`);
  const text = await response.text();

  return parseExchangeRates(text); 
};