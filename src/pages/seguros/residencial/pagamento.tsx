import { Container, Wrapper } from '@/components/common'
import Loading from '@/components/common/Loading/Loading'
import { PagamentoForm } from '@/components/common/PagamentoForm'
import { PageTitle } from '@/components/common/PageTitle'
import { HybridPagamento } from '@/components/common/hybrid/hybrid-pagamento'
import { MainLayout } from '@/components/common/layouts'
import { Dialog } from '@/components/ui/Dialog'
import { STORAGE_RESIDENCIAL_COMPRA, STORAGE_RESIDENCIAL_COTACAO } from '@/constants'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import useResidencial from '@/hooks/useResidencial'
import api from '@/utils/api'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function Pagamento() {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [, setCompra] = useLocalStorage(STORAGE_RESIDENCIAL_COMPRA, "");
  const { oferta, titular, cotacao } = useResidencial()

  const [open, setOpen] = React.useState(false);
  const onClose = () => setOpen(false);

  const [error, setError] = useState<string>("")

  async function onSubmit(values: {
    nomeTitular: "",
    cpfTitular: "",
    numeroCartao: "",
    mesValidade: "",
    anoValidade: "",
    cvv: "",
    parcelas: "",
  }) {
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
          "email": titular.email,
          "address": titular.address,
          "number": titular.number,
          "city": titular.city,
          "neighborhood": titular.neighborhood,
          "uf": titular.state,
          "country": "BR",
          "zipCode": titular.postalCode.replace(" ", "")
        },
        "payment": {
          "cardholderName": values.nomeTitular,
          "cardholderCPF": values.cpfTitular,
          "cardNumber": values.numeroCartao,
          "securityCode": values.cvv,
          "expiryMonth": values.mesValidade,
          "expiryYear": values.anoValidade,
          "installments": values.parcelas,
          "operator": 'mastercard',
        }
      }
      const response = await api.post("/hybrids/purchases", input);
      if (response.status == 201) {
        setCompra(JSON.stringify(response.data))
        router.push("/seguros/residencial/concluido")
        setLoading(false)
      }
      else {
        setLoading(false)
        setOpen(true)
        setError(response.data.message)
      }
      
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
          <HybridPagamento
            onSubmit={onSubmit}
            amount={oferta.amount ?? 0}
            business="residencial"
          />
          <Dialog title='ERRO AO PROCESSAR PAGAMENTO' text={error} open={open} onClose={onClose}></Dialog>
        </Container>
      </Wrapper>
    </MainLayout>
  )
}
