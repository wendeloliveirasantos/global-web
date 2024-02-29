import { Container, Wrapper } from '@/components/common'
import Loading from '@/components/common/Loading/Loading'
import { PagamentoForm } from '@/components/common/PagamentoForm'
import { PageTitle } from '@/components/common/PageTitle'
import { MainLayout } from '@/components/common/layouts'
import { STORAGE_VIAGEM_COMPRA, STORAGE_VIAGEM_COTACAO } from '@/constants'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import useViagem from '@/hooks/useViagem'
import api from '@/utils/api'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function Pagamento() {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [, setCompra] = useLocalStorage(STORAGE_VIAGEM_COMPRA, "");
  const { oferta, titular } = useViagem()

  async function onSubmit(values: any) {
    try {
      setLoading(true)
      const input = {
        "quoteId": oferta.id,
        "productReferenceId": JSON.stringify(oferta.productReferenceId),
        "provider": oferta.operator,
        "holder": {
          "firstName": titular.firstName,
          "lastName": titular.lastName,
          "gender": "",
          "cpfNumber": titular.document,
          "cellPhone": titular.phone.replace(" ", ""),
          "birthDate": titular.birthDate,
          "address": titular.address,
          "number": titular.number,
          "city": titular.city,
          "neighborhood": titular.neighborhood,
          "uf": titular.state,
          "country": "BR",
          "zipCode": titular.postalCode.replace(" ", "")
        },
        "passengers": [""]
      }
      const response = await api.post("/travels/purchases", input);
      setCompra(JSON.stringify(response.data))
      router.push("/seguros/viagem/concluido")
      setLoading(false)
    } catch (error) {
      setLoading(false)
      throw new Error()

    }
  }

  if (loading) return <Loading />

  return oferta && (
    <MainLayout>
      <Wrapper style={{ flex: 1 }} background="/images/city.png">
        <Container style={{ display: "flex" }}>
          <PageTitle bold='Dados para' regular='pagamento' />
          <PagamentoForm
            onSubmit={onSubmit}
            amount={oferta.amount ?? 0}
          />
        </Container>
      </Wrapper>
    </MainLayout>
  )
}
