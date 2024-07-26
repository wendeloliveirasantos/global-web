import React, { ReactNode } from 'react'
import { Header } from '../Header'
import * as S from './MainLayout.styles'
import { WhatsApp } from '@/components/ui/WhatsApp'
import Footer from '../Footer/Footer'
import { Container } from '@mui/material'

type MainLayoutProps = {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <S.Wrapper>
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
      <WhatsApp />
    </S.Wrapper>
  )
}
