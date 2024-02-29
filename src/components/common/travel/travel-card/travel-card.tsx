/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui";
import * as S from "./travel-card.styles";
import { Product } from "@/types/viagem";
import { Modal } from "@/components/ui/Modal";
import React from "react";
import { Link } from "@mui/material";

type Props = {
  produto: Product;
  handleSubmit(value: Product): void;
};

function resumirTexto(texto: string) {
  const limiteCaracteres = 21;

  if (texto.length > limiteCaracteres) {
    return texto.slice(0, limiteCaracteres - 3) + "...";
  } else {
    return texto;
  }
}

function formatCurrency(value: number) {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
}

function getSrcLogo(produto: Product) {
  if (produto.operator == 'universal') {
    return "/images/universal_assistance.jpg";
  }
  if (produto.operator == 'assistCard') {
    return "/images/assist_card.png";
  }
}

export default function TravelCard(props: Props) {
  const { produto, handleSubmit } = props;
  const [open, setOpen] = React.useState(false);
  const onChange = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <S.Wrapper>
      <img height={50} src={getSrcLogo(produto)} />
      <S.Title style={{ fontSize: 20 }}>
        {resumirTexto(produto.description)}
      </S.Title>
      <S.Header>
        <h2>{formatCurrency(+produto.amount * 1.3)}</h2>
        <h1>{formatCurrency(+produto.amount)}</h1>
      </S.Header>
      <div style={{ marginTop: 20 }}>
        {produto.coverage
          .sort((a, b) => (a.orderIndex as number) - (b.orderIndex as number))
          .slice(0, 3)
          .map((beneficio) => {
            return (
              <div
                style={{ textAlign: "center", fontSize: 12 }}
                key={beneficio.description}
              >
                <p>{beneficio.description}</p>
                <p>{beneficio.amount}</p>
              </div>
            );
          })}
      </div>
      <S.Link underline="none" onClick={onChange} component="button" variant="body2">Veja o detalhe de sua cobertura</S.Link>
      <Modal open={open} title="Coberturas" onClose={onClose} descriptions={produto.coverage}></Modal>
      <div style={{ marginTop: 20 }}>
        <Button onClick={() => handleSubmit(produto)}>Selecionar</Button>
      </div>
    </S.Wrapper>
  );
}
