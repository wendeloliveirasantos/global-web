import styled from "styled-components";

const Offers = styled.div`
  display: flex;
`

const Card = styled.div`
  margin: 0 10px;
  padding: 20px;
  border: 1px solid ${props => props.theme.colors.darkBlue};
  border-radius: 12px;
  min-width: 300px;
  text-align: center;
  position: relative;

  h3 {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.darkBlue};
  }

  span {
    font-size: 12px;
  }
`

const Button = styled.button`
  margin-top: 20px;
  border: none;
  width: 100%;
  padding: 10px 0;
  background-color: ${props => props.theme.colors.darkBlue};
  color: #fff;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
`

const Coverages = styled.div`
  margin-top: 20px;
  text-align: left;

  h5 {
    margin-bottom: 10px;
  color: ${props => props.theme.colors.mediumGray};
  }
`

const Logo = styled.img`
  position: absolute;
  width: 130px;
  margin: 0 auto;
  top: -15px;
  background-color: #fff;
  left: 80px;
`

const Check = styled.div`
  height: 14px;
  width: 14px;
  border-radius: 4px;
  margin-right: 10px;
  background-color: ${props => props.theme.colors.lightBlue};
`

const Coverage = styled.div``

const Guarantee = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
  color: ${props => props.theme.colors.mediumGray};
`

export {
  Offers,
  Card,
  Button,
  Coverages,
  Coverage,
  Guarantee,
  Check,
  Logo
}