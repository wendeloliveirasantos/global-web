/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import * as S from './AboutUsHome.styles'

export default function AboutUsHome() {
  return (
    <S.AboutUsContainer
      style={{
        backgroundImage: 'url(/images/woman.png)',
      }}
    >
      <S.AboutUs
        style={{
          backgroundImage: 'url(/images/gradient-2.png)',
        }}
      >
        <h1>Sobre Nós</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
        <div className="buttons">
          <img src="/images/google-play.png" alt="Google Play" />
          <img src="/images/app-store.png" alt="App Store" />
        </div>
      </S.AboutUs>
    </S.AboutUsContainer>
  )
}
