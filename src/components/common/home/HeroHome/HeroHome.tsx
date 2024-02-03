import React from 'react'
import * as S from './HeroHome.styles'

export default function HeroHome() {
  return (
    <S.WelcomeContainer
      style={{ backgroundImage: `url('/images/family.png')` }}
    >
      <S.Welcome style={{ backgroundImage: `url('/images/gradient.png')` }}>
        <h1>Bem Vindo</h1>
        <h1 id="regular">Bienvenido</h1>
        <h1 id="italic">Welcome_</h1>
        <h2>Vantagens de contratar aqui</h2>
        <p>
          Contratação 100% online. Você economiza no seguro e no seu tempo. 
          Personalize, contrate e acione seu seguro de onde estiver.
        </p>
      </S.Welcome>
    </S.WelcomeContainer>
  )
}
