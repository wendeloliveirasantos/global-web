import { Button, TextInput, TextInputMask, Select } from "@/components/ui";
import React, { useState } from "react";
import * as S from "./styles";
import { PageTitle } from "../../PageTitle";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { STORAGE_VIAGEM_COTACAO, STORAGE_VIAGEM_TITULAR } from "@/constants";
import { useRouter } from "next/router";
import { ufs } from "@/utils/ufs";
import { consultCep } from "@/services/travelService";

export default function TravelTitular() {
  const router = useRouter()
  const [cotacao] = useLocalStorage(STORAGE_VIAGEM_COTACAO, "")
  const [, setTitular] = useLocalStorage(STORAGE_VIAGEM_TITULAR, "");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    document: "",
    phone: "",
    email: "",
    birthDate: "",
    postalCode: "",
    address: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    document: "",
    phone: "",
    email: "",
    birthDate: "",
    postalCode: "",
    address: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  const handleCepBlur = async () => {
    const cep = formData.postalCode.replace(/[^0-9]/g, ''); // Remover caracteres não numéricos
    if (cep.length === 8) {
      const result = await consultCep(cep);
      if (result.result) {
        setFormData({
          ...formData,
          address: result.result.logradouro,
          neighborhood: result.result.bairro,
          city: result.result.localidade,
          state: result.result.uf,
          // Adicione outros campos conforme necessário
        });
      } else if (result.error) {
        console.error(result.error);
      }
    }
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
    if (!cotacao) return

    // Clear previous errors
    setFormErrors({
      firstName: "",
      lastName: "",
      document: "",
      phone: "",
      email: "",
      birthDate: "",
      postalCode: "",
      address: "",
      number: "",
      neighborhood: "",
      city: "",
      state: "",
    });

    // Perform validation
    let hasError = false;

    if (!formData.firstName) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "Por favor, insira o primeiro nome",
      }));
      hasError = true;
    }

    if (!formData.lastName) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "Por favor, insira o sobrenome",
      }));
      hasError = true;
    }

    if (!formData.document) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        document: "Por favor, insira o CPF",
      }));
      hasError = true;
    }

    if (!formData.phone) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Por favor, insira o telefone",
      }));
      hasError = true;
    }

    if (!formData.email) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "Por favor, insira o email",
      }));
      hasError = true;
    }

    if (!formData.birthDate) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        birthDate: "Por favor, insira a data de nascimento",
      }));
      hasError = true;
    }

    if (!formData.postalCode) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        postalCode: "Por favor, insira o CEP",
      }));
      hasError = true;
    }

    if (!formData.address) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        address: "Por favor, insira o endereço",
      }));
      hasError = true;
    }

    if (!formData.number) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        number: "Por favor, insira o número",
      }));
      hasError = true;
    }

    if (!formData.neighborhood) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        neighborhood: "Por favor, insira o bairro",
      }));
      hasError = true;
    }

    if (!formData.city) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        city: "Por favor, insira a cidade",
      }));
      hasError = true;
    }

    if (!formData.state) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        state: "Por favor, insira o estado",
      }));
      hasError = true;
    }

    // If there are any errors, stop the form submission
    if (hasError) {
      return;
    }

    setTitular(JSON.stringify(formData))

    const cotacaoParsed = JSON.parse(cotacao)
    if (cotacaoParsed.passengers.length > 1) {
      router.push("/seguros/viagem/dados-passageiros")
    } else {
      router.push("/seguros/viagem/pagamento")
    }

  }

  return (
    <S.Wrapper>
      <PageTitle bold="Dados" regular="do Titular" />
      <form onSubmit={handleSubmit}>
        <S.Row>
          <S.Group>
            <TextInput
              name="firstName"
              label="Nome"
              value={formData.firstName}
              onChange={handleChange}
            />
            {formErrors.firstName && (
              <span style={{ color: "red" }}>{formErrors.firstName}</span>
            )}
          </S.Group>
          <S.Group>
            <TextInput
              name="lastName"
              label="Sobrenome"
              value={formData.lastName}
              onChange={handleChange}
            />
            {formErrors.lastName && (
              <span style={{ color: "red" }}>{formErrors.lastName}</span>
            )}
          </S.Group>
        </S.Row>

        <S.Row>
          <S.Group>
            <TextInputMask
              mask="999.999.999-99"
              name="document"
              label="CPF"
              value={formData.document}
              onChange={handleChange}
            />
            {formErrors.document && (
              <span style={{ color: "red" }}>{formErrors.document}</span>
            )}
          </S.Group>
        </S.Row>

        <S.Row>
          <S.Group>
            <TextInputMask
              mask="(99) 99999-9999"
              name="phone"
              label="Telefone"
              value={formData.phone}
              onChange={handleChange}
            />
            {formErrors.phone && (
              <span style={{ color: "red" }}>{formErrors.phone}</span>
            )}
          </S.Group>
        </S.Row>

        <S.Row>
          <S.Group>
            <TextInput
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <span style={{ color: "red" }}>{formErrors.email}</span>
            )}
          </S.Group>
        </S.Row>

        <S.Row>
          <S.Group>
            <TextInput
              type="date"
              name="birthDate"
              label="Data de Nascimento"
              value={formData.birthDate}
              onChange={handleChange}
            />
            {formErrors.birthDate && (
              <span style={{ color: "red" }}>{formErrors.birthDate}</span>
            )}
          </S.Group>
        </S.Row>

        <S.Row>
          <S.Group>
            <TextInputMask
              mask="99999-999"
              name="postalCode"
              label="CEP"
              value={formData.postalCode}
              onChange={handleChange}
              onBlur={handleCepBlur}
            />
            {formErrors.postalCode && (
              <span style={{ color: "red" }}>{formErrors.postalCode}</span>
            )}
          </S.Group>
          <S.Group>
            <TextInput
              name="address"
              label="Endereço"
              value={formData.address}
              onChange={handleChange}
            />
            {formErrors.address && (
              <span style={{ color: "red" }}>{formErrors.address}</span>
            )}
          </S.Group>
        </S.Row>

        <S.Row>
          <S.Group>
            <TextInput
              name="number"
              label="Numero"
              value={formData.number}
              onChange={handleChange}
            />
            {formErrors.number && (
              <span style={{ color: "red" }}>{formErrors.number}</span>
            )}
          </S.Group>
          <S.Group>
            <TextInput
              name="neighborhood"
              label="Bairro"
              value={formData.neighborhood}
              onChange={handleChange}
            />
            {formErrors.neighborhood && (
              <span style={{ color: "red" }}>{formErrors.neighborhood}</span>
            )}
          </S.Group>
        </S.Row>

        <S.Row>
          <S.Group>
            <TextInput
              name="city"
              label="Cidade"
              value={formData.city}
              onChange={handleChange}
            />
            {formErrors.city && (
              <span style={{ color: "red" }}>{formErrors.city}</span>
            )}
          </S.Group>
          <S.Group>
            <Select
              options={ufs.map((row) => ({
                label: row.nome,
                value: row.sigla
              }))}
              label="Estado"
              value={formData.state}
              onChange={(value) => handleChange({ target: { value, name: "state" } })}
            />
            {formErrors.state && (
              <span style={{ color: "red" }}>{formErrors.state}</span>
            )}
          </S.Group>
        </S.Row>

        <S.Row>
          <Button type="submit">Avançar</Button>
        </S.Row>
      </form>
    </S.Wrapper>
  );
}
