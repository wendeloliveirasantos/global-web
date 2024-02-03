import React, { ReactNode } from 'react'
import { Header } from '../Header'
import * as S from './MainLayout.styles'
import Footer from '../footer'

type MainLayoutProps = {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <S.Wrapper>
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.Wrapper>
  )
}
