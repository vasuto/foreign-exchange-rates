import { Box, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { useState, type ChangeEvent } from "react";
import { useExchangeRates } from "../hooks/useExchangeRates";
import type { ExchangeRate } from "../types/ExchangeRate";
import styled from "@emotion/styled";

const StyledPaper = styled(Paper)`
  width: 100%;
`;

export const StyledFlexBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px;
  width: 100%;
`;

export const StyledTextField = styled(TextField)`
  flex-grow: 2;
`;

export const StyledFormControl = styled(FormControl)`
  flex-grow: 1
`;

export const StyledTypography = styled(Typography)`
  flex-grow: 2
`;

const ExchangeRateConverter = () => {

  const [amount, setAmount] = useState<number>();
  const [selectedRate, setSelectedRate] = useState<number>();
  const { data, isLoading, error } = useExchangeRates();

  const handleRateSelectChange = (event: ChangeEvent<Omit<HTMLInputElement, "value"> & { value: number; }> | (Event & { target: { value: number; name: string; }; })): void => {
    setSelectedRate(event.target.value);
  }

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setAmount(Number(event.target.value))
  }

  const getConvertedAmount = () => {
    if(amount === undefined || selectedRate === undefined) {
      return 0;
    }
    return parseFloat((amount * selectedRate).toFixed(4));
  }

  return (
    <StyledPaper>
      <StyledFlexBox>
          <StyledTextField
            label="Amount"
            type="number"
            variant="outlined"
            value={amount}
            onChange={handleAmountChange}
            disabled={isLoading || error !== null}
          />
          <StyledFormControl>
              <InputLabel id="exchange-rate-select-label">Currency</InputLabel>
              <Select
                  labelId="exchange-rate-select-label"
                  id="exchange-rate-select"
                  value={selectedRate}
                  label="Currency"
                  onChange={handleRateSelectChange}
              >
                {data?.map((rate: ExchangeRate) => (
                  <MenuItem value={rate.rate}>{rate.code}</MenuItem>
                ))}
              </Select>
          </StyledFormControl>
          <StyledTypography>
            {getConvertedAmount()}&nbsp;CZK
          </StyledTypography>
      </StyledFlexBox>
    </StyledPaper>
  );
}

export default ExchangeRateConverter;