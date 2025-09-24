import { getConvertedAmount } from "./getConvertedAmount";

describe('getConvertedAmount', () => {
  it('returns 0 if amount is undefined', () => {
    expect(getConvertedAmount(undefined, 10)).toBe(0);
  });

  it('returns 0 if rate is undefined', () => {
    expect(getConvertedAmount(10, undefined)).toBe(0);
  });

  it('returns 0 if both are undefined', () => {
    expect(getConvertedAmount(undefined, undefined)).toBe(0);
  });

  it('returns correct converted amount', () => {
    expect(getConvertedAmount(1.1111, 2.2222)).toBe(0.5);
  });

  it('rounds to 4 decimal places', () => {
    expect(getConvertedAmount(10, 23.5)).toBeCloseTo(0.4255, 4);
  });
});
