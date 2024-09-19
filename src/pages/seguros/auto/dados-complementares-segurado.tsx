import { ContainerBox, Wrapper } from "@/components/common";
import { MainLayout } from "@/components/common/layouts";
import Loading from "@/components/common/Loading/Loading";
import { PageTitle } from "@/components/common/PageTitle";
import { Button, Select } from "@/components/ui";
import { autoSalaryRange } from "@/constants";
import { useAuto } from "@/context/auto";
import theme from "@/styles/theme";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ocuppations from "@/utils/hdiAutoOccupation.json";

export default function ComplementaryDataInsured() {
  const router = useRouter();
  const { offer, insured, addProposalInput } = useAuto();
  const [occupationClassificationCode, setOccupationClassificationCode] =
    useState<number | null>(null);
  const [salaryRangeCode, setSalaryRangeCode] = useState<number | null>(null);
  const [isPoliticallyExposedPerson, setIsPoliticallyExposedPerson] =
    useState<boolean>(false);

  if (!insured || !offer) {
    return <Loading />;
  }

  function handleInput() {

    if (!occupationClassificationCode ||
      !salaryRangeCode ||
      !isPoliticallyExposedPerson) return 

    addProposalInput({
      prospect: [
        {
          name: insured?.name,
          occupationClassificationCode,
          salaryRangeCode,
          isAwareName: true,
          isAwareAddress: true,
          isPoliticallyExposedPerson,
          document: insured?.documents,
          contacts: insured?.contacts,
          addresses: insured?.addresses,
        },
      ],
      businessItem: {
        offerId: offer?.id,
        insurance: {
          installments: {},
          broker: [],
          autos: [],
        },
      },
    });
    router.push("/seguros/auto/dados-complementares-veiculo")
  }

  return (
    <MainLayout>
      <Wrapper style={{ flex: 1 }} background="/images/city.png">
        <ContainerBox>
          <div style={{ maxWidth: 400, width: "100%" }}>
            <PageTitle bold="Complemento" regular="Segurado" />
            <p style={{ color: theme.colors.lightGray }}>
              {`Precisamos de mais alguns dados, `}
              <span style={{ color: theme.colors.lightBlue }}>{`${
                insured.name.split(" ")[0]
              }`}</span>
            </p>
            <div>
              <Select
                label="Ocupação"
                onChange={(v: string) => setOccupationClassificationCode(parseInt(v))}
                options={ocuppations.map((row) => ({
                  value: row.value,
                  label: row.description,
                }))}
              />
              <Select
                label="Faixa Salarial"
                onChange={(v: string) => setSalaryRangeCode(parseInt(v))}
                options={autoSalaryRange.map((row) => ({
                  label: row.description,
                  value: row.id,
                }))}
              />
              <Select
                label="É uma pessoa politicamente exposta"
                onChange={(v: string) => setIsPoliticallyExposedPerson(Boolean(v))}
                options={[
                  { label: "Sim", value: true },
                  { label: "Não", value: false },
                ]}
              />
              <div style={{ marginTop: 30 }}>
                <Button color="#FF5A62" onClick={() => handleInput()}>Avançar</Button>
              </div>
            </div>
          </div>
        </ContainerBox>
      </Wrapper>
    </MainLayout>
  );
}
