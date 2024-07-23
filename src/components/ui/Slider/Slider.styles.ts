import { Box } from '@mui/material';
import styled from 'styled-components';

export const Wrapper = styled.button`
    border: none;
    width: 100%;
    height: 60px;
    background: ${props => props.theme.colors.darkBlue};
    color: ${props => props.theme.colors.white};
    font-weight: 700;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;

    &:disabled {
        opacity: 0.4;
    }

    @media (max-width: 700px) {
        height: 47px;
        font-size: 16px;
    }
`;