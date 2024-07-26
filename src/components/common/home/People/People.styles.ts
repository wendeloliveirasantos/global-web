import { Typography } from "@mui/material";
import styled from "styled-components";

export const InsuranceContainer = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding: 35px 0px;
    background: none;
`;

export const StyledTitleTypography = styled(Typography)`
    color: ${props => props.theme.colors.white};
    font-size: 32px;
    font-weight: 700;
    line-height: 30px;
    word-wrap: break-word
`;