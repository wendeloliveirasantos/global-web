import { Product, Quote } from "@/types/viagem";
import { TravelCard } from "../travel-card";
import * as S from "./travel-coverage.styles";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { STORAGE_VIAGEM_PRODUTO } from "@/constants";
import { useRouter } from "next/router";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Props = {
  products: Array<Product>;
};

export default function TravelCoverage(props: Props) {
  const { products } = props;
  const [, setProduto] = useLocalStorage(STORAGE_VIAGEM_PRODUTO, "");
  const router = useRouter();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function handleSubmit(value: Product) {
    setProduto(JSON.stringify(value));
    router.push("/seguros/viagem/dados-titular");
  }

  return (
    <S.Wrapper>
      <S.Title>
        <span style={{ fontWeight: "bold", textAlign: "center" }}>
          Escolha a
        </span>{" "}
        sua cobertura
      </S.Title>
      <S.Coverages style={{ marginTop: 40 }}>
        {products.map((produto) => (
          <TravelCard
            key={produto.productReferenceId}
            handleSubmit={handleSubmit}
            produto={produto}
          />
        ))}
      </S.Coverages>
    </S.Wrapper>
  );
}
