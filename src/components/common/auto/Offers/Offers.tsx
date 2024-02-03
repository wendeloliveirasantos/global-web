import { IOffersEntityResponse } from "@/types/auto-offer-response";
import React from "react";
import * as S from "./Offers.styles";

type OffersProps = {
  offers: IOffersEntityResponse[];
  onSubmit(data: IOffersEntityResponse): void
};

export default function Offers({ offers, onSubmit }: OffersProps) {
  return (
    <S.Offers>
      {offers.map((offer) => (
        <S.Card key={offer.id}>
          <S.Logo src="/images/logo-hdi.png" />
          <div>
            <h3>
              {offer.totalPrice.amountFormatted}
              <span>/ano</span>
            </h3>
          </div>
          <S.Coverages>
            {offer.items[0].insurance.items[0].coverages.map((coverage) => (
              <S.Coverage key={coverage.code}>
                <h5>{coverage.description}</h5>
                <div>
                  {coverage.guarantees.map((guarantee) => (
                    <S.Guarantee key={guarantee.code}>
                      <S.Check />
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <p>{guarantee.description}</p>
                        {/* <p>{guarantee.isValue.amountFormatted}</p> */}
                      </div>
                    </S.Guarantee>
                  ))}
                </div>
              </S.Coverage>
            ))}
          </S.Coverages>
          <S.Button onClick={() => onSubmit(offer)}>Selecionar</S.Button>
        </S.Card>
      ))}
    </S.Offers>
  );
}
