import Link from 'next/link';
import React from 'react'
import styled from 'styled-components'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <div>
            <Header>
                <Container>
                    <Content>
                        <Section>
                            <div>
                                <h1>Central de Servios</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            </div>
                            <div style={{ display: "flex", alignItems: "flex-start", marginTop: 20 }}>
                                <div style={{ flex: 1, marginRight: 10 }}>
                                    <h2>0000-0000</h2>
                                    <p>Capitais e regiões metropolitanas</p>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h2>0000-0000</h2>
                                    <p>Demais localidades</p>
                                </div>
                            </div>
                        </Section>
                        <Section>
                            <div>
                                <h1>Vendas</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            </div>
                            <div style={{ display: "flex", alignItems: "flex-start", marginTop: 20 }}>
                                <div style={{ flex: 1, marginRight: 10 }}>
                                    <h2>0000-0000</h2>
                                    <p>Atendimento de segunda a sábado das 7h ás 19h</p>
                                </div>
                            </div>
                        </Section>
                        <Section>
                            <div>
                                <h1>Aplicativo</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            </div>
                            <div style={{ display: "flex", alignItems: "flex-start", marginTop: 20 }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <img style={{ width: 140, marginRight: 20 }} src="/images/google-play.png" alt="Google Play" />
                                    <img style={{ width: 140 }} src="/images/app-store.png" alt="App Store" />
                                </div>
                            </div>
                        </Section>
                    </Content>
                </Container>
            </Header>
            <FooterBottom>
                <Container>
                    <Menu>
                        <Social>
                            <FaFacebookF size={20} style={{ cursor: "pointer" }} />
                            <FaInstagram size={20} style={{ cursor: "pointer" }} />
                            <FaWhatsapp size={20} style={{ cursor: "pointer" }} />
                            <FaYoutube size={20} style={{ cursor: "pointer" }} />
                            <FaLinkedinIn size={20} style={{ cursor: "pointer" }} />
                        </Social>
                        <div>
                            <Link style={{ color: "#FFF", marginRight: 20 }} href="#">Política de Privacidade</Link>
                            <Link style={{ color: "#FFF" }} href="#">Central de Ajuda</Link>
                        </div>
                    </Menu>
                </Container>
            </FooterBottom>
        </div>
    )
}

const FooterBottom = styled.div`
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.darkBlue};
`

export const Container = styled.div`
  width: 100%;
  max-width: 1171px;
`;

export const Logo = styled.img`
  width: 238px;
  height: 91px;
  margin-right: 60px;

  @media (max-width: 800px) {
    width: 197px;
    height: 73px;
  }

  @media (max-width: 400px) {
    width: 150px;
    height: 50px;
  }
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Social = styled.div`
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 200px;
`

const Header = styled.div`
    display: flex;
    background-color: ${props => props.theme.colors.lightBlue};
    padding: 40px 0;
    justify-content: center;
`

const Section = styled.div`
        flex: 1;
        padding: 20px;

        h1, p {
            color: #fff;
        }

        h2 {
            color: ${props => props.theme.colors.darkBlue};
        }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;

    @media(min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`