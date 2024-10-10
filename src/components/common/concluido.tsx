import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Button } from '../ui'
import { useRouter } from 'next/router'
import { Box } from '@mui/material'

type Props = {
  compra: any
}

export default function ConcluidoComponent(props: Props) {
  const { compra } = props
  const router = useRouter()
  let url: string | null = null;

  useEffect(() => {
    url = compra.urlVoucher != null ? compra.urlVoucher : compra.EmissoesResponseAPI != null ? compra.EmissoesResponseAPI[0].UrlEvoucher : null;
  });

  const handleButtonClick = () => {
    url != null ? window.open(url, '_blank') : router.push("/");
  };

  return (
    <Card>
      <Box display="flex" alignItems="center" justifyContent="center" sx={{ marginTop: 3 }}>
        <ButtonBox>
          <Button color="#FF5A62" onClick={handleButtonClick}>{ url != null ? 'Baixa seu voucher' : 'Finalizar' }</Button>
        </ButtonBox>
      </Box>
    </Card>
  )
}

export const Card = styled.div`
`

export const ButtonBox = styled(Box)`
    @media (max-width: 599px) {
        width: 225px;
    }
    @media (min-width: 600px) {
        width: 225px;
    }
`