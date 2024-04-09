import React, { useState } from 'react'
import * as S from './Header.styles'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa';
import UiDropdown from '@/components/ui/Dropdown/Dropdown';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

export default function Header() {

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
      <S.Container>
        <Link href="/">
          <S.Logo src="/images/logo.png" />
        </Link>
        <S.Links>
          <S.Link onClick={handleClick}>
            <Link href="#">
              <span>Seguros</span>
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
            <span style={{ color: "#FFFFFF", fontWeight: "bold" }}>Seguro Viagem</span>
          </Link>
        </S.MenuItem>
      </S.Menu>
    </S.Wrapper>
  )
}
