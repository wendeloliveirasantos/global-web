import { hybridService } from "@/services";
import React, { useCallback, useEffect, useState } from "react";
import * as S from "./hybrid-quote.styles";
import { Button, Select, TextInput, Search } from "@/components/ui";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { STORAGE_RESIDENCIAL_COTACAO } from "@/constants";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import { ITravelDestiniesModel } from "@/types/travel-destinies";
import { DatePicker } from "@/components/ui/DatePicker";
import { Switch } from "@/components/ui/Switch";
import { Checkbox } from "@/components/ui/Checkbox";
import { Slider } from "@/components/ui/Slider";
import { Grid } from "@mui/material";
type ValuesProps = {
  firstName: string,
  lastName: string,
  razaoSocial: string,
  birthDate: string,
  phone: string,
  email: string,
  termo: boolean,
  //rangePremio: number,
};

const marks = [
  {
    value: 30,
    label: '30.000 €',
  },
  {
    value: 250,
    label: '$250.000',
  },
  {
    value: 500,
    label: '$500.000',
  },
  {
    value: 750,
    label: '$750.000',
  },
  {
    value: 1000,
    label: '$1.000.000',
  },
];

export default function HybridQuote({ onSubmit, business }: any) {
  const router = useRouter();
  const [cotacao, setCotacao] = useLocalStorage(STORAGE_RESIDENCIAL_COTACAO, "");
  const [values, setValues] = useState<ValuesProps>({
    firstName: "",
    lastName: "",
    razaoSocial: "",
    birthDate: "",
    phone: "",
    email: "",
    termo: false,
    //rangePremio: 10
  });
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [razaoSocialError, setRazaoSocialError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [birthDateError, setBirthDateError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [termoError, setTermoError] = useState("");

  useEffect(() => {

  }, []);

  function handleAge(v: number, i: number) {
    
  }

  function handleChange(name: string, value: string | number | null | undefined | boolean | number[]) {
    setValues((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    setFirstNameError("");
    setLastNameError("");
    setRazaoSocialError("");
    setPhoneError("");
    setBirthDateError("");
    setEmailError("");
    setTermoError("");

    let hasError = false;

    if (business != "empresarial" && !values.firstName) {
      setFirstNameError("Por favor, insira o primeiro nome");
      hasError = true;
    }

    if (business != "empresarial" && !values.lastName) {
      setLastNameError("Por favor, insira o sobrenome");
      hasError = true;
    }

    if (business == "empresarial" && !values.razaoSocial) {
      setRazaoSocialError("Por favor, insira a razão social");
      hasError = true;
    }

    if (!values.phone) {
      setPhoneError("Por favor, insira o telefone");
      hasError = true;
    }

    if (!values.email) {
      setEmailError("Por favor, insira o e-mail");
      hasError = true;
    }

    if ((business == "vida" || business == "acidentesPessoais") && !values.birthDate) {
      setBirthDateError("Por favor, insira a data de nascimento");
      hasError = true;
    }

    if (!values.termo) {
      setTermoError("Por favor, aceite o termo");
      hasError = true;
    }

    const ageErrors: string[] = [];

    if (hasError) {
      return;
    }

    setCotacao(
      JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        razaoSocial: values.razaoSocial,
        birthDate: values.birthDate,
        phone: values.phone,
        email: values.email,
        termo: values.termo,
        //rangePremio: values.rangePremio
      })
    );

    onSubmit(values);
  }

  return (
    <S.Card>
      <form onSubmit={handleSubmit}>

        { business != "empresarial" ? 
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextInput
                name="firstName"
                label="Nome"
                onChange={(e) => handleChange("firstName", e.target.value)}
                helperText={firstNameError}
              />
            </Grid>
            <Grid item xs={6}>
              <TextInput
                name="lastName"
                label="Sobrenome"
                onChange={(e) => handleChange("lastName", e.target.value)}
                helperText={lastNameError}
              />
            </Grid>
          </Grid> : 
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextInput
                name="razaoSocial"
                label="Razão Social"
                onChange={(e) => handleChange("razaoSocial", e.target.value)}
                helperText={razaoSocialError}
              />
            </Grid>
          </Grid>
        }

        <div style={{ width: "100%", marginTop: 10 }}>
          <TextInput
            mask="(99) 99999-9999"
            name="phone"
            label="Telefone"
            onChange={(e) => handleChange("phone", e.target.value.replace(/\D/g, ''))}
            helperText={phoneError}
          />
        </div>

        { business == "vida" || business == "acidentesPessoais" ?
          <div style={{ marginRight: 10, width: "100%", marginTop: 10 }}>
            <DatePicker
              onChange={(e) => handleChange("birthDate", e)}
              label="Data de Nascimento"
              type="date"
              name="birthDate"
              min={dayjs(new Date()).format("YYYY-MM-DD")}
              helperText={birthDateError}
              border={true}
            />
          </div> : null
        }
        
        <div style={{ width: "100%", marginTop: 10 }}>
          <TextInput
            name="email"
            label="Email"
            type="email"
            onChange={(e) => handleChange("email", e.target.value)}
            helperText={emailError}
          />
        </div>
        
        {/* <div style={{ marginTop: 20 }}>
          <Slider 
            name="rangePremio"
            marks={marks}
            min={30}
            max={1000}
            label="Escolha o valor máximo da cobertura."
            onChange={(e, v) => handleChange("rangePremio", v)}
          />
        </div> */}

        <div style={{ marginTop: 20 }}>
          <Switch
            label="Declaro que li e concordo com a Política de Privacidade"
            onChange={(e) => handleChange("termo", e)}
            helperText={termoError}
          />
        </div>
        
        <div style={{ marginTop: 20 }}>
          <Button color="#FF5A62" type="submit">Avançar</Button>
        </div>
      </form>
    </S.Card>
  );
}
