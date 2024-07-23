import { Switch } from '@mui/material';
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

export const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 44,
    height: 28,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 1,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: 'url(/images/check.svg)',
        },
        '& + .MuiSwitch-track': {
          backgroundColor: '#FF5A62',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: 'gray',
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
      '&:before': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      },
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: '#333333',
      opacity: 1,
    },
}));