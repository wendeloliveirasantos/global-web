/* eslint-disable react-hooks/exhaustive-deps */
import theme from "@/styles/theme";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Radio, TextInput, TextInputMask } from "../../../ui";
import * as S from "./ProspectDetailData.styles";

type IInput = {
  name?: string
  email?: string
  cpf?: number
}

type DriverDataProps = {
  onSubmit(data: any): void;
  initialValues?: IInput
};

export default function DriverData({ onSubmit, initialValues }: DriverDataProps) {
  const { handleSubmit, register } = useForm({ defaultValues: initialValues });
  const [otherDrivers, setOtherDrivers] = useState<string>("no");
  const [otherDriversQuantity, setOtherDriversQuantity] = useState<number | null>(null)

  function handleOnSubmit(data: any) {
    onSubmit({
      ...data,
      otherDrivers,
      otherDriversQuantity
    })
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <TextInput register={register} required name="name" label="Nome" />
        <TextInputMask register={register} required mask="999.999.999-99" name="cpf" label="CPF" />
        <TextInput register={register} required name="email" label="Email" />
        <div
          style={{
            marginTop: 30,
            marginBottom: 20,
            color: theme.colors.darkBlue,
          }}
        >
          <h3>Endereço</h3>
        </div>
        <TextInput label="Rua" name="address.street" required register={register} />
        <TextInput register={register} required label="Número" name="address.number" />
        <TextInput register={register} required label="Complemento" name="address.complement" />
        <TextInput register={register} required label="Ponto de Referência" name="address.referencePoint" />
        <TextInputMask register={register} required mask="99999 999" name="address.postalCode" label="CEP" />
        <Radio
          change={(v: string) => setOtherDrivers(v)}
          label="Além do segurado, outros motoristas utilizarão o veículo?"
          answer={otherDrivers}
        />
        {otherDrivers === "yes" && (
          <TextInput type="number" label="Quantos?" name="referencePoint" />
        )}
        <div style={{ marginTop: 40 }}>
          <Button>Avançar</Button>
        </div>
      </form>
    </S.Wrapper>
  );
}
