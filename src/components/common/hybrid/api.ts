import { STORAGE_RESIDENCIAL_COMPRA } from "@/constants";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import useResidencial from "@/hooks/useResidencial";
import api from "@/utils/api";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [, setCompra] = useLocalStorage(STORAGE_RESIDENCIAL_COMPRA, "");
  const { oferta, titular, cotacao } = useResidencial()

  const [open, setOpen] = React.useState(false);
  const onClose = () => setOpen(false);

  const [error, setError] = useState<string>("")

  export async function onSubmit(values: {
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
      const response = await api.post("/hybrid/purchases", input);
      if (response.status == 201) {
        setCompra(JSON.stringify(response.data))
        router.push("/seguros/empresarial/concluido")
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