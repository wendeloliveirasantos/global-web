import { Button, TextInput, TextInputMask, Select } from "@/components/ui";
import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    if (cotacao) {
      const cotacaoObj = JSON.parse(cotacao);
      setFormData(prevState => ({
        ...prevState,
        firstName: cotacaoObj.firstName,
        lastName: cotacaoObj.lastName,
        phone: cotacaoObj.phone,
        email: cotacaoObj.email
      }));
    }
  }, [cotacao]);

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

  function handleChange(name: string, value: string | number | null | undefined | boolean | number[]) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function validateAge(birthDate: string): boolean {
    const cotacaoObj = JSON.parse(cotacao);
    const currentDate = dayjs();
    const parsedBirthDate = dayjs(birthDate, 'YYYY-MM-DD');
    const calculatedAge = currentDate.diff(parsedBirthDate, 'years');
    console.log(calculatedAge);
    return calculatedAge == cotacaoObj.passengers[0].age;
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

    if (formData.birthDate && !validateAge(formData.birthDate)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        birthDate: "Data de nascimento não corresponde a sua idade",
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
      <S.Description>{`Passageiro 1`}</S.Description>
      <form onSubmit={handleSubmit}>
        <S.Row>
          <S.Group>
            <TextInput
              name="firstName"
              label="Nome"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              helperText={formErrors.firstName}
            />
          </S.Group>
          <S.Group>
            <TextInput
              name="lastName"
              label="Sobrenome"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
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
              onChange={(e) => handleChange("document", e.target.value.replace(/\D/g, ''))}
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
              onChange={(e) => handleChange("phone", e.target.value.replace(/\D/g, ''))}
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
              onChange={(e) => handleChange("email", e.target.value)}
              helperText={formErrors.email}
            />
          </S.Group>
        </S.Row>

        <S.Row>
          <S.Group>
            <DatePicker
              onChange={(e) => {handleChange("birthDate", e)}}
              label="Data de Nascimento"
              type="date"
              value={formData.birthDate}
              name="birthDate"
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
              onChange={(e) => handleChange("postalCode", e.target.value.replace(/\D/g, ''))}
              onBlur={handleCepBlur}
              helperText={formErrors.postalCode}
            />
          </S.Group>
          <S.Group>
            <TextInput
              name="address"
              label="Endereço"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
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
              onChange={(e) => handleChange("number", e.target.value)}
              helperText={formErrors.number}
            />
          </S.Group>
          <S.Group>
            <TextInput
              name="neighborhood"
              label="Bairro"
              value={formData.neighborhood}
              onChange={(e) => handleChange("neighborhood", e.target.value)}
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
              onChange={(e) => handleChange("city", e.target.value)}
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
              onChange={(v) => handleChange("state", v.toString())}
              helperText={formErrors.state}
            />
          </S.Group>
        </S.Row>

        <div style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
          <Button type="submit">Avançar</Button>
        </div>
        <div style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
          <Button href="/seguros/viagem/coberturas" variant="outlined">Voltar</Button>
        </div>
      </form>
    </S.Wrapper>
  );
}
