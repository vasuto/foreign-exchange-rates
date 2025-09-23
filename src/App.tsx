import { Box } from '@mui/material'
import './App.css'
import ExchangeRateConverter from './features/rates/components/ExchangeRateConverter'
import ExchangeRatesTable from './features/rates/components/ExchangeRatesTable'
import styled from '@emotion/styled';

export const StyledFlexBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px;
`;

function App() {

  return (
    <StyledFlexBox>
      <h1>Foreign Exchange Rates</h1>
      <ExchangeRateConverter/>
      <ExchangeRatesTable/>
    </StyledFlexBox>
  )
}

export default App
