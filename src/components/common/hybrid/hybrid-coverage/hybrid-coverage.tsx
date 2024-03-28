import { Product, Quote } from "@/types/residencial";
import * as S from "./hybrid-coverage.styles";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { STORAGE_RESIDENCIAL_PRODUTO } from "@/constants";
import { useRouter } from "next/router";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SubTitle from "../../SubTitle/SubTitle";
import { Button } from "@/components/ui/Button";
import { Stack } from "@mui/material";
import { HybridCard } from "../hybrid-card";

type Props = {
  products: Array<Product>;
  onSubmit: (value: Product) => void;
};

export default function HybridCoverage(props: Props) {
  const { products, onSubmit} = props;
  const [, setProduto] = useLocalStorage(STORAGE_RESIDENCIAL_PRODUTO, "");
  const router = useRouter();

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#0035AC" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#0035AC" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      // {
      //   breakpoint: 1920,
      //   settings: {
      //     slidesToShow: 5,
      //     slidesToScroll: 5,
      //     infinite: true,
      //     dots: true
      //   }
      // },
      // {
      //   breakpoint: 1440,
      //   settings: {
      //     slidesToShow: 4,
      //     slidesToScroll: 4,
      //     initialSlide: 5
      //   }
      // },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 4
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  function handleSubmit(value: Product) {
    setProduto(JSON.stringify(value));
    onSubmit(value);
  }

  return (
    <S.Wrapper>
      <div className="slider-container">
        <Slider {...settings}>
          {products.map((produto) => (
            <HybridCard
              key={produto.productReferenceId}
              handleSubmit={handleSubmit}
              produto={produto}
            />
          ))}
        </Slider>
      </div>
    </S.Wrapper>
  );
}
