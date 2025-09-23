// components/ExchangeRatesTable.tsx
import React from 'react';
import { useExchangeRates } from '../hooks/useExchangeRates';
import type { ExchangeRate } from '../types/ExchangeRate';

const ExchangeRatesTable = () => {
  const { data, isLoading, error } = useExchangeRates();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading exchange rates.</p>;

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Country</th>
          <th>Currency</th>
          <th>Amount</th>
          <th>Code</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((rate: ExchangeRate, index: number) => (
          <tr key={index}>
            <td>{rate.country}</td>
            <td>{rate.currency}</td>
            <td>{rate.amount}</td>
            <td>{rate.code}</td>
            <td>{rate.rate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExchangeRatesTable;
