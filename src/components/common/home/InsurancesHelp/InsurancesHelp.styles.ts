import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const InsuranceContainer = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding: 5px 0px 35px 0px;
    background-color: ${props => props.theme.colors.blue};
`;

export const StyledTitleTypography = styled(Typography)`
    color: ${props => props.theme.colors.white};
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