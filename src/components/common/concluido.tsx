import React from 'react'
import styled from 'styled-components'
import { Button } from '../ui'
import { useRouter } from 'next/router'

type Props = {
  compra: any
}

export default function ConcluidoComponent(props: Props) {
  const { compra } = props
  const router = useRouter()

  const handleButtonClick = () => {
    console.log(compra);
    const url = compra.urlVoucher != null ? compra.urlVoucher : compra.result.EmissoesResponseAPI[0].UrlEvoucher;
    window.open(url, '_blank');
  };

  return (
    <Wrapper>
      <div style={{ maxWidth: 400 }}>
        <h1 style={{ marginBottom: 30 }}>Parabens, seu seguro foi contratado com sucesso</h1>
        <Button onClick={handleButtonClick}>Baixa seu voucher</Button>
      </div>
    </Wrapper>
  )
}


export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    text-align: center;
    color: #fff;
    padding: 40px 0;
    height: calc(100vh - 120px);
    background-color: ${props => props.theme.colors.lightBlue};

`