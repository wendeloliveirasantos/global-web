import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Button, Select, TextInput, TextInputMask } from "@/components/ui";
import { Card, CardActions, CardContent, Grid, Link, Typography } from "@mui/material";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { STORAGE_VIAGEM_COTACAO, STORAGE_VIAGEM_PRODUTO, STORAGE_VIAGEM_TITULAR } from "@/constants";
import { Modal } from "@/components/ui/Modal";

const INITIAL_VALUE = {
  nomeTitular: "",
  cpfTitular: "",
  numeroCartao: "",
  mesValidade: "",
  anoValidade: "",
  cvv: "",
  parcelas: "",
  nomeEmergencial: "",
  contatoEmergencial: ""
}

const from = [
  { value: "1;X4", label: "AMERICA DO NORTE" },
  { value: "2;X6", label: "EUROPA" },
  { value: "3;X2", label: "AMERICA CENTRAL" },
  { value: "4;X9", label: "AMERICA DO SUL" },
  { value: "5;X5", label: "AFRICA" },
  { value: "6;X7", label: "ASIA" },
  { value: "7;X8", label: "OCEANIA" },
  { value: "9;BR", label: "BRASIL" },
];

function formatarValor(value: number) {
  return `R$ ${value.toFixed(2).replace(".", ",")}`
}

function formatarData(data: string) {
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
}

function obterLabelPorValor(value: string): string | undefined {
  const regiao = from.find((item) => item.value === value);
  return regiao ? regiao.label : undefined;
}

export default function PagamentoForm({ onSubmit, amount, isLoading }: any) {
  const [formData, setFormData] = useState(INITIAL_VALUE);
  const [formErrors, setFormErrors] = useState(INITIAL_VALUE);
  const [cotacao] = useLocalStorage(STORAGE_VIAGEM_COTACAO, "")
  const [titular] = useLocalStorage(STORAGE_VIAGEM_TITULAR, "")
  const [produto] = useLocalStorage(STORAGE_VIAGEM_PRODUTO, "")
  const [numeroCartao, setNumeroCartao] = useState('');
  const [numeroMask, setNumeroMask] = useState('9999 9999 9999 9999');
  const [formDataResumo, setFormDataResumo] = useState({
    cotacao: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      to: '',
      from: '',
      startDate: '',
      endDate: '',
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
      console.log(produtoObj);
      setFormDataResumo(prevState => ({
        ...prevState,
        cotacao: {
          firstName: cotacaoObj.firstName,
          lastName: cotacaoObj.lastName,
          phone: cotacaoObj.phone,
          email: cotacaoObj.email,
          to: cotacaoObj.to,
          from: cotacaoObj.from,
          startDate: cotacaoObj.startDate,
          endDate: cotacaoObj.endDate,
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

  function handleChange(e: any) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
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
    if (!formData.parcelas) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        parcelas: "Por favor, insira a parcela",
      }));
      hasError = true;
    }

    if (!formData.nomeEmergencial) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        nomeEmergencial: "Por favor, insira o nome emergencial",
      }));
      hasError = true;
    }

    if (!formData.contatoEmergencial) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        contatoEmergencial: "Por favor, insira o telefone emergencial",
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
    <S.Wrapper>
      <S.Header>
        <h2>Valor total</h2>
        <h1>
          {formatarValor(amount)}
        </h1>
      </S.Header>
      <S.Title>Resumo</S.Title>
      <div style={{ marginTop: 15 }}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                  Valor do seguro:
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                  {formatarValor(amount)}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                  Período da viagem:
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                  De {formatarData(formDataResumo.cotacao.startDate)} até {formatarData(formDataResumo.cotacao.endDate)}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                  Região:
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                  {obterLabelPorValor(formDataResumo.cotacao.to)}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                  Produto: 
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                  {formDataResumo.produto.description}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                  Seguradora: 
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                  {formDataResumo.produto.operator}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                  Coberturas: 
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                  <Link underline="none" onClick={onChange} component="button" variant="body2">Veja o detalhe do produto</Link>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Modal open={open} title="Coberturas" onClose={onClose} descriptions={formDataResumo.produto.coverage}></Modal>
      </div>
      <S.Title>Contato emergencial</S.Title>
      <form style={{ marginTop: 15 }}>
        <S.Row>
          <S.Group>
            <TextInput onChange={handleChange} name="nomeEmergencial" label="Nome Emergencial" helperText={formErrors.nomeEmergencial}/>
          </S.Group>
          <S.Group>
            <TextInput onChange={handleChange} mask="(99) 99999-9999" name="contatoEmergencial" label="Telefone Emergencial" helperText={formErrors.contatoEmergencial}/>
          </S.Group>
        </S.Row>
      </form>
      <S.Title>Informações de pagamento</S.Title>
      <form onSubmit={handleSubmit} style={{ marginTop: 15 }}>
        <S.Row>
          <S.Group>
            <TextInput onChange={handleChange} name="nomeTitular" label="Nome no Cartão de Crédito" helperText={formErrors.nomeTitular}/>
          </S.Group>
        </S.Row>
        <S.Row>
          <S.Group>
            <TextInput mask="999.999.999-99" onChange={handleChange} name="cpfTitular" label="CPF do Cartão de Crédito" helperText={formErrors.cpfTitular}/>
          </S.Group>
        </S.Row>
        <S.Row>
          <S.Group>
            <TextInput mask={numeroMask} value={numeroCartao} onChange={(e) => { handleChange(e); handleMaskChange(e) }} name="numeroCartao" label="Número do Cartão" helperText={formErrors.numeroCartao}/>
          </S.Group>
        </S.Row>
        <S.Row>
          <S.Group>
            <TextInput mask="99" onChange={handleChange} name="mesValidade" label="Mes Validade" helperText={formErrors.mesValidade}/>
          </S.Group>
          <S.Group>
            <TextInput mask="9999" onChange={handleChange} name="anoValidade" label="Ano Validade" helperText={formErrors.anoValidade}/>
          </S.Group>
        </S.Row>
        <S.Row>
          <S.Group>
            <TextInput mask="999" onChange={handleChange} name="cvv" label="CVV" helperText={formErrors.cvv}/>
          </S.Group>
        </S.Row>
        <S.Row>
          <S.Group>
            <Select
              value={formData.parcelas}
              label="Quantidade Parcelamento"
              onChange={(value) => handleChange({ target: { name: "parcelas", value } })}
              options={[
                { value: 1, label: "1x" },
                { value: 2, label: "2x" },
                { value: 3, label: "3x" },
                { value: 4, label: "4x" },
                { value: 5, label: "5x" },
                { value: 6, label: "6x" },
              ]}
              helperText={formErrors.parcelas}
            />
          </S.Group>
        </S.Row>
        <S.Row>
          <S.Group>
            <div style={{ marginTop: 20 }}>
              <Button type="submit">Finalizar</Button>
            </div>
            <div style={{ marginTop: 20 }}>
              <Button href="/seguros/viagem/dados-titular" variant="outlined">Voltar</Button>
            </div>
          </S.Group>
        </S.Row>
      </form>
    </S.Wrapper>
  );
}
