import { parseExchangeRates } from './parseExchangeRates';
import type { ExchangeRate } from '../types/ExchangeRate';

const sampleText = `22 Sep 2025 #184
Country|Currency|Amount|Code|Rate
Australia|dollar|1|AUD|13.574
Brazil|real|1|BRL|3.855
Bulgaria|lev|1|BGN|12.377
Canada|dollar|1|CAD|14.904`;

describe('parseExchangeRates', () => {
  it('parses CNB exchange rates text correctly', () => {
    const expectedRates: ExchangeRate[] = [
      { country: 'Australia', currency: 'dollar', amount: 1, code: 'AUD', rate: 13.574 },
      { country: 'Brazil', currency: 'real', amount: 1, code: 'BRL', rate: 3.855 },
      { country: 'Bulgaria', currency: 'lev', amount: 1, code: 'BGN', rate: 12.377 },
      { country: 'Canada', currency: 'dollar', amount: 1, code: 'CAD', rate: 14.904 },
    ];

    const result = parseExchangeRates(sampleText);

    const expectedDate = new Date(Date.UTC(2025, 8, 22));
    expect(result.date.toISOString()).toBe(expectedDate.toISOString());
    expect(result.rates).toEqual(expectedRates);
  });
});
