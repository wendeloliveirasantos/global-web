import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const InsuranceContainer = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding: 35px 0px;
`;

export const StyledTitleTypography = styled(Typography)`
    color: #333333;
    font-size: 32px;
    font-weight: 700;
    line-height: 30px;
    word-wrap: break-word
`;

export const ButtonBox = styled(Box)`
    @media (max-width: 599px) {
        width: 100%;
    }
    @media (min-width: 600px) {
        width: 225px;
    }
`

export const TextContainer = styled(Box)`
    color: white;
    font-size: 18px;
    font-weight: 500;
    line-height: 18px;
    word-wrap: break-word
`;

export const TextBoxContainer = styled(Box)` 
  @media (min-width: 899px) {
    display: none;
  }
`