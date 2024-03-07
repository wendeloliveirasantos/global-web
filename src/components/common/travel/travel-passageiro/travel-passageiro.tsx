import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { PageTitle } from "../../PageTitle";
import { Button, Select, TextInput } from "@/components/ui";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { STORAGE_VIAGEM_COTACAO } from "@/constants";
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
};

export default function DadosPassageiro() {
  const router = useRouter();
  const [passageiros, setPassageiros] = useState([INITIAL_VALUE]);
  const [passageiroSelecionado, setPassageiroSelecionado] = useState(0);
  const [existCotacao] = useLocalStorage(STORAGE_VIAGEM_COTACAO, "");
  const [formData, setFormData] = useState(INITIAL_VALUE);
  const [formErrors, setFormErrors] = useState(INITIAL_VALUE);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const steps = Array.from({ length: passageiros.length }, (_, index) => `Passageiro ${index + 1}`);

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
    console.log(passageiros);
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

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    console.log(activeStep);
    if (activeStep === 0) {
      router.push(`/seguros/viagem/dados-titular`);
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

    handleNext();

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
    // <S.Wrapper>
    //   <S.Description>{`Passageiro ${passageiroSelecionado + 1}`}</S.Description>
    //   <form onSubmit={handleSubmit}>
    //     <S.Row>
    //       <S.Group>
    //         <TextInput name="firstName" label="Nome" onChange={handleChange} helperText={formErrors.firstName}/>
    //       </S.Group>
    //       <S.Group>
    //         <TextInput
    //           name="lastName"
    //           label="Sobrenome"
    //           onChange={handleChange}
    //           helperText={formErrors.lastName}
    //         />
    //       </S.Group>
    //     </S.Row>
    //     <S.Row>
    //       <S.Group>
    //         <TextInput name="document" label="CPF" mask="999.999.999-99" onChange={handleChange} helperText={formErrors.document}/>
    //       </S.Group>
    //     </S.Row>
    //     <S.Row>
    //       <S.Group>
    //         <Select
    //           options={[
    //             { value: "female", label: "Feminino" },
    //             { value: "male", label: "Masculino" },
    //           ]}
    //           label="Sexo"
    //           onChange={(row) =>
    //             handleChange({ target: { name: "gender", value: row } })
    //           }
    //           helperText={formErrors.gender}
    //         />
    //       </S.Group>
    //       <S.Group>
    //         <DatePicker
    //           onChange={(value) => handleChange({ target: { value, name: "birthDate" } })}
    //           label="Data de Nascimento"
    //           type="date"
    //           name="birthDate"
    //           min={dayjs(new Date()).format("YYYY-MM-DD")}
    //           helperText={formErrors.birthDate}
    //         />
    //       </S.Group>
    //     </S.Row>
    //     <S.Row>
    //       <S.Group>
    //         <div style={{ marginTop: 20 }}>
    //           <Button type="submit">Avançar</Button>
    //         </div>
    //         <div style={{ marginTop: 20 }}>
    //           <Button href="/seguros/viagem/dados-titular" variant="outlined">Voltar</Button>
    //         </div>
    //       </S.Group>
    //     </S.Row>
    //   </form>
    // </S.Wrapper>

    <S.WrapperStep>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        
        <React.Fragment>
          <S.Wrapper>
            <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
              <S.Row>
                <S.Group>
                  <TextInput name="firstName" label="Nome" defaultValue={passageiros[0].firstName} value={formData.firstName} onChange={handleChange} helperText={formErrors.firstName}/>
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
                  <TextInput name="document" label="CPF" mask="999.999.999-99" value={formData.document} onChange={handleChange} helperText={formErrors.document}/>
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
                    onChange={(row) =>
                      handleChange({ target: { name: "gender", value: row } })
                    }
                    helperText={formErrors.gender}
                  />
                </S.Group>
                <S.Group>
                  <DatePicker
                    onChange={(value) => handleChange({ target: { value, name: "birthDate" } })}
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
                    <Button type="submit">Avançar</Button>
                  </div>
                  <div style={{ marginTop: 20 }}>
                    <Button onClick={handleBack} variant="outlined">Voltar</Button>
                  </div>
                </S.Group>
              </S.Row>
            </form>
          </S.Wrapper>
        </React.Fragment>
      </Box>
    </S.WrapperStep>
  );
}
