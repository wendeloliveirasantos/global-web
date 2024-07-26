import { ContainerBox, Wrapper } from "@/components/common";
import { Offers } from "@/components/common/auto/Offers";
import { MainLayout } from "@/components/common/layouts";
import Loading from "@/components/common/Loading/Loading";
import { useAuto, IAddNewVehicleInput } from "@/context/auto";
import { normalizeOfferInput } from "@/helpers/normalizes";
import { autoService } from "@/services";
import { IOffersEntityResponse } from "@/types/auto-offer-response";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function OffersPage() {
  const router = useRouter()
  const [offers, setOffers] = useState<IOffersEntityResponse[]>([]);
  const { insured, drivers, vehicle, vehicleQuestions, addOffer } = useAuto();

  async function generateOffers() {
    if (!insured) return
    const input = normalizeOfferInput(
      insured,
      drivers,
      vehicle as IAddNewVehicleInput,
      vehicleQuestions
    );
    const response = await autoService.generateOffers(input)
    if (response.result) {
      setOffers(response.result.offers)
    }
  }

  useEffect(() => {
    if (insured && drivers.length && vehicle && vehicleQuestions.length) {
      generateOffers();
    }
  }, [insured, drivers, vehicle, vehicleQuestions]);

  if (!offers.length) {
    return <Loading />;
  }

  function handleSubmit(input: IOffersEntityResponse) {
    addOffer(input)
    router.push("/seguros/auto/dados-complementares-segurado")
  }

  return (
    <MainLayout>
      <Wrapper style={{ flex: 1 }} background="/images/city.png">
        <ContainerBox>
          <div style={{ maxWidth: 400, width: "100%" }}>
            <Offers onSubmit={handleSubmit} offers={offers} />
          </div>
        </ContainerBox>
      </Wrapper>
    </MainLayout>
  );
}
