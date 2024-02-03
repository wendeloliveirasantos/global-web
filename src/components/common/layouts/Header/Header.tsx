import React, { useState } from 'react'
import * as S from './Header.styles'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

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
          {/* <S.Link>
            <Link href="/seguros/auto/detalhes">
              <span>Seguro Auto</span>
            </Link>
          </S.Link> */}
          <S.Link>
            <Link href="/seguros/viagem/detalhes">
              <span>Seguro Viagem</span>
            </Link>
          </S.Link>
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
