import type { ExchangeRate } from "./ExchangeRate";

export interface ExchangeRates {
  date: Date;
  rates: ExchangeRate[];
}