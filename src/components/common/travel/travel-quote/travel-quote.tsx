import { travelService } from "@/services";
import React, { useCallback, useEffect, useState } from "react";
import * as S from "./travel-quote.styles";
import { Button, Select, TextInput, Search } from "@/components/ui";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { STORAGE_VIAGEM_COTACAO } from "@/constants";
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
  phone: string,
  email: string,
  from: string;
  to: string;
  startDate: Date | null;
  endDate: Date | null;
  termo: boolean;
  rangePremio: number;
};

const from = [
  { value: "1;X4", label: "AMERICA DO NORTE" },
  { value: "2;X6", label: "EUROPA" },
  { value: "3;X2", label: "AMERICA CENTRAL" },
  { value: "4;X9", label: "AMERICA DO SUL" },
  { value: "5;X5", label: "AFRICA" },
  { value: "6;X7", label: "ASIA" },
  { value: "7;X8", label: "OCEANIA" },
  { value: "9;BR", label: "BRASIL" },
];

const quantPass = [
  { value: 1, label: "1 Passageiro" },
  { value: 2, label: "2 Passageiro" },
  { value: 3, label: "3 Passageiro" },
  { value: 4, label: "4 Passageiro" },
  { value: 5, label: "5 Passageiro" },
  { value: 6, label: "6 Passageiro" },
  { value: 7, label: "7 Passageiro" },
  { value: 8, label: "8 Passageiro" },
  { value: 9, label: "9 Passageiro" },
  { value: 10, label: "10 Passageiro" },
];

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

export default function TravelQuote() {
  const router = useRouter();
  const [cotacao, setCotacao] = useLocalStorage(STORAGE_VIAGEM_COTACAO, "");
  const [values, setValues] = useState<ValuesProps>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    from: "BR",
    to: "",
    startDate: null,
    endDate: null,
    termo: false,
    rangePremio: 30
  });
  const [passengers, setPassengers] = useState<Array<{ age: number | null }>>(
    []
  );
  const [destinyTerm, setDestinationTerm] = useState<string>("");
  const [destinies, setDestination] = useState<any[]>([]);
  const [destinyModel, setDestinationModel] = useState<ITravelDestiniesModel | null>(
    null
  );
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [destinationError, setDestinationError] = useState("");
  const [startDateError, setStartDateError] = useState("");
  const [endDateError, setEndDateError] = useState("");
  const [termoError, setTermoError] = useState("");
  const [passengerAgeErrors, setPassengerAgeErrors] = useState<Array<string>>(
    []
  );

  async function fetchDestinations() {
    const { result } = await travelService.listDestinies({
      description: destinyTerm
    });
    setDestination(result);
  }

  useEffect(() => {
    if (destinyTerm.length > 3) {
      fetchDestinations();
    }
  }, [destinyTerm]);

  function addPassengers(quantity: number) {
    let array = [];
    for (let i = 0; i < quantity; i++) {
      array.push({
        age: null,
      });
    }
    setPassengers(array);
  }

  function handleAge(v: number, i: number) {
    setPassengers((prevState) => {
      const newArray = [...prevState];
      newArray[i].age = v;
      return newArray;
    });
  }

  function handleChange(name: string, value: string | number | null | undefined | boolean | number[]) {
    setValues((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    setFirstNameError("");
    setLastNameError("");
    setPhoneError("");
    setEmailError("");
    setDestinationError("");
    setStartDateError("");
    setEndDateError("");
    setTermoError("");
    setPassengerAgeErrors([]);

    let hasError = false;

    if (!values.firstName) {
      setFirstNameError("Por favor, insira o primeiro nome");
      hasError = true;
    }

    if (!values.lastName) {
      setLastNameError("Por favor, insira o sobrenome");
      hasError = true;
    }

    if (!values.phone) {
      setPhoneError("Por favor, insira o telefone");
      hasError = true;
    }

    if (!values.email) {
      setEmailError("Por favor, insira o telefone");
      hasError = true;
    }

    if (!values.to) {
      setDestinationError("Por favor, selecione o destino");
      hasError = true;
    }

    if (!values.startDate) {
      setStartDateError("Por favor, selecione a data de saída");
      hasError = true;
    }

    if (!values.endDate) {
      setEndDateError("Por favor, selecione a data de retorno");
      hasError = true;
    }

    if (!values.termo) {
      setTermoError("Por favor, aceite o termo");
      hasError = true;
    }

    if (values.endDate && values.startDate) {
      const startDate = dayjs(values.startDate);
      const endDate = dayjs(values.endDate);

      if (endDate.isBefore(startDate)) {
        setEndDateError("A data de retorno deve ser após a data de saída");
        hasError = true;
      }
    }

    const ageErrors: string[] = [];

    passengers.forEach((passenger, idx) => {
      if (!passenger.age || isNaN(passenger.age) || passenger.age <= 0) {
        ageErrors[idx] = "Por favor, insira uma idade válida";
        hasError = true;
      }
    });

    if (!passengers.length) return

    setPassengerAgeErrors(ageErrors);

    if (hasError) {
      return;
    }

    setCotacao(
      JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
        email: values.email,
        endDate: values.endDate?.toString(),
        startDate: values.startDate?.toString(),
        from: values.from,
        to: values.to,
        passengers: passengers.map((r) => ({ age: r.age ?? 0 })),
        termo: values.termo,
        rangePremio: values.to == "9;BR" ? 500000 : values.rangePremio
      })
    );
    router.push("/seguros/viagem/coberturas");
  }

  return (
    <S.Card>
      <form onSubmit={handleSubmit}>

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
        </Grid>

        <div style={{ width: "100%", marginTop: 10 }}>
          <TextInput
            mask="(99) 99999-9999"
            name="phone"
            label="Telefone"
            onChange={(e) => handleChange("phone", e.target.value.replace(/\D/g, ''))}
            helperText={phoneError}
          />
        </div>

        <div style={{ width: "100%", marginTop: 10 }}>
          <TextInput
            name="email"
            label="Email"
            type="email"
            onChange={(e) => handleChange("email", e.target.value)}
            helperText={emailError}
          />
        </div>
        
        <div style={{ width: "100%", marginTop: 10 }}>
          <Select
            onChange={(v) => handleChange("to", v.toString())}
            label="Qual seu próximo destino?"
            options={from}
            helperText={destinationError}
          />
        </div>

        <S.RowInputs>
          <div style={{ marginRight: 10, width: "100%", marginTop: 10 }}>
            <DatePicker
              onChange={(e) => handleChange("startDate", e)}
              label="Data de Saída"
              type="date"
              name="startDate"
              min={dayjs(new Date()).format("YYYY-MM-DD")}
              helperText={startDateError}
            />
          </div>
          <div style={{ width: "100%", marginTop: 10 }}>
            <DatePicker
              onChange={(e) => handleChange("endDate", e)}
              label="Data de Retorno"
              type="date"
              name="endDate"
              min={dayjs(new Date()).format("YYYY-MM-DD")}
              helperText={endDateError}
            /> 
          </div>
        </S.RowInputs>
        
        <div style={{ marginTop: 10 }}>
          <Select
            onChange={(v) => addPassengers(+v)}
            label="Passageiros"
            options={quantPass}
            helperText={destinationError}
          />
        </div>
        
        <S.Passengers>
          {passengers.map((passenger, idx) => {
            return (
              <S.Row key={idx}>
                <TextInput
                  min={0}
                  type="number"
                  onChange={(e) => handleAge(+e.target.value, idx)}
                  name="age"
                  label={`Idade do pass. ${idx + 1}`}
                  helperText={passengerAgeErrors[idx]}
                />
              </S.Row>
            );
          })}
        </S.Passengers>
        {
          values.to != "9;BR" ?
          
          <div style={{ marginTop: 20 }}>
            <Slider 
              name="rangePremio"
              marks={marks}
              min={30}
              max={1000}
              label="Escolha o valor máximo da cobertura."
              onChange={(e, v) => handleChange("rangePremio", v)}
            />
          </div> : null
        }
        <div style={{ marginTop: 20 }}>
          <Checkbox 
            label="Declaro que li e concordo com a Política de Privacidade."
            onChange={(e) => handleChange("termo", e)}
            helperText={termoError}
          />
        </div>
        
        <div style={{ marginTop: 20 }}>
          <Button type="submit">Avançar</Button>
        </div>
      </form>
    </S.Card>
  );
}
