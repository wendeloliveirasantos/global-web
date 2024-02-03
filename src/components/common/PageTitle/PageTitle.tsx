import React from 'react'
import * as S from './PageTitle.styles'

type PageTitleProps = {
  bold?: string
  regular?: string
  className?: string
}

function PageTitle({ bold, regular, className }: PageTitleProps) {
  return (
    <S.Wrapper className={className}>
      <strong>{bold}</strong>
      <span>{regular}</span>
    </S.Wrapper>
  )
}

export default PageTitle
