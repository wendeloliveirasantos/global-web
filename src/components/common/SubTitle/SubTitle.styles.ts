import { SxProps, Theme } from '@mui/material';
import styled from 'styled-components';

export const Wrapper = styled.div`
    color: ${props => props.theme.colors.darkBlue};
    font-size: 37px;
    margin: 30px 0;
    display: flex;

    strong {
        margin-right: 10px;
    }

    @media (max-width: 600px) {
        white-space: nowrap;
    }
`;

export const boxStyle = {
    width: '100%',
    height: '100%',
    color: '#333333',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '16px',
    wordWrap: 'break-word',
};