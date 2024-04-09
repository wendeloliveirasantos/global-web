import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 1rem;
  margin-top: 2rem;
  h3 {
    margin-bottom: 1rem;
    text-align: left;
    width: 100%;
    color: rgba(34,34,34,0.5);
    font-weight: 600;
  }
`

export const Content = styled.div`
`

export const Item = styled.div`
  color: ${props => props.theme.colors.textColor};
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  justify-content: center;
`

export const Check = styled.div<{ checked: boolean }>`
  border: 1px solid ${props => props.theme.colors.textColor};
  height: 20px;
  width: 20px;
  border-radius: 3px;
  margin-right: 0.5rem;
  background-color: ${props => props.checked ? props.theme.colors.lightBlue : "#fff"};
  cursor: pointer;
`