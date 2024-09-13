import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { PageTitle } from "../../PageTitle";
import { Button, Select, TextInput } from "@/components/ui";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { STORAGE_VIAGEM_COTACAO, STORAGE_VIAGEM_PASSAGEIROS } from "@/constants";
import { useRouter } from "next/router";
import { DatePicker } from "@/components/ui/DatePicker";
import dayjs from "dayjs";
import SubTitle from "../../SubTitle/SubTitle";
import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";

const INITIAL_VALUE = {
  firstName: "",
  lastName: "",
  document: "",
  gender: "",
  birthDate: "",
  age: ""
};

export default function DadosPassageiro() {
  const router = useRouter();
  const [, setPassageirosStorage] = useLocalStorage(STORAGE_VIAGEM_PASSAGEIROS, "");
  const [passageiros, setPassageiros] = useState([INITIAL_VALUE]);
  const [passageiroSelecionado, setPassageiroSelecionado] = useState(0);
  const [existCotacao] = useLocalStorage(STORAGE_VIAGEM_COTACAO, "");
  const [formData, setFormData] = useState(INITIAL_VALUE);
  const [formErrors, setFormErrors] = useState(INITIAL_VALUE);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const steps = Array.from({ length: passageiros.length-1 }, (_, index) => `Passageiro ${index + 1}`);

  useEffect(() => {
    if (existCotacao) {
      const cotacao = JSON.parse(existCotacao);
      setPassageiros(
        cotacao.passengers?.slice(1).map((r: any) => ({
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

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);

    //activeStep === steps.length - 1
  };

  function handleChange(name: string, value: string | number | null | undefined | boolean | number[]) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function validateAge(birthDate: string, age: number): boolean {
    const cotacaoObj = JSON.parse(existCotacao);
    const currentDate = dayjs();
    const parsedBirthDate = dayjs(birthDate, 'YYYY-MM-DD');
    const calculatedAge = currentDate.diff(parsedBirthDate, 'years');
    console.log(age);
    return calculatedAge == age;
  }

  const handleBack = () => {
    if (passageiroSelecionado == 0) {
      router.push(`/seguros/viagem/dados-titular`);
    }
    else if (passageiroSelecionado - 1 < passageiros.length) {
      setFormData(INITIAL_VALUE);
      setPassageiroSelecionado(passageiroSelecionado - 1);
      return;
    }
  };

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
    formData.age = passageiros[passageiroSelecionado].age;
    console.log(formData);
    if (formData.birthDate && !validateAge(formData.birthDate, parseInt(formData.age))) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        birthDate: "Data de nascimento não corresponde a sua idade",
      }));
      hasError = true;
    }

    if (hasError) {
      return;
    }

    //handleNext();

    setFormData(INITIAL_VALUE);
    formData.age = passageiros[passageiroSelecionado].age;
    passageiros[passageiroSelecionado] = formData;
    setPassageiroSelecionado(passageiroSelecionado + 1);

    if (passageiroSelecionado + 1 < passageiros.length) {
      return;
    }

    setPassageirosStorage(JSON.stringify(passageiros))
    
    router.push(`/seguros/viagem/pagamento`);
  }

  return (
    <S.Wrapper>
      <S.Description>{`Passageiro ${passageiroSelecionado + 1 + 1}`}</S.Description>
      <form onSubmit={handleSubmit}>
        <S.Row>
          <S.Group>
          <TextInput name="firstName" label="Nome" defaultValue={passageiros[0].firstName} value={formData.firstName} onChange={(e) => handleChange("firstName", e.target.value)} helperText={formErrors.firstName}/>
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
          <TextInput name="document" label="CPF" mask="999.999.999-99" value={formData.document} onChange={(e) => handleChange("document", e.target.value.replace(/\D/g, ''))} helperText={formErrors.document}/>
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
              value={formData.gender}
              onChange={(v) => handleChange("gender", v.toString())}
              helperText={formErrors.gender}
            />
          </S.Group>
          <S.Group>
            <DatePicker
              onChange={(e) => handleChange("birthDate", e)}
              label="Data de Nascimento"
              type="date"
              name="birthDate"
              value={formData.birthDate}
              min={dayjs(new Date()).format("YYYY-MM-DD")}
              helperText={formErrors.birthDate}
            />
          </S.Group>
        </S.Row>
        <S.Row>
          <S.Group>
            <div style={{ marginTop: 20 }}>
              <Button color="#FF5A62" type="submit">Avançar</Button>
            </div>
            <div style={{ marginTop: 20 }}>
              <Button color="#FF5A62" textColor="#FF5A62" onClick={handleBack} variant="outlined">Voltar</Button>
            </div>
          </S.Group>
        </S.Row>
      </form>
    </S.Wrapper>
  );
}
