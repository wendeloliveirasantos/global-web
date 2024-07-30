import { Box, Button, ButtonProps } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 5px 0px 35px 0px;
    background-color: ${props => props.theme.colors.default};
`;

export const WelcomeContainer = styled.div`
    position: relative;
    width: 100%;
    height: 958px;
    background: transparent no-repeat;
    background-size: cover;

    @media (max-width: 1400px) {
        height: unset;
    }

    @media (max-width: 450px) {
        width: 100%;
        height: unset;
        background-position: -110px 0;
    }
`;

export const Welcome = styled.div`
    width: 100%;
    height: 958px;
    background: transparent no-repeat;
    background-size: cover;
    color: ${props => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1 {
        font-size: 88px;

        &#regular {
            font-weight: 400;
        }

        &#italic {
            font-style: italic;
        }
    }

    h2 {
        font-size: 51px;
        margin-top: 100px;
    }

    p {
        width: 800px;
        font-size: 40px;
        margin-top: 40px;
    }

    @media (max-width: 800px) {
        padding: 300px 20px 500px;
    }

    @media (max-width: 600px) {
        p {
            width: 100%;
        }
    }

    @media (max-width: 450px) {
        h1 {
            font-size: 52px;
        }

        h2 {
            width: 200px;
            font-size: 28px;
            margin-top: 60px;
        }

        p {
            font-size: 19px;
        }
    }

    @media (max-width: 400px) {
        padding: 0 10px;
    }
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