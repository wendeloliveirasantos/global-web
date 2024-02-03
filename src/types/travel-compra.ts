export interface DadosBasicos {
  destinos: string[];
  tipoViagem: number;
  tipoTarifa: number;
  dataSaida: string;
  dataRetorno: string;
  valorCompra: number;
  cambio: string;
  formaPagamento: number;
  cupom: string;
  cnpjAgencia: string;
  cpfEmissor: string;
  numeroControle: string;
  identificacao: string;
  identificacao2: string;
  codigoEmpresa: number;
  codigoEmissor: number;
  nomeContatoBrasil: string;
  telefoneContatoBrasil: string;
  celularContatoBrasil: string;
  valorTotalPacote: number;
  codigoOperacao: number;
  canalDeVenda: number;
}

export interface DadosTitular {
  codigo: number;
  nome: string;
  sobrenome: string;
  sexo: string;
  documento: string;
  tipoDocumento: number;
  telefone: string;
  celular: string;
  email: string;
  dataNascimento: string;
  endereco: string;
  cep: string;
  numero: string;
  cidade: string;
  bairro: string;
  uf: string;
  siglaPaisEndereco: string;
  complemento: string;
  idade: number;
  dataEmissaoDocumento: string;
  origemDocumento: string;
  beneficiarios: string;
  bilhete: string;
  url: string;
}

export interface DadosIntegrante {
  codigo: number;
  nome: string;
  sobrenome: string;
  sexo: string;
  tipoDocumento: number;
  documento: string;
  dataNascimento: string;
  idade: number;
  dataEmissaoDocumento: string;
  origemDocumento: string;
  email: string;
  beneficiarios: string;
  bilhete: string;
  url: string;
}

export interface DadosProduto {
  codigoProduto: number;
  valorProduto: number;
  codigoPeriodoMultiViagem: number;
  codigoTarifaAcordo: number;
  acrecimoDesconto: number;
  valorFolheto: number;
  valorFolhetoMoeda: number;
  valorProdutoMoeda: number;
  cambio: number;
  fkCupom: number;
}

export interface DadosBeneficio {
  codigoBeneficio: number;
  valorBeneficio: number;
  valorFolheto: number;
  valorFolhetoMoeda: number;
  valorBeneficioMoeda: number;
  cambio: number;
  dadosPassageiro: {
    codigoPassageiro: number;
  }[];
}

export interface DadosBeneficioCustomizavel {
  codigoBeneficio: number;
  valorBeneficio: number;
  valorFolheto: number;
  valorFolhetoMoeda: number;
  valorBeneficioMoeda: number;
  cambio: number;
  dadosPassageiro: {
    codigoPassageiro: number;
  }[];
}

export interface DadosProdutoAvulso {
  codigoProduto: number;
  codigoPeriodoMultiViagem: number;
  codigoTarifaAcordo: number;
  valorProduto: number;
  acrecimoDesconto: number;
  valorFolheto: number;
  valorFolhetoMoeda: number;
  valorProdutoMoeda: number;
  cambio: number;
  dadosPassageiroProdutoAvulso: {
    codigoPassageiro: number;
  }[];
  dadosBeneficiosOpcionais: DadosBeneficio[];
  dadosBeneficiosCustomizavel: DadosBeneficioCustomizavel[];
}

export interface DadosPagamento {
  codigoOperadora: number;
  nomeTitularCartao: string;
  cpfTitular: string;
  numeroCartao: string;
  codigoSeguranca: string;
  mesValidade: string;
  anoValidade: string;
  parcelas: number;
}

export interface TravelData {
  dadosBasicos: DadosBasicos;
  dadosTitular: DadosTitular;
  dadosIntegrantes: DadosIntegrante[];
  dadosProdutos: DadosProduto;
  dadosBeneficios: DadosBeneficio[];
  dadosBeneficiosCustomizavel: DadosBeneficioCustomizavel[];
  dadosProdutosAvulsos: DadosProdutoAvulso[];
  dadosPagamento: DadosPagamento;
}
