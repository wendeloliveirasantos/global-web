import { ContainerBox, Wrapper } from "@/components/common";
import { MainLayout } from "@/components/common/layouts";
import Loading from "@/components/common/Loading/Loading";
import { PageTitle } from "@/components/common/PageTitle";
import { Button, Select } from "@/components/ui";
import { useAuto } from "@/context/auto";
import { autoService } from "@/services";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function PaymentData() {
  const router = useRouter()
  const { offer, proposalInput } = useAuto();
  const [numberOfInstallments, setNumberOfInstallments] = useState<number | null>(null)

  if (!offer) {
    return <Loading />;
  }

  const installments = offer.items[0].insurance.installments;

  async function handleSubmit() {
    if (!numberOfInstallments) return
    const installments = {
      numberOfInstallments,
      billingTypeId: 1
    }

    proposalInput.businessItem.insurance.installments = installments

    const response = await autoService.generateProposed(proposalInput)
    router.push("/500")
  }

  return (
    <MainLayout>
      <Wrapper style={{ flex: 1 }} background="/images/city.png">
        <ContainerBox>
          <div style={{ maxWidth: 400, width: "100%" }}>
            <PageTitle bold="Dados" regular="do Pagamento" />
            <div>
              <Select
                disabled
                label="Tipo de Pagamento"
                onChange={() => {}}
                options={[
                  {
                    label: "Cartão de Crédito",
                    value: "xx",
                  },
                ]}
                defaultValue="Cartão de Crédito"
              />
              <Select
                label="Parcelas"
                onChange={(v: string) => setNumberOfInstallments(parseInt(v))}
                options={installments
                  .filter((f) => f.billingType.id === 1)
                  .sort((a, b) => a.quantity - b.quantity)
                  .map((row) => ({
                    label: `${row.quantity}x - ${row.price.amountFormatted}`,
                    value: row.quantity,
                  }))}
              />
              <div style={{ marginTop: 40 }}>
                <Button color="#FF5A62" onClick={() => handleSubmit()}>Avançar</Button>
              </div>
            </div>
          </div>
        </ContainerBox>
      </Wrapper>
    </MainLayout>
  );
}
