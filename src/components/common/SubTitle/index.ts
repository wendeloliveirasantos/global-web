import styled from 'styled-components';

export { default as PageTitle } from './SubTitle'

export const Div = styled.div`
  margin: 0 0 30px;
  p {
    color: ${props => props.theme.colors.darkBlue};
    text-align: center;
  }
`;