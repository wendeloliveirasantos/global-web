import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

export const InsuranceContainer = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding: 35px 0px 35px 0px;

    @media (max-width: 1400px) {
        max-width: 1100px;
    }

    @media (max-width: 1100px) {
        max-width: 900px;
    }
`;

export const StyledTitleTypography = styled(Typography)`
    color: white;
    font-size: 32px;
    font-weight: 700;
    line-height: 30px;
    word-wrap: break-word
`;

export const Text = styled.p`
    width: 1100px;
    font-size: 18px;
    line-height: 30px;

    @media (max-width: 1100px) {
        width: 95%;
    }

    @media (max-width: 450px) {
        font-size: 16px;
    }
`;


export const TextInfo = styled(Typography)`
    color: white;
    font-size: 18px;
    font-weight: 500;
    line-height: 18px;
    word-wrap: break-word
`;