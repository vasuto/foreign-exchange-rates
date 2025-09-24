import { Box } from '@mui/material'
import './App.css'
import ExchangeRateConverter from './features/rates/components/ExchangeRateConverter'
import ExchangeRatesTable from './features/rates/components/ExchangeRatesTable'
import styled from '@emotion/styled';
import headerImage from '../src/assets/43058.jpg'

export const StyledFlexBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px;
`;

export const StyledHeader = styled(Box)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  width: 800px
`;

const StyledTitle = styled('h1')`
  font-size: 2rem;
  margin: 0;
`;

const StyledLogo = styled('img')`
  width: 20%;
  height: 20%;
`;

function App() {

  return (
    <StyledFlexBox>
      <StyledHeader>
        <StyledLogo src={headerImage} alt="Logo" />
        <StyledTitle>Foreign Exchange Rates</StyledTitle>
      </StyledHeader>
      <ExchangeRateConverter/>
      <ExchangeRatesTable/>
    </StyledFlexBox>
  )
}

export default App
