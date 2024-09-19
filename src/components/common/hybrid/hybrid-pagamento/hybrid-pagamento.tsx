import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Button, Select, TextInput, TextInputMask } from "@/components/ui";
import { Card, CardActions, CardContent, Grid, Link, Typography } from "@mui/material";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { STORAGE_RESIDENCIAL_COTACAO, STORAGE_RESIDENCIAL_PRODUTO, STORAGE_RESIDENCIAL_TITULAR } from "@/constants";
import { Modal } from "@/components/ui/Modal";
import { useRouter } from "next/router";

const INITIAL_VALUE = {
  nomeTitular: "",
  cpfTitular: "",
  numeroCartao: "",
  mesValidade: "",
  anoValidade: "",
  cvv: "",
  parcelas: 1
}

function formatarValor(value: number) {
  return `${value.toFixed(2).replace(".", ",")}`
}

function formatarData(data: string) {
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
}

export default function PagamentoForm({ onSubmit, amount, business, isLoading }: any) {
  const router = useRouter()
  const [formData, setFormData] = useState(INITIAL_VALUE);
  const [formErrors, setFormErrors] = useState(INITIAL_VALUE);
  const [cotacao] = useLocalStorage(STORAGE_RESIDENCIAL_COTACAO, "")
  const [titular] = useLocalStorage(STORAGE_RESIDENCIAL_TITULAR, "")
  const [produto] = useLocalStorage(STORAGE_RESIDENCIAL_PRODUTO, "")
  const [numeroCartao, setNumeroCartao] = useState('');
  const [numeroMask, setNumeroMask] = useState('9999 9999 9999 9999');
  const [formDataResumo, setFormDataResumo] = useState({
    cotacao: {
      firstName: '',
      lastName: '',
      razaoSocial: '',
      phone: '',
      email: ''
    },
    titular: {
      document: '',
      birthDate: '',
      postalCode: '',
      address: '',
      number: '',
      neighborhood: '',
      city: '',
      state: '',
    },
    produto: {
      description: '',
      operator: '',
      coverage: []
    }
  });

  useEffect(() => {
    if (cotacao) {
      const cotacaoObj = JSON.parse(cotacao);
      const titularObj = JSON.parse(titular);
      const produtoObj = JSON.parse(produto);
      setFormDataResumo(prevState => ({
        ...prevState,
        cotacao: {
          firstName: cotacaoObj.firstName,
          lastName: cotacaoObj.lastName,
          razaoSocial: cotacaoObj.razaoSocial,
          phone: cotacaoObj.phone,
          email: cotacaoObj.email
        },
        titular: {
          document: titularObj.document,
          birthDate: titularObj.birthDate,
          postalCode: titularObj.postalCode,
          address: titularObj.address,
          number: titularObj.number,
          neighborhood: titularObj.neighborhood,
          city: titularObj.city,
          state: titularObj.state,
        },
        produto: {
          description: produtoObj.description,
          operator: produtoObj.operator,
          coverage: produtoObj.coverage
        }
      }));
    }
  }, [cotacao]);
  
  const handleMaskChange = (e: any) => {
    const { value } = e.target;
    setNumeroCartao(value);
    atribuirMascaraNumeroCartao(value);
  };

  function handleChange(name: string, value: string | number | null | undefined | boolean | number[]) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleClick() {
    router.push("/seguros/" + business + "/dados-titular");
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    setFormErrors(INITIAL_VALUE);
    let hasError = false;

    if (!formData.nomeTitular) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        nomeTitular: "Por favor, insira o primeiro nome",
      }));
      hasError = true;
    }

    if (!formData.cpfTitular) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        cpfTitular: "Por favor, insira o nome titular",
      }));
      hasError = true;
    }

    if (!formData.numeroCartao) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        numeroCartao: "Por favor, insira o numero cartão",
      }));
      hasError = true;
    }
    if (!formData.anoValidade) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        anoValidade: "Por favor, insira o ano validade",
      }));
      hasError = true;
    }
    if (!formData.mesValidade) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        mesValidade: "Por favor, insira o mes validade",
      }));
      hasError = true;
    }
    if (!formData.cvv) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        cvv: "Por favor, insira o cvv",
      }));
      hasError = true;
    }

    if (hasError) {
      return;
    }
    onSubmit(formData)
  }

  const atribuirMascaraNumeroCartao = (numero: string) => {
    if (parseInt(numero.substring(0, 2)) >= 30 && parseInt(numero.substring(0, 2)) <= 38) {
      setNumeroMask('9999 999999 99999');
    } else {
      setNumeroMask('9999 9999 9999 9999');
    }
  };

  const [open, setOpen] = React.useState(false);
  const onChange = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <S.Card>
      {/* <S.Header>
        <h2>Valor total</h2>
        <h1>
          {formatarValor(amount)}
        </h1>
      </S.Header> */}
      {/* <S.Title>Resumo</S.Title> */}
      <Card sx={{ background: 'white', borderRadius: '25px', margin: '0px 0px 8px 0px' }}>
        <CardContent sx={{ padding: '23px 36px' }}>
          <Typography sx={{ color: '#FF5A62', fontSize: 14, fontWeight: '700', wordWrap: 'break-word', display: 'flex', justifyContent: 'center', paddingBottom: '5px' }}>
            Valor Total
          </Typography>
          <S.PriceContainer>
            <S.PriceText sx={{ paddingRight: 1}}>R$ </S.PriceText>
            <S.PriceValue>{formatarValor(amount)} </S.PriceValue>
            <S.PriceText sx={{ paddingLeft: 1}}>/mês</S.PriceText>
          </S.PriceContainer>
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <S.TypographyText>
                Valor do seguro:
              </S.TypographyText>
            </Grid>
            <Grid item xs={7}>
              <S.TypographyText>
                R$ {formatarValor(amount)} /mês
              </S.TypographyText>
            </Grid>
          </Grid>
          {/* <Grid container spacing={3}>
            <Grid item xs={4}>
              <S.TypographyText sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                Período da viagem:
              </S.TypographyText>
            </Grid>
            <Grid item xs={8}>
              <S.TypographyText sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                De {formatarData(formDataResumo.cotacao.startDate)} até {formatarData(formDataResumo.cotacao.endDate)}
              </S.TypographyText>
            </Grid>
          </Grid> */}
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <S.TypographyText>
                Pagamento:
              </S.TypographyText>
            </Grid>
            <Grid item xs={7}>
              <S.TypographyText>
              Assinatura Mensal
              </S.TypographyText>
            </Grid>
          </Grid>
          {/* <Grid container spacing={3}>
            <Grid item xs={4}>
              <S.TypographyText>
                Região:
              </S.TypographyText>
            </Grid>
            <Grid item xs={8}>
              <S.TypographyText>
                {obterLabelPorValor(formDataResumo.cotacao.to)}
              </S.TypographyText>
            </Grid>
          </Grid> */}
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <S.TypographyText>
                Produto: 
              </S.TypographyText>
            </Grid>
            <Grid item xs={7}>
              <S.TypographyText>
                {formDataResumo.produto.description}
              </S.TypographyText>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <S.TypographyText>
                Seguradora: 
              </S.TypographyText>
            </Grid>
            <Grid item xs={7}>
              <S.TypographyText>
                {formDataResumo.produto.operator}
              </S.TypographyText>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <S.TypographyText>
                Coberturas: 
              </S.TypographyText>
            </Grid>
            <Grid item xs={7}>
              <S.TypographyText>
                <Link sx={{ color: '#FF5A62', fontSize: 14, fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word' }} underline="none" onClick={onChange} component="button" variant="body2">Ver Detalhes</Link>
              </S.TypographyText>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Modal open={open} title="Coberturas" onClose={onClose} descriptions={formDataResumo.produto.coverage} businessName="viagem"></Modal>
      {/* <S.Title>Contato emergencial</S.Title> */}
      {/* <S.Title>Informações de pagamento</S.Title> */}
      <form onSubmit={handleSubmit}>
        <S.Row>
          <S.Group>
            <TextInput onChange={(e) => handleChange("nomeTitular", e.target.value)} name="nomeTitular" label="Nome no Cartão de Crédito" helperText={formErrors.nomeTitular}/>
          </S.Group>
        </S.Row>
        <S.Row>
          <S.Group>
            <TextInput mask="999.999.999-99" onChange={(e) => handleChange("cpfTitular", e.target.value.replace(/\D/g, ''))} name="cpfTitular" label="CPF do Cartão de Crédito" helperText={formErrors.cpfTitular}/>
          </S.Group>
        </S.Row>
        <S.Row>
          <S.Group>
            <TextInput mask={numeroMask} value={numeroCartao} onChange={(e) => { handleChange("numeroCartao", e.target.value.replace(/\D/g, '')); handleMaskChange(e) }} name="numeroCartao" label="Número do Cartão" helperText={formErrors.numeroCartao}/>
          </S.Group>
        </S.Row>
        <S.Row>
          <S.Group style={{ paddingRight: '8px' }}>
            <TextInput mask="99" onChange={(e) => handleChange("mesValidade", e.target.value.replace(/\D/g, ''))} name="mesValidade" label="Mes Validade" helperText={formErrors.mesValidade}/>
          </S.Group>
          <S.Group style={{ paddingLeft: '8px' }}>
            <TextInput mask="9999" onChange={(e) => handleChange("anoValidade", e.target.value.replace(/\D/g, ''))} name="anoValidade" label="Ano Validade" helperText={formErrors.anoValidade}/>
          </S.Group>
        </S.Row>
        <S.Row>
          <S.Group>
            <TextInput mask="999" onChange={(e) => handleChange("cvv", e.target.value.replace(/\D/g, ''))} name="cvv" label="CVV" helperText={formErrors.cvv}/>
          </S.Group>
        </S.Row>
        <S.Row>
          <S.Group>
            <Select
              value={formData.parcelas}
              label="Quantidade Parcelamento"
              onChange={(v) => handleChange("parcelas", v.toString())}
              options={[
                { value: 1, label: "1x" },
                { value: 2, label: "2x" },
                { value: 3, label: "3x" },
                { value: 4, label: "4x" },
                { value: 5, label: "5x" },
                { value: 6, label: "6x" },
              ]}
            />
          </S.Group>
        </S.Row>
        <S.Row>
          <S.Group>
            <div>
              <Button color="#FF5A62" type="submit">Finalizar</Button>
            </div>
            <div style={{ marginTop: 16 }}>
              <Button color="#FF5A62" textColor="#FF5A62" onClick={handleClick} variant="outlined">Voltar</Button>
            </div>
          </S.Group>
        </S.Row>
      </form>
    </S.Card>
  );
}
