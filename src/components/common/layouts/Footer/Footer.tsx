import React, { useState } from 'react'
import * as S from './Footer.styles'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa';
import UiDropdown from '@/components/ui/Dropdown/Dropdown';
import { Box, Button, Container, Icon } from '@mui/material';
import { useRouter } from 'next/router';

export default function Footer() {

  const seguros = [
    { nome: "Viagem", href: "/seguros/viagem/detalhes" },
    { nome: "Residencial", href: "/seguros/residencial/detalhes" },
    { nome: "Empresarial", href: "/seguros/empresarial/detalhes" },
    { nome: "Híbrido", href: "/seguros/hibrido/detalhes" },
    { nome: "Vida", href: "/seguros/vida/detalhes" },
    { nome: "Acidentes Pessoais", href: "/seguros/acidentes-pessoais/detalhes" },
  ];

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (item: { nome: string, href: string }) => {
    router.push(item.href);
    setAnchorEl(null);
  };
  
  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <S.Wrapper>
      <Container maxWidth="xl">
      <S.Container>
        <Link href="/">
          <S.Logo src="/images/logo-footer.png" />
        </Link>
        <S.Links>
          <S.Link>
            <Link href="#" style={{ marginRight: '35px' }}>
              <S.Span>Configurações de Cookies</S.Span>
            </Link>
            <Link href="#" style={{ marginRight: '35px' }}>
              <S.Span>Privacidade</S.Span>
            </Link>
            <Link href="#" style={{  }}>
              <S.Span>Links Rápidos</S.Span>
              {/* <Box sx={{ alignSelf: 'stretch', height: '0px', border: '1px #DADADA solid' }} /> */}
            </Link>
          </S.Link>
          <UiDropdown anchorEl={anchorEl} open={open} onClose={handleClose} itens={seguros}></UiDropdown>
        </S.Links>
        <S.MenuIcon onClick={handleMenuToggle}>
          <FaBars size={20} />
        </S.MenuIcon>
      </S.Container>
      <S.Menu isOpen={isMenuOpen}>
        <S.MenuItem onClick={() => setMenuOpen(false)}>
          <Link href="/seguros/viagem/detalhes">
            <span style={{ color: "#333333", fontWeight: "bold" }}>Seguro Viagem</span>
          </Link>
        </S.MenuItem>
      </S.Menu>
      <S.Container>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: '#333333',
            fontSize: '18px',
            fontWeight: 700,
            lineHeight: '20px',
            letterSpacing: '0.10px',
            wordWrap: 'break-word',
          }}
        >
          <Icon sx={{ marginRight: 1, width: 'auto', height: 'auto' }}>
            <img src="/images/black-instagram-icon.svg" alt="Custom Icon"/>
          </Icon>
          Acompanhe a Dobyseg no Instagram
        </Box>
      </S.Container>
      <S.Container>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: '#333333',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '20px',
            letterSpacing: '0.10px',
            wordWrap: 'break-word',
          }}
        >
          <Icon sx={{ marginRight: 1, width: 'auto', height: 'auto' }}>
            <img src="/images/email.svg" alt="Custom Icon"/>
          </Icon>
          doby@dobyseg.com.br
        </Box>
      </S.Container>
      <S.Container>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: '#333333',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '20px',
            letterSpacing: '0.10px',
            wordWrap: 'break-word',
          }}
        >
          <Icon sx={{ marginRight: 1, width: 'auto', height: 'auto' }}>
            <img src="/images/phone-call.svg" alt="Custom Icon"/>
          </Icon>
          (11) 99999-9999
        </Box>
        <Box
          sx={{
            textAlign: 'right',
            color: '#333333',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
            letterSpacing: '0.10px',
            wordWrap: 'break-word',
          }}
        >
          ©2024 Globalcorp Corretora de Seguros Gerais Ltda. Todos os direitos reservados.
        </Box>
      </S.Container>
      </Container>
      
    </S.Wrapper>
  )
}
