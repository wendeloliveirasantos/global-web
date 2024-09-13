/* eslint-disable react-hooks/exhaustive-deps */
import { autoService } from "@/services";
import { IAutoVehicleModel } from "@/types/auto-vehicle";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Radio,
  Search,
  Select,
  TextInput,
  TextInputMask,
} from "../../ui";
import { PageTitle } from "../PageTitle";
import * as S from "./VehicleData.styles";

function generateManufactureYear(value: string): string[] {
  return [(parseInt(value) - 1).toString(), value];
}

type VehicleDataProps = {
  onSubmit(data: any): void;
};

export default function VehicleData({ onSubmit }: VehicleDataProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm();
  const [vehicleTerm, setVehicleTerm] = useState<string>("");
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [vehicleModel, setVehicleModel] = useState<IAutoVehicleModel | null>(
    null
  );
  const [modelYear, setModelYear] = useState<string>("");
  const [manufactureYear, setManufactureYear] = useState<string>("");
  const [isNewVehicle, setIsNewVehicle] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("")

  async function fetchVehicles() {
    const { result } = await autoService.listVehicles({
      description: vehicleTerm,
    });
    setVehicles(result);
  }

  useEffect(() => {
    if (vehicleTerm.length > 3) {
      fetchVehicles();
    }
  }, [vehicleTerm]);

  function onHandleSubmit(data: any) {
    onSubmit({
      vehicleModel,
      modelYear,
      manufactureYear,
      isNewVehicle,
      postalCode
    })
  }

  return (
    <S.Wrapper>
      <PageTitle bold="Dados" regular="do Veículo" />
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <Search
          onSearch={(v: string) => setVehicleTerm(v)}
          label="Procure por seu veiculo"
          options={vehicles.map((vehicle) => ({
            value: vehicle.model,
            label: `${vehicle.model.brand.description} - ${vehicle.model.description}`,
          }))}
          onChange={(row: any) => setVehicleModel(row)}
        />
        {vehicleModel && (
          <Select
            label="Ano do Modelo"
            onChange={(row: string) => setModelYear(row)}
            options={vehicleModel.yearsModel.map((row) => ({
              label: row.year,
              value: row.year,
            }))}
          />
        )}
        {modelYear && (
          <Select
            label="Ano do Produção"
            onChange={(row: string) => setManufactureYear(row)}
            options={generateManufactureYear(modelYear).map((y) => ({
              label: y,
              value: y,
            }))}
          />
        )}
        {manufactureYear && (
          <Radio
            change={(v: string) => setIsNewVehicle(v)}
            label="O veículo é novo?"
            answer={isNewVehicle}
          />
        )}
        {isNewVehicle && (
        <TextInputMask
          mask="99999 999"
          label="CEP"
          name="postalCode"
          onChange={e => setPostalCode(e.target.value)}
        />
      )}
        {postalCode?.length === 9 && (
          <div style={{ marginTop: 40 }}>
            <Button color="#FF5A62" type="submit">Avançar</Button>
          </div>
        )}
      </form>
    </S.Wrapper>
  );
}
