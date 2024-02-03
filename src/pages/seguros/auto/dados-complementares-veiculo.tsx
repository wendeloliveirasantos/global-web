import { Container, Wrapper } from "@/components/common";
import { MainLayout } from "@/components/common/layouts";
import Loading from "@/components/common/Loading/Loading";
import { PageTitle } from "@/components/common/PageTitle";
import { Button, Select, TextInput, TextInputMask } from "@/components/ui";
import { useAuto } from "@/context/auto";
import theme from "@/styles/theme";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";

export default function ComplementaryDataInsured() {
  const router = useRouter()
  const { offer, insured, proposalInput, addProposalInput } = useAuto();
  const { register, handleSubmit } = useForm();

  if (!insured || !offer) {
    return <Loading />;
  }

  function onSubmit(data: any) {
    const vehicle = {
      licensePlateCode: data.licensePlateCode,
      stateLicensePlateCode: data.stateLicensePlateCode.toUpperCase(),
      nationalVehicleRegistrationNumber: data.nationalVehicleRegistrationNumber,
      chassisCode: data.chassisCode
    }
    proposalInput.businessItem.insurance.autos = [
      {
        vehicle,
      }
    ]
    addProposalInput(proposalInput)
    router.push("/seguros/auto/dados-pagamento")
  }

  return (
    <MainLayout>
      <Wrapper style={{ flex: 1 }} background="/images/city.png">
        <Container>
          <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 400, width: "100%" }}>
            <PageTitle bold="Complemento" regular="Veículo" />
            <p style={{ color: theme.colors.lightGray }}>
              {`Mais algumas informações `}
              <span style={{ color: theme.colors.lightBlue }}>
                sobre seu veículo
              </span>
            </p>
            <div>
              <TextInput
                name="licensePlateCode"
                label="Placa do Veículo"
                register={register}
                required
              />
              <TextInputMask
                mask="aa"
                name="stateLicensePlateCode"
                label="Estado da Placa"
                register={register}
                required
              />
              <TextInput
                name="nationalVehicleRegistrationNumber"
                label="Renavan"
                register={register}
                required
              />
              <TextInput
                name="chassisCode"
                label="Número do Chassi"
                register={register}
                required
              />
              <div style={{ marginTop: 30 }}>
                <Button type="submit">Avançar</Button>
              </div>
            </div>
          </form>
        </Container>
      </Wrapper>
    </MainLayout>
  );
}
