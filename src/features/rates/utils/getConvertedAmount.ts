export const getConvertedAmount = (amount?: number, rate?: number) => {
    if(amount === undefined || rate === undefined) {
      return 0;
    }
    return parseFloat((amount / rate).toFixed(4));
  }