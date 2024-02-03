import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { PageTitle } from "../../PageTitle";
import { Button, Select, TextInput } from "@/components/ui";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { STORAGE_VIAGEM_COTACAO } from "@/constants";
import { useRouter } from "next/router";

const INITIAL_VALUE = {
  firstName: "",
  lastName: "",
  document: "",
  gender: "",
  birthDate: "",
};

export default function DadosPassageiro() {
  const router = useRouter();
  const [passageiros, setPassageiros] = useState([]);
  const [passageiroSelecionado, setPassageiroSelecionado] = useState(0);
  const [existCotacao] = useLocalStorage(STORAGE_VIAGEM_COTACAO, "");
  const [formData, setFormData] = useState(INITIAL_VALUE);
  const [formErrors, setFormErrors] = useState(INITIAL_VALUE);

  useEffect(() => {
    if (existCotacao) {
      const cotacao = JSON.parse(existCotacao);
      setPassageiros(
        cotacao.passengers?.map((r: any) => ({
          firstName: "",
          lastName: "",
          document: "",
          gender: "",
          birthDate: "",
          age: r.age,
        }))
      );
    }
  }, [existCotacao]);

  if (!existCotacao) return <>Carregando...</>;

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
        document: "Por favor, insira o documento",
      }));
      hasError = true;
    }
    if (!formData.gender) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        gender: "Por favor, insira o sexo",
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

    if (hasError) {
      return;
    }

    if (passageiroSelecionado + 1 < passageiros.length) {
      setFormData(INITIAL_VALUE);
      const arr = [...passageiros] as any;
      arr[passageiroSelecionado] = formData;
      setPassageiroSelecionado(passageiroSelecionado + 1);
      return;
    }

    router.push(`/seguros/viagem/pagamento`);
  }

  return (
    <S.Wrapper>
      <PageTitle bold="Dados" regular="dos Passageiros" />
      <S.Description>{`Passageiro ${passageiroSelecionado + 1}`}</S.Description>
      <form onSubmit={handleSubmit}>
        <S.Row>
          <S.Group>
            <TextInput name="firstName" label="Nome" onChange={handleChange} />
            {formErrors.firstName && (
              <span style={{ color: "red" }}>{formErrors.firstName}</span>
            )}
          </S.Group>
          <S.Group>
            <TextInput
              name="lastName"
              label="Sobrenome"
              onChange={handleChange}
            />
            {formErrors.lastName && (
              <span style={{ color: "red" }}>{formErrors.lastName}</span>
            )}
          </S.Group>
        </S.Row>
        <S.Row>
          <S.Group>
            <TextInput name="document" label="CPF" onChange={handleChange} />
            {formErrors.document && (
              <span style={{ color: "red" }}>{formErrors.document}</span>
            )}
          </S.Group>
        </S.Row>
        <S.Row>
          <S.Group>
            <Select
              options={[
                { value: "female", label: "Feminino" },
                { value: "male", label: "Masculino" },
              ]}
              label="Sexo"
              onChange={(row) =>
                handleChange({ target: { name: "gender", value: row } })
              }
            />
            {formErrors.gender && (
              <span style={{ color: "red" }}>{formErrors.gender}</span>
            )}
          </S.Group>
          <S.Group>
            <TextInput
              type="date"
              name="birthDate"
              label="Data de Nascimento"
              onChange={handleChange}
            />
            {formErrors.birthDate && (
              <span style={{ color: "red" }}>{formErrors.birthDate}</span>
            )}
          </S.Group>
        </S.Row>
        <S.Row>
          <S.Group>
            <Button type="submit">Avançar</Button>
          </S.Group>
        </S.Row>
      </form>
    </S.Wrapper>
  );
}
