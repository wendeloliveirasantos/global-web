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
import { Box, Grid, Icon, Typography } from "@mui/material";
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
  { value: "1;X4", label: "América do Norte" },
  { value: "2;X6", label: "Europa" },
  { value: "3;X2", label: "América Central" },
  { value: "4;X9", label: "América do Sul" },
  { value: "5;X5", label: "África" },
  { value: "6;X7", label: "Ásia" },
  { value: "7;X8", label: "Oceania" },
  { value: "9;BR", label: "Brasil" },
];

const quantPass = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
  { value: 9, label: "9" },
  { value: 10, label: "10" },
];

const marks = [
  {
    value: 0,
    label: '0.000 €',
  },
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
  const [passengerError, setPassengerError] = useState("");
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

  const validateDate = (date: any) => {
    let hasError = false; // Variável de controle para erro

    if (!values.startDate) {
      setStartDateError("Por favor, selecione a data de saída");
      hasError = true;
      return hasError;
    }

    if (!values.endDate) {
      setEndDateError("Por favor, selecione a data de retorno");
      hasError = true;
      return hasError;
    }

    const selectedDate = dayjs(values.startDate); // Converte a data selecionada

    if (!selectedDate.isValid()) {
      setStartDateError("Data inválida");
      hasError = true;
      return hasError;
    }

    const today = dayjs().startOf('day'); // Define a data de hoje como o início do dia atual

    if (!selectedDate.isAfter(today)) { // Verifica se a data é posterior a hoje
      setStartDateError("Selecione uma data posterior ao dia de hoje");
      hasError = true;
      return hasError;
    }

    setStartDateError('');
    return hasError; // Data válida
  };
  // Função para lidar com a mudança de valores
  function handleChange(name: string, value: string | number | null | undefined | boolean | number[]) {
    // Atualiza o estado normalmente para todos os campos
    setValues((prevState) => ({ ...prevState, [name]: value }));
  }

  // Função para lidar com a validação no evento blur (quando o campo perde o foco)
  function handleBlur(name: string) {
    const value = values[name as keyof ValuesProps]; // Pega o valor do campo
    if (name === 'startDate') {
      const errorMessage = validateDate(value); // Valida a data
    }
    if (name === 'endDate') {
      const errorMessage = validateDate(value); // Valida a data
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    setFirstNameError("");
    setLastNameError("");
    setPhoneError("");
    setEmailError("");
    setDestinationError("");
    setPassengerError("");
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
      setEmailError("Por favor, insira o e-mail");
      hasError = true;
    }

    if (!values.to) {
      setDestinationError("Por favor, selecione o destino");
      hasError = true;
    }

    if (!passengers.length) {
      setPassengerError("Por favor, escolha a quantidade");
      hasError = true;
    }
    
    if (validateDate(values.startDate)) {
    }

    if (validateDate(values.endDate)) {
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

        <Grid container spacing={1.5}>
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

        <div style={{ width: "100%", marginTop: 15 }}>
          <TextInput
            mask="(99) 99999-9999"
            name="phone"
            label="Celular"
            onChange={(e) => handleChange("phone", e.target.value.replace(/\D/g, ''))}
            helperText={phoneError}
          />
        </div>

        <div style={{ width: "100%", marginTop: 15 }}>
          <TextInput
            name="email"
            label="E-mail"
            type="email"
            onChange={(e) => handleChange("email", e.target.value)}
            helperText={emailError}
          />
        </div>
        
        <div style={{ width: "100%", marginTop: 15 }}>
          <Select
            onChange={(v) => handleChange("to", v.toString())}
            label="Para qual continente você vai viajar?"
            options={from}
            helperText={destinationError}
          />
        </div>

        <div style={{ marginTop: 15, marginBottom: 15 }}>
          <Select
            onChange={(v) => addPassengers(+v)}
            label="Número de passageiros"
            options={quantPass}
            helperText={passengerError}
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

        <div style={{background: 'white', borderRadius: 28, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', height: 72, paddingTop: 16, paddingBottom: 8, paddingLeft: 24, paddingRight: 12, borderBottom: '1px #CAC4D0 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <Box sx={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'flex-start', gap: 1, display: 'inline-flex'}}>
                    <Box sx={{ flex: '1 1 0', alignSelf: 'stretch', color: '#333333', fontSize: 24, fontWeight: '400', lineHeight: 2, wordWrap: 'break-word' }}>Selecione as Datas</Box>
                    <Box sx={{ width: 48, height: 48, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                      <Icon sx={{ padding: 8, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex', borderRadius: 100, overflow: 'hidden' }}>
                        <img src='/images/today-24px.svg' alt="Custom Icon" style={{ }}/>
                      </Icon>
                    </Box>
                </Box>
            </div>
            <div style={{alignSelf: 'stretch', paddingTop: 18, paddingBottom: 16, paddingLeft: 24, paddingRight: 24, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
              <div style={{ width: "100%" }}>
                <DatePicker
                  onChange={(e) => handleChange('startDate', e)} // Atualiza o estado com o valor da data
                  onBlur={() => handleBlur('startDate')} // Executa a validação no evento blur
                  label="Ida"
                  type="date"
                  name="startDate"
                  value={values.startDate} // Controla o valor da data
                  helperText={startDateError} // Mostra a mensagem de erro, se houver
                />
              </div>
              <div style={{ width: "100%" }}>
                <DatePicker
                  onChange={(e) => handleChange("endDate", e)}
                  onBlur={() => handleBlur('endDate')}
                  label="Retorno"
                  type="date"
                  name="endDate"
                  value={values.endDate}
                  helperText={endDateError}
                /> 
              </div>
            </div>
            <div style={{alignSelf: 'stretch', paddingTop: 8, paddingBottom: 12, paddingLeft: 12, paddingRight: 12, justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
                {/* <div style={{flex: '1 1 0', height: 40, justifyContent: 'flex-end', alignItems: 'flex-end', gap: 8, display: 'flex'}}>
                    <div style={{height: 40, borderRadius: 100, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', flex: '1 1 0', paddingLeft: 12, paddingRight: 12, paddingTop: 10, paddingBottom: 10, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                            <div style={{textAlign: 'center', color: '#FF5A62', fontSize: 14, fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Cancelar</div>
                        </div>
                    </div>
                    <div style={{height: 40, borderRadius: 100, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', flex: '1 1 0', paddingLeft: 12, paddingRight: 12, paddingTop: 10, paddingBottom: 10, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                            <div style={{textAlign: 'center', color: '#FF5A62', fontSize: 14, fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>OK</div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>

        {
          values.to != "9;BR" ?
          
          <div style={{ marginTop: 35 }}>
            <Slider 
              name="rangePremio"
              marks={marks}
              min={0}
              max={1000}
              value={values.rangePremio}
              label="Selecione o valor da cobertura:"
              onChange={(e, v) => handleChange("rangePremio", v)}
            />
          </div> : null
        }

        <S.Container>
          <S.Background>
            <S.Text>
              {values.rangePremio * 1000 <= 30000 ? "EUR" : "USD"}{" "}
              {new Intl.NumberFormat('pt-BR', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(values.rangePremio * 1000)}
            </S.Text>
          </S.Background>
        </S.Container>
          
        <div style={{ marginTop: 30 }}>
          <Switch
            label="Declaro que li e concordo com a Política de Privacidade"
            onChange={(e) => handleChange("termo", e)}
            helperText={termoError}
          />
        </div>
        
        <div style={{ marginTop: 30 }}>
          <Button color="#FF5A62" type="submit">Avançar</Button>
        </div>
      </form>
    </S.Card>
  );
}
