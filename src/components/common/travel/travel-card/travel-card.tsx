/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui";
import * as S from "./travel-card.styles";
import { Product } from "@/types/viagem";
import { Modal } from "@/components/ui/Modal";
import React from "react";
import { Box, Divider, Link, Typography } from "@mui/material";

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
  const formattedValue = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  return formattedValue.replace(/^R\$\s?/, '');
}


function getSrcLogo(produto: Product) {
  if (produto.operator == 'universal') {
    return "/images/universal_assistance.jpg";
  }
  if (produto.operator == 'assistCard') {
    return "/images/assist_card.png";
  }
  if (produto.operator == 'nowSys') {
    return "/images/now_seguros.png";
  }
}

export default function TravelCard(props: Props) {
  const { produto, handleSubmit } = props;
  const [open, setOpen] = React.useState(false);
  const onChange = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    // <S.Wrapper>
    //   <S.Logo>
    //     <img height={50} src={getSrcLogo(produto)} />
    //   </S.Logo>
    //   <S.Title style={{ fontSize: 20 }}>
    //     {resumirTexto(produto.description)}
    //   </S.Title>
    //   <S.Header>
    //     <h2>{formatCurrency(+produto.amount * 1.3)}</h2>
    //     <h1>{formatCurrency(+produto.amount)}</h1>
    //   </S.Header>
    //   <div style={{ marginTop: 20 }}>
    //     {produto.coverage
    //       .sort((a, b) => (a.orderIndex as number) - (b.orderIndex as number))
    //       .slice(0, 3)
    //       .map((beneficio) => {
    //         return (
    //           <div
    //             style={{ textAlign: "center", fontSize: '1.1rem' }}
    //             key={beneficio.description}
    //           >
    //             <p>{beneficio.description}</p>
    //             <p style={{ fontWeight: 600, color: '#1976d2' }}>{beneficio.amount}</p>
    //             <hr style={{ margin: '10px 0' }}></hr>
    //           </div>
    //         );
    //       })}
    //   </div>
    //   <S.Link onClick={onChange}>Veja o detalhe de sua cobertura</S.Link>
    //   <Modal open={open} title="Coberturas" onClose={onClose} descriptions={produto.coverage} businessName="viagem"></Modal>
    //   <div style={{ marginTop: 20 }}>
    //     <Button color="#FF5A62" onClick={() => handleSubmit(produto)}>Selecionar</Button>
    //   </div>
    // </S.Wrapper>

    <S.Container>
      <S.Card>
        <S.Header>
          <S.ImageContainer>
            <img style={{ width: 70, borderRadius: 11, paddingTop: 20 }} src={getSrcLogo(produto)} alt="Company Logo" />
          </S.ImageContainer>
          <S.CompanyInfo>
            <Typography color="#49454F" fontSize={12} fontWeight={500} letterSpacing={0.5}>
              {resumirTexto(produto.description)}
            </Typography>
            <Typography color="#333333" fontSize={16} fontWeight={700} letterSpacing={0.5}>
              {produto.operator}
            </Typography>
            <S.List>
              {produto.coverage
                .sort((a, b) => (a.orderIndex as number) - (b.orderIndex as number))
                .slice(0, 5)
                .map((beneficio, index) => {
                  return (
                    <li style={{textAlign: 'left'}} key={beneficio.description}>{beneficio.description}</li>
                  );
              })}
            </S.List>
          </S.CompanyInfo>
        </S.Header>
        <S.CoverageDetails>
          <S.CoverageAmount>
            R${formatCurrency(+produto.amount * 1.3)}
          </S.CoverageAmount>
          <S.CoveragePrice>
            <S.PriceText>R$</S.PriceText>
            <S.PriceHighlight fontSize={32}>{formatCurrency(+produto.amount).split(',')[0]}</S.PriceHighlight>
            <S.PriceHighlight fontSize={16}>,</S.PriceHighlight>
            <S.PriceHighlight fontSize={20}>{formatCurrency(+produto.amount).split(',')[1]}</S.PriceHighlight>
            {produto.operator == 'nowSys' ? <S.PriceText>/mês</S.PriceText> : null}
          </S.CoveragePrice>
        </S.CoverageDetails>
        <Box padding="0px 0">
          {produto.coverage
            .sort((a, b) => (a.orderIndex as number) - (b.orderIndex as number))
            .slice(0, 3)
            .map((beneficio, index) => {
              return (
                <Box key={beneficio.description}>
                  <S.DetailItem>
                    <Typography color="#333333" fontSize={14} fontWeight={700}>{beneficio.description}:<br /></Typography>
                    {produto.operator == 'nowSys' ? 
                    <Typography color="#FF5A62" fontSize={14} fontWeight={700}>{'R$ ' + formatCurrency(+beneficio.amount)}</Typography> : 
                    <Typography color="#FF5A62" fontSize={14} fontWeight={700}>{beneficio.amount}</Typography>}
                  </S.DetailItem>
                  { index !== 2 && <Divider /> }
                </Box>
              );
          })}
        </Box>
        <S.SeeMore onClick={onChange}>Veja mais detalhes de sua cobertura</S.SeeMore>
        <Modal open={open} title="Coberturas" onClose={onClose} descriptions={produto.coverage} businessName={produto.operator}></Modal>
        <Box padding="14px 20px 21px 20px" width={"100%"}>
          <Button color="#FF5A62" onClick={() => handleSubmit(produto)}>Selecionar</Button>
        </Box>
      </S.Card>
    </S.Container>
  );
}
