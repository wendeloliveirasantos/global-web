import { Button } from '@/components/ui'
import React, { Fragment } from 'react'
import * as S from './Insurance.styles'

type InsuranceInformation = {
  description: string
  advantages: any[]
  services: any
}

type InsuranceProps = {
  image: string
  icon: string
  title: string
  href: string
  insuranceInformation: InsuranceInformation
}

export default function Insurance({
  image,
  icon,
  title,
  href,
  insuranceInformation,
}: InsuranceProps) {
  function handleClick() {
  }

  return (
    <S.Wrapper background={image}>
      <S.Container background="/images/gradient.png">
        <div>
          <img src={icon} alt="" />
          <S.Title>{title}</S.Title>
        </div>
        <S.Text>{insuranceInformation.description}</S.Text>
        <S.Heading>Vantagens de contratar aqui</S.Heading>
        {insuranceInformation.advantages && insuranceInformation.advantages.map((advantage, index) => (
          <Fragment key={index}>
            {advantage.title && <h2>{advantage.title}</h2>}
            <S.Text>{advantage.description}</S.Text>
            {advantage.coverage && <h3>{advantage.coverage}</h3>}
            {advantage.items && (
              <ul>
                {advantage.items &&
                  advantage.items.map((item: any, index: number) => (
                    <li key={index}>
                      <p>&#10003; {item}</p>
                    </li>
                  ))}
              </ul>
            )}
          </Fragment>
        ))}
        {insuranceInformation.services && (
          <S.Card>
            <h2>Serviços e Assistência</h2>
            <p>{insuranceInformation.services.description}</p>
            <ul>
              {insuranceInformation.services.items && insuranceInformation.services.items.map((item: any, index: number) => (
                <li key={index}>&#10003; {item}</li>
              ))}
            </ul>
          </S.Card>
        )}
        <a href={href} onClick={handleClick}>
          <Button>Orçar agora</Button>
        </a>
      </S.Container>
    </S.Wrapper>
  )
}
