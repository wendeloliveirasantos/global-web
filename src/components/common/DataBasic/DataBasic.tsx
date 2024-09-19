import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, TextInput, TextInputMask } from '../../ui'
import { PageTitle } from '../PageTitle'
import * as S from './DataBasic.styles'

type DataBasicProps = {
  onSubmit(data: any): void
}

export default function DataBasic({ onSubmit }: DataBasicProps) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <S.Wrapper>
      <PageTitle bold="Dados" regular="Básicos" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          name="name"
          label="Seu nome"
          register={register}
          required
        />
        <TextInput
          name="email"
          label="Seu Email"
          register={register}
          required
        />
        <TextInputMask
          mask="99 99999 9999"
          name="phone"
          label="Seu Telefone"
          register={register}
          required
        />
        <div style={{ marginTop: 40 }}>
          <Button color="#FF5A62" type="submit">Avançar</Button>
        </div>
      </form>
    </S.Wrapper>
  )
}
