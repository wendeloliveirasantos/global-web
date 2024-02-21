import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  color: ${props => props.theme.colors.darkBlue};
  font-weight: 200;
`

export const Coverages = styled.div`
  display: flex;
  align-items: center;
  flex-flow: wrap;
`