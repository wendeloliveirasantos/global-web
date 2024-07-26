import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.default};
  width: 100%; 
  height: 100%;
  padding-top: 16px;
  padding-bottom: 24px;
  justify-content: flex-start; 
  align-items: center; 
  gap: 6px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0px; /* Adicione padding conforme necessário */
`;

export const Logo = styled.img`
  height: 46px; /* Ajuste conforme necessário */
`;

export const Links = styled.ul`
  display: flex;
  align-items: center;  /* Centraliza os itens verticalmente */
  justify-content: center;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Link = styled.li<{ onClick?: any }>`
  display: flex;
  align-items: center;  /* Centraliza os itens verticalmente */
  a:link,
  a:visited {
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
  }
`;

export const Span = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: 0.5px;
`;

export const User = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  border-radius: 50%;

  &.active {
    background: ${(props) => props.theme.colors.lightBlue};

    svg path {
      fill: ${(props) => props.theme.colors.white};
    }
  }

  @media (max-width: 400px) {
    margin: 0;
  }
`;

export const UserMenu = styled.div`
  position: absolute;
  top: 120px;
  left: 59.17%;
  width: 360px;
  height: 610px;
  background: ${(props) => props.theme.colors.lightBlue};
  z-index: 10;
  display: none;

  @media (max-width: 800px) {
    top: 96px;
    left: 0;
    width: 100%;
    height: calc(100vh - 96px);
  }

  @media (max-width: 400px) {
    height: unset;
  }

  @media (max-width: 400px) and (min-height: 600px) {
    height: 600px;
  }

  @media (max-width: 400px) and (min-height: 800px) {
    height: 800px;
  }
`;

export const LoginMenu = styled.div`
  position: absolute;
  top: 120px;
  left: 59.17%;
  width: 375px;
  height: 301px;
  background: ${(props) => props.theme.colors.lightBlue};
  z-index: 10;
  padding: 27px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  display: none;

  h1 {
    font-size: 27px;
    margin: 150px 0 20px 0;
    display: none;
  }

  form {
    width: 100%;

    div {
      height: 47px;

      input {
        font-size: 14px;
      }
    }

    button {
      width: 100%;
      height: 47px;
      font-size: 16px;
      margin: 20px 0 10px 0;
    }
  }

  #link {
    text-decoration: underline;
    font-size: 14px;
    color: ${(props) => props.theme.colors.white};
  }

  @media (max-width: 800px) {
    top: 96px;
    left: 0;
    width: 100%;
    height: calc(100vh - 96px);

    form {
      padding: 0 20%;
    }

    h1 {
      display: block;
    }
  }

  @media (max-width: 450px) {
    form {
      padding: 0;
    }
  }

  @media (max-width: 400px) {
    h1 {
      margin: 50px 0 20px 0;
    }
  }
`;

export const RegisterLink = styled.a`
  width: 125px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 18px;
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;

  img {
    width: 13px;
  }
`;

export const Close = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 15px;
  display: none;

  span {
    color: ${(props) => props.theme.colors.white};
    font-size: 14px;
    text-decoration: underline;
    margin-right: 10px;
  }

  img {
    width: 15px;
    height: 15px;
  }

  @media (max-width: 800px) {
    display: flex;
  }
`;

export const MenuHeader = styled.div`
  width: 100%;
  height: 50px;
  background: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 30px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.darkBlue};

  @media (max-width: 400px) {
    height: 31px;
  }
`;

export const MenuIcon = styled.div`
  width: 29px;
  height: 19px;
  margin-left: 20px;
  cursor: pointer;
  display: none;

  @media (min-width: 768px) {
    display: none;
  }

  svg {
    color: ${(props) => props.theme.colors.darkBlue};
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export const Menu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 96px;
  left: 0;
  width: 100%;
  height: calc(100vh - 96px);
  background: ${(props) => props.theme.colors.lightBlue};
  opacity: 1;
  z-index: 10;
  display: ${(props) => (props.isOpen ? "block" : "none")};

  body.no-scroll {
    overflow: hidden;
  }
`;

export const MenuItem = styled.div`
  height: 102px;
  display: flex;
  padding: 0 30px;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  cursor: pointer;

  strong {
    font-size: 18px;
  }

  p {
    font-size: 14px;
    margin-top: 10px;
  }

  @media (max-width: 700px) {
    height: 90px;
    padding: 15px;
  }

  @media (max-width: 400px) {
    height: 70px;
    padding: 15px;
  }

  @media (max-width: 400px) and (min-height: 600px) {
    height: 80px;
  }

  @media (max-width: 400px) and (min-height: 800px) {
    height: 102px;
  }
`;
