import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 14px;
  border: 1px solid ${props => props.theme.colors.darkBlue};
  border-radius: 14px;
  padding: 20px;
  text-align: center;
  color: #444;
  max-width: 340px;
  width: 100%;
  height: auto; /* Remova a altura fixa para tornar o card responsivo */
  overflow: hidden; /* Trate o overflow para evitar problemas */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Adicione uma sombra para melhorar a aparência */
`;

export const Title = styled.h1`
  font-size: 18px;
`;

export const Logo = styled.div`
  text-align: -webkit-center;
`;

export const Header = styled.div`
  margin-top: 20px;
  h1 {
    color: ${props => props.theme.colors.darkBlue};
  }

  h2 {
    color: ${props => props.theme.colors.lightBlue};
    font-size: 16px;
    text-decoration: line-through;
  }
`;

export const Link = styled.p`
  margin-top: 20px;
  color: ${props => props.theme.colors.lightBlue};
  cursor: pointer;
`;
