import React from 'react'
import * as S from './Insurances.styles'
import { useRouter } from 'next/router';

export default function Insurances() {
  const router = useRouter();

  return (
    <S.InsuranceContainer>
      <S.Insurance>
        <S.InsuranceDetails className="right">
          <div id="title">
            <span>Seguro</span>
            <strong>Auto</strong>
          </div>
          <p>
            Você circula com o seu carro sem preocupação. Monte seu seguro de
            acordo com o seu bolso e com o que você precisa. Roubos, furtos,
            batidas, terceiros, alagamentos, incêndios etc. Ainda acha que falta
            alguma coisa? Você pode ter serviços 24h para não te deixar na mão,
            como guincho, chaveiro, troca de pneus, carro reserva e muitos
            outros.
          </p>
          <S.KnowMoreButton>saiba mais</S.KnowMoreButton>
        </S.InsuranceDetails>
        <S.InsuranceImage src="/images/seguro-auto.png" alt="Seguro Auto" />
      </S.Insurance>
      <S.Insurance reverse>
        <S.InsuranceDetails className="left">
          <div id="title">
            <span>Seguro</span>
            <strong>Residencial</strong>
          </div>
          <p>
            Você protege a sua casa e ela protege você. O seguro residencial
            existe para isso, garantir que o seu canto esteja protegido em caso
            de incêndio, acidente natural, explosão, roubo/furto etc.  Garanta
            que em caso de qualquer imprevisto, você vai ter o dinheiro de volta
            para deixar tudo em ordem novamente.
          </p>
          <S.KnowMoreButton>saiba mais</S.KnowMoreButton>
        </S.InsuranceDetails>
        <S.InsuranceImage
          src="/images/seguro-auto.png"
          alt="Seguro Residencial"
        />
      </S.Insurance>
      <S.Insurance>
        <S.InsuranceDetails className="right">
          <div id="title">
            <span>Seguro</span>
            <strong>Viagem</strong>
          </div>
          <p>
            Você com o passaporte da tranquilidade na sua viagem. Você vai e
            volta tranquilo. Sem preocupação, o seguro-viagem garante
            assistência médica e odontológica, assistência de bagagem perdida,
            repatriação sanitária, serviço de concierge e se precisar ainda
            possui o serviço de acompanhamento de menores. Com esse serviço, é
            só fazer as malas e não pensar em mais nada.
          </p>
          <S.KnowMoreButton onClick={() => router.push("/seguros/viagem/detalhes")}>saiba mais</S.KnowMoreButton>
        </S.InsuranceDetails>
        <S.InsuranceImage src="/images/seguro-auto.png" alt="Seguro Viagem" />
      </S.Insurance>
      <S.Insurance reverse>
        <S.InsuranceDetails className="left">
          <div id="title">
            <span>Seguro</span>
            <strong>de Vida</strong>
          </div>
          <p>
            Você e quem você ama, bem. É viver cada momento com quem é
            importante e ter a tranquilidade que está cuidando deles no futuro.
            Personalize o seguro de vida com coberturas de morte de qualquer
            causa, indenização especial de morte por acidente, invalidez
            permanente ou parcial por acidente, invalidez por doença, doenças
            graves e indenização por morte de cônjuges e filhos, e depois é só
            aproveitar cada minuto.
          </p>
          <S.KnowMoreButton>saiba mais</S.KnowMoreButton>
        </S.InsuranceDetails>
        <S.InsuranceImage src="/images/seguro-auto.png" alt="Seguro de Vida" />
      </S.Insurance>
    </S.InsuranceContainer>
  )
}
