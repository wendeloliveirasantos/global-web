import styled from "styled-components";

export const Wrapper = styled.div``

export const Header = styled.div`
  text-align: center;
  
  h1 {
    color: ${props => props.theme.colors.textColor};

  }

  h2 {
    color: ${props => props.theme.colors.lightBlue};
  }
`

export const Title = styled.h2`
  margin-top: 20px;
  text-align: center;
  color: ${props => props.theme.colors.lightBlue};
`


export const Group = styled.div`
  width: 100%;
  padding: 0 10px;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;;
`