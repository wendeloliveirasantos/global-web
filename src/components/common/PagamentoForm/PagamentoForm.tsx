import React, { useState } from "react";
import * as S from "./styles";
import { Button, Select, TextInput, TextInputMask } from "@/components/ui";

const INITIAL_VALUE = {
  nomeTitular: "",
  cpfTitular: "",
  numeroCartao: "",
  mesValidade: "",
  anoValidade: "",
  cvv: "",
  parcelas: ""
}

function formatarValor(value: number) {
  return `R$ ${value.toFixed(2).replace(".", ",")}`
}

export default function PagamentoForm({ onSubmit, amount, isLoading }: any) {
  const [formData, setFormData] = useState(INITIAL_VALUE);
  const [formErrors, setFormErrors] = useState(INITIAL_VALUE);

  const [numeroCartao, setNumeroCartao] = useState('');
  const [numeroMask, setNumeroMask] = useState('9999 9999 9999 9999');

  const handleMaskChange = (e: any) => {
    const { value } = e.target;
    setNumeroCartao(value);
    atribuirMascaraNumeroCartao(value);
  };

  function handleChange(e: any) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    setFormErrors(INITIAL_VALUE);
    let hasError = false;

    if (!formData.nomeTitular) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        nomeTitular: "Por favor, insira o primeiro nome",
      }));
      hasError = true;
    }

    if (!formData.cpfTitular) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        cpfTitular: "Por favor, insira o nome titular",
      }));
      hasError = true;
    }

    if (!formData.numeroCartao) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        numeroCartao: "Por favor, insira o numero cartão",
      }));
      hasError = true;
    }
    if (!formData.anoValidade) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        anoValidade: "Por favor, insira o ano validade",
      }));
      hasError = true;
    }
    if (!formData.mesValidade) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        mesValidade: "Por favor, insira o mes validade",
      }));
      hasError = true;
    }
    if (!formData.cvv) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        cvv: "Por favor, insira o cvv",
      }));
      hasError = true;
    }
    if (!formData.parcelas) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        parcelas: "Por favor, insira a parcela",
      }));
      hasError = true;
    }

    if (hasError) {
      return;
    }

    onSubmit(formData)
  }

  const atribuirMascaraNumeroCartao = (numero: string) => {
    if (parseInt(numero.substring(0, 2)) >= 30 && parseInt(numero.substring(0, 2)) <= 38) {
      setNumeroMask('9999 999999 99999');
    } else {
      setNumeroMask('9999 9999 9999 9999');
    }
  };

  return (
    <S.Wrapper>
      <S.Header>
        <h2>Valor total</h2>
        <h1>
          {formatarValor(amount)}
        </h1>
      </S.Header>
      <S.Title>Informações de pagamento</S.Title>
      <form onSubmit={handleSubmit} style={{ marginTop: 40 }}>
        <S.Row>
          <S.Group>
            <TextInput onChange={handleChange} name="nomeTitular" label="Nome do titular" helperText={formErrors.nomeTitular}/>
            {formErrors.nomeTitular && (
              <span style={{ color: "red" }}>{formErrors.nomeTitular}</span>
            )}
          </S.Group>
        </S.Row>
        <S.Row>
          <S.Group>
            <TextInputMask mask="999.999.999-99" onChange={handleChange} name="cpfTitular" label="CPF do Titular" />
            {formErrors.cpfTitular && (
              <span style={{ color: "red" }}>{formErrors.cpfTitular}</span>
            )}
          </S.Group>
        </S.Row>
        <S.Row>
          <S.Group>
            <TextInputMask mask={numeroMask} value={numeroCartao} onChange={(e) => { handleChange(e); handleMaskChange(e) }} name="numeroCartao" label="Número do cartão" />
            {formErrors.numeroCartao && (
              <span style={{ color: "red" }}>{formErrors.numeroCartao}</span>
            )}
          </S.Group>
        </S.Row>
        <S.Row>
          <S.Group>
            <TextInputMask mask="99" onChange={handleChange} name="mesValidade" label="Mes validade" />
            {formErrors.mesValidade && (
              <span style={{ color: "red" }}>{formErrors.mesValidade}</span>
            )}
          </S.Group>
          <S.Group>
            <TextInputMask mask="9999" onChange={handleChange} name="anoValidade" label="Ano validade" />
            {formErrors.anoValidade && (
              <span style={{ color: "red" }}>{formErrors.anoValidade}</span>
            )}
          </S.Group>
        </S.Row>
        <S.Row>
          <S.Group>
            <TextInputMask mask="999" onChange={handleChange} name="cvv" label="CVV" />
            {formErrors.cvv && (
              <span style={{ color: "red" }}>{formErrors.cvv}</span>
            )}
          </S.Group>
        </S.Row>
        <S.Row>
          <S.Group>
            <Select
              value={formData.parcelas}
              label="Parcelas"
              onChange={(value) => handleChange({ target: { name: "parcelas", value } })}
              options={[
                { value: 1, label: "1x" },
                { value: 2, label: "2x" },
                { value: 3, label: "3x" },
                { value: 4, label: "4x" },
                { value: 5, label: "5x" },
                { value: 6, label: "6x" },
              ]}
              helperText={formErrors.parcelas}
            />
          </S.Group>
        </S.Row>
        <S.Row>
          <S.Group>
            <Button type="submit">Finalizar</Button>
          </S.Group>
        </S.Row>
      </form>
    </S.Wrapper>
  );
}
