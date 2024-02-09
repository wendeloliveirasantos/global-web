import { travelService } from "@/services";
import React, { useCallback, useEffect, useState } from "react";
import * as S from "./travel-quote.styles";
import { Button, Select, TextInput, Search } from "@/components/ui";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { STORAGE_VIAGEM_COTACAO } from "@/constants";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import { ITravelDestiniesModel } from "@/types/travel-destinies";
type ValuesProps = {
  from: string;
  to: string;
  startDate: Date | null;
  endDate: Date | null;
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

export default function TravelQuote() {
  const router = useRouter();
  const [cotacao, setCotacao] = useLocalStorage(STORAGE_VIAGEM_COTACAO, "");
  const [values, setValues] = useState<ValuesProps>({
    from: "BR",
    to: "",
    startDate: null,
    endDate: null,
  });
  const [passengers, setPassengers] = useState<Array<{ age: number | null }>>(
    []
  );
  const [destinyTerm, setDestinationTerm] = useState<string>("");
  const [destinies, setDestination] = useState<any[]>([]);
  const [destinyModel, setDestinationModel] = useState<ITravelDestiniesModel | null>(
    null
  );
  const [destinationError, setDestinationError] = useState("");
  const [startDateError, setStartDateError] = useState("");
  const [endDateError, setEndDateError] = useState("");
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

  function handleChange(name: string, value: string) {
    setValues((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    setDestinationError("");
    setStartDateError("");
    setEndDateError("");
    setPassengerAgeErrors([]);

    let hasError = false;

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
        endDate: values.endDate?.toString(),
        startDate: values.startDate?.toString(),
        from: values.from,
        to: values.to,
        passengers: passengers.map((r) => ({ age: r.age ?? 0 })),
      })
    );
    router.push("/seguros/viagem/coberturas");
  }

  return (
    <S.Card>
      <form onSubmit={handleSubmit}>
        {/* <Search
          onSearch={(v: string) => setDestinationTerm(v)}
          label="Destino"
          options={destinies.map((destiny) => ({
            value: destiny.siglaPais,
            label: `${destiny.pais}`,
          }))}
          onChange={(row: any) => handleChange("to", row.toString())}
        /> */}
        <Select
          onChange={(v) => handleChange("to", v.toString())}
          label="Qual seu próximo destino?"
          options={from}
        />
        {destinationError && (
          <span style={{ color: "red" }}>{destinationError}</span>
        )}

        <S.RowInputs>
          <div style={{ marginRight: 10, width: "100%" }}>
            <TextInput
              onChange={(e) => handleChange("startDate", e.target.value)}
              label="Data de Saída"
              type="date"
              name="startDate"
              min={dayjs(new Date()).format("YYYY-MM-DD")}
            />
            {startDateError && (
              <span style={{ color: "red" }}>{startDateError}</span>
            )}
          </div>
          <div style={{ width: "100%" }}>
            <TextInput
              onChange={(e) => handleChange("endDate", e.target.value)}
              label="Data de Retorno"
              type="date"
              name="endDate"
              min={dayjs(new Date()).format("YYYY-MM-DD")}
            />
            {endDateError && (
              <span style={{ color: "red" }}>{endDateError}</span>
            )}
          </div>
        </S.RowInputs>

        <Select
          onChange={(v) => addPassengers(+v)}
          label="Passageiros"
          options={quantPass}
        />

        <S.Passengers>
          {passengers.map((passenger, idx) => {
            return (
              <S.Row key={idx}>
                <TextInput
                  type="number"
                  onChange={(e) => handleAge(+e.target.value, idx)}
                  name="age"
                  placeholder={`Idade do pass. ${idx + 1}`}
                />
                {passengerAgeErrors[idx] && (
                  <span style={{ color: "red" }}>
                    {passengerAgeErrors[idx]}
                  </span>
                )}
              </S.Row>
            );
          })}
        </S.Passengers>

        <div style={{ marginTop: 20 }}>
          <Button type="submit">Avançar</Button>
        </div>
      </form>
    </S.Card>
  );
}
