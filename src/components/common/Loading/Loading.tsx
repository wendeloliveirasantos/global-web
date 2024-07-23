import React from 'react'
import 'react-circular-progressbar/dist/styles.css'

import * as S from './Loading.styles'

import Loader from 'react-spinners/ClipLoader'

function Loading() {
  return (
    <S.Wrapper>
      <S.Container>
        <h1>Carregando...</h1>
        <Loader color="#ffffff" loading={true} size={32} />
      </S.Container>
    </S.Wrapper>
  )
}

export default Loading
