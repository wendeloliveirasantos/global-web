/* eslint-disable react-hooks/exhaustive-deps */
import { autoService } from "@/services";
import theme from "@/styles/theme";
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
} from "../../../ui";
import { PageTitle } from "../../PageTitle";
import * as S from "./DriverData.styles";

function generateManufactureYear(value: string): string[] {
  return [(parseInt(value) - 1).toString(), value];
}

type DriverDataProps = {
  onSubmit(data: any): void;
};

export default function DriverData({ onSubmit }: DriverDataProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm();
  

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          name="name"
          label="Nome"
        />
        <TextInputMask
          mask="999.999.999-99" 
          name="cpf"
          label="CPF"
        />
        <TextInput
          name="email"
          label="Email"
        />
        <div style={{ marginTop: 30, marginBottom: 20, color: theme.colors.darkBlue }}>
          <h3>Endereço</h3>
        </div>
        <TextInput
          label="Rua"
          name="street"
        />
        <TextInput
          label="Número"
          name="number"
        />
        <TextInput
          label="Complemento"
          name="complement"
        />
        <TextInput
          label="Ponto de Referência"
          name="referencePoint"
        />
        <TextInputMask
          mask="99999 999" 
          name="postalCode"
          label="CEP"
        />
      </form>
    </S.Wrapper>
  );
}
