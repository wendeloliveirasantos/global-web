import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";

// export const Wrapper = styled.div`
//   margin: 14px;
//   border: 1px solid ${props => props.theme.colors.darkBlue};
//   border-radius: 14px;
//   padding: 20px;
//   text-align: center;
//   color: #444;
//   max-width: 340px;
//   width: 100%;
//   height: auto; /* Remova a altura fixa para tornar o card responsivo */
//   overflow: hidden; /* Trate o overflow para evitar problemas */
//   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Adicione uma sombra para melhorar a aparência */
// `;

// export const Logo = styled.div`
//   text-align: -webkit-center;
// `;

// export const Title = styled.h1`
//   font-size: 18px;
// `;

// export const Header = styled.div`
//   margin-top: 20px;
//   h1 {
//     color: ${props => props.theme.colors.darkBlue};
//   }

//   h2 {
//     color: ${props => props.theme.colors.lightBlue};
//     font-size: 16px;
//     text-decoration: line-through;
//   }

//   label {
//     font-size: large;
//   }
// `;

// export const Link = styled.p`
//   margin-top: 20px;
//   color: ${props => props.theme.colors.lightBlue};
//   cursor: pointer;
// `;

export const Container = styled(Box)({
  width: '100%',
  height: '100%',
  position: 'relative',
});

export const Card = styled(Box)({
  background: 'white',
  borderRadius: 24,
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  display: 'inline-flex',
});

export const Header = styled(Box)({
  alignSelf: 'stretch',
  paddingTop: 12,
  paddingBottom: 12,
  paddingLeft: 16,
  paddingRight: 24,
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: 16,
  display: 'inline-flex',
});

export const ImageContainer = styled(Box)({
  borderRadius: 15,
  overflow: 'hidden',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  display: 'inline-flex',
});

export const CompanyInfo = styled(Box)({
  flex: '1 1 0',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  display: 'inline-flex',
});

export const CoverageDetails = styled(Box)({
  padding: '10px 0px 0px 0px',
});

export const CoverageAmount = styled(Box)({
  textAlign: 'center',
  color: '#FF5A62',
  fontSize: 14,
  fontWeight: 400,
  textDecoration: 'line-through',
  wordWrap: 'break-word',
});

export const CoveragePrice = styled(Box)({
  textAlign: 'center',
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'center',
});

export const PriceText = styled(Typography)({
  color: '#333333',
  fontSize: 20,
  fontWeight: 400,
  wordWrap: 'break-word',
});

export const PriceHighlight = styled(Typography)({
  color: '#FF5A62',
  fontWeight: 700,
  wordWrap: 'break-word',
});

export const DetailItem = styled(Box)({
  textAlign: 'center',
  padding: '10px 0px',
});

export const SeeMore = styled(Typography)({
  textAlign: 'center',
  color: '#FF5A62',
  fontSize: 14,
  fontWeight: 700,
  wordWrap: 'break-word',
  margin: '10px 0px !important',
  cursor: 'pointer',
  textDecoration: 'underline'
});

export const SelectButton = styled(Button)({
  background: '#FF5A62',
  borderRadius: 100,
  overflow: 'hidden',
  padding: '10px 24px',
  color: 'white',
  fontSize: 14,
  fontWeight: 500,
  letterSpacing: 0.10,
  wordWrap: 'break-word',
});

export const List = styled('ul')({
  margin: 0,
  padding: '0px 25px',
  listStyleType: 'disc',
  display: 'inline-flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  '& li': {
    color: '#333333',
    fontSize: 14,
    fontWeight: 400,
    wordWrap: 'break-word',
    lineHeight: 1.5,
  },
});