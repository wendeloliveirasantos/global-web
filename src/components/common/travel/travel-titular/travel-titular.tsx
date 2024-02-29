import { Button, TextInput, TextInputMask, Select } from "@/components/ui";
import React, { useState } from "react";
import * as S from "./styles";
import { PageTitle } from "../../PageTitle";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { STORAGE_VIAGEM_COTACAO, STORAGE_VIAGEM_TITULAR } from "@/constants";
import { useRouter } from "next/router";
import { ufs } from "@/utils/ufs";
import { consultCep } from "@/services/travelService";
import { DatePicker } from "@/components/ui/DatePicker";
import dayjs from "dayjs";
import { TextMask } from "@/components/ui/TextMask";

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
      <form onSubmit={handleSubmit}>
        <S.Row>
          <S.Group>
            <TextInput
              name="firstName"
              label="Nome"
              value={formData.firstName}
              onChange={handleChange}
              helperText={formErrors.firstName}
            />
          </S.Group>
          <S.Group>
            <TextInput
              name="lastName"
              label="Sobrenome"
              value={formData.lastName}
              onChange={handleChange}
              helperText={formErrors.lastName}
            />
          </S.Group>
        </S.Row>

        <S.Row>
          <S.Group>
            <TextInput
              mask="999.999.999-99"
              name="document"
              label="CPF"
              value={formData.document}
              onChange={handleChange}
              helperText={formErrors.document}
            />
          </S.Group>
        </S.Row>

        <S.Row>
          <S.Group>
            <TextInput
              mask="(99) 99999-9999"
              name="phone"
              label="Telefone"
              value={formData.phone}
              onChange={handleChange}
              helperText={formErrors.phone}
            />
          </S.Group>
        </S.Row>

        <S.Row>
          <S.Group>
            <TextInput
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
              helperText={formErrors.email}
            />
          </S.Group>
        </S.Row>

        <S.Row>
          <S.Group>
            <TextInput
              onChange={handleChange}
              type="date"
              name="birthDate"
              label="Data de Nascimento"
              min={dayjs(new Date()).format("YYYY-MM-DD")}
              helperText={formErrors.birthDate}
            />
          </S.Group>
        </S.Row>

        <S.Row>
          <S.Group>
            <TextInput
              mask="99999-999"
              name="postalCode"
              label="CEP"
              value={formData.postalCode}
              onChange={handleChange}
              onBlur={handleCepBlur}
              helperText={formErrors.postalCode}
            />
          </S.Group>
          <S.Group>
            <TextInput
              name="address"
              label="Endereço"
              value={formData.address}
              onChange={handleChange}
              helperText={formErrors.address}
            />
          </S.Group>
        </S.Row>

        <S.Row>
          <S.Group>
            <TextInput
              name="number"
              label="Numero"
              value={formData.number}
              onChange={handleChange}
              helperText={formErrors.number}
            />
          </S.Group>
          <S.Group>
            <TextInput
              name="neighborhood"
              label="Bairro"
              value={formData.neighborhood}
              onChange={handleChange}
              helperText={formErrors.neighborhood}
            />
          </S.Group>
        </S.Row>

        <S.Row>
          <S.Group>
            <TextInput
              name="city"
              label="Cidade"
              value={formData.city}
              onChange={handleChange}
              helperText={formErrors.city}
            />
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
              helperText={formErrors.state}
            />
          </S.Group>
        </S.Row>

        <div style={{ marginTop: 20 }}>
          <Button type="submit">Avançar</Button>
        </div>
        <div style={{ marginTop: 20 }}>
          <Button href="/seguros/viagem/coberturas" variant="outlined">Voltar</Button>
        </div>
      </form>
    </S.Wrapper>
  );
}
