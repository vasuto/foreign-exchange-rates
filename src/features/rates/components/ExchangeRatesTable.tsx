import React from 'react';
import { useExchangeRates } from '../hooks/useExchangeRates';
import type { ExchangeRate } from '../types/ExchangeRate';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const ExchangeRatesTable = () => {
  const { data, isLoading, error } = useExchangeRates();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading exchange rates.</p>;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell align="right">Currency</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Code</TableCell>
            <TableCell align="right">Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((rate: ExchangeRate, index: number) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {rate.country}
              </TableCell>
              <TableCell align="right">{rate.currency}</TableCell>
              <TableCell align="right">{rate.amount}</TableCell>
              <TableCell align="right">{rate.code}</TableCell>
              <TableCell align="right">{rate.rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExchangeRatesTable;
