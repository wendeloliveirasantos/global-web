import { ContainerBox, Wrapper } from "@/components/common";
import { MainLayout } from "@/components/common/layouts";
import Loading from "@/components/common/Loading/Loading";
import { PageTitle } from "@/components/common/PageTitle";
import { useAuto } from "@/context/auto";
import { autoService } from "@/services";
import { IOffersEntity } from "@/types/auto-offer";
import React, { useState } from "react";
import dayjs from "dayjs";

export default function Offer() {
  const [offers, setOffers] = useState<IOffersEntity[]>([]);
  const { insured, vehicle, drivers } = useAuto();

  async function generateOffers() {
    if (!insured) {
      return;
    }
  }

  if (!offers.length) {
    return <Loading />;
  }

  return (
    <MainLayout>
      <Wrapper style={{ flex: 1 }} background="/images/city.png">
        <ContainerBox>
          <div style={{ maxWidth: 400, width: "100%" }}>
            <PageTitle bold="Ofertas" />
          </div>
        </ContainerBox>
      </Wrapper>
    </MainLayout>
  );
}
