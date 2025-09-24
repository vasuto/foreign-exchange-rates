import styled from '@emotion/styled';
import { useExchangeRates } from '../hooks/useExchangeRates';
import type { ExchangeRate } from '../types/ExchangeRate';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const StyledBox = styled(Box)`
  width: 100%;
  text-align: right;
`;

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(even)': {
    backgroundColor: 'rgba(1, 72, 71, 0.03)',
  },
  '&:last-child td, &:last-child th': { border: 0 }
}));


const StyledTableCell = styled(TableCell)`
  font-weight: bold;
`;

const ExchangeRatesTable = () => {
  const { data, isLoading, error } = useExchangeRates();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading exchange rates.</p>;

  return (
    <StyledBox>
      <p><strong>Date:</strong> {data?.date.toLocaleDateString()}</p>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Country</StyledTableCell>
              <StyledTableCell align="right">Currency</StyledTableCell>
              <StyledTableCell align="right">Amount</StyledTableCell>
              <StyledTableCell align="right">Code</StyledTableCell>
              <StyledTableCell align="right">Rate</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.rates.map((rate: ExchangeRate, index: number) => (
              <StyledTableRow
                key={index}
              >
                <TableCell component="th" scope="row">
                  {rate.country}
                </TableCell>
                <TableCell align="right">{rate.currency}</TableCell>
                <TableCell align="right">{rate.amount}</TableCell>
                <TableCell align="right">{rate.code}</TableCell>
                <TableCell align="right">{rate.rate}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledBox>
  );
};

export default ExchangeRatesTable;
