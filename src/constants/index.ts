export const baseStorage = "@global";
export const API_URL =
  //process.env.API_URL ?? "https://global-api-prd-c314a925718f.herokuapp.com";
  process.env.API_URL ?? "http://92.113.33.10:4000";

export const STORAGE_VIAGEM_COMPRA = `${baseStorage}/viagem_compra`;
export const STORAGE_VIAGEM_COTACAO = `${baseStorage}/viagem_cotacao`;
export const STORAGE_VIAGEM_PRODUTO = `${baseStorage}/viagem_produto`;
export const STORAGE_VIAGEM_TITULAR = `${baseStorage}/viagem_titular`;
export const STORAGE_VIAGEM_PASSAGEIROS = `${baseStorage}/viagem_passageiros`;
export const STORAGE_RESIDENCIAL_COMPRA = `${baseStorage}/residencial_compra`;
export const STORAGE_RESIDENCIAL_COTACAO = `${baseStorage}/residencial_cotacao`;
export const STORAGE_RESIDENCIAL_PRODUTO = `${baseStorage}/residencial_produto`;
export const STORAGE_RESIDENCIAL_TITULAR = `${baseStorage}/residencial_titular`;
export const STORAGE_TOKEN = `${baseStorage}/token`;
export const STORAGE_PROSPECT = `${baseStorage}/prospect`;
export const STORAGE_AUTO_VEHICLE = `${baseStorage}/auto_vehicle`;
export const STORAGE_AUTO_VEHICLE_QUESTION = `${baseStorage}/auto_vehicle_question`;
export const STORAGE_AUTO_INSURED = `${baseStorage}/auto_insured`;
export const STORAGE_AUTO_DRIVERS = `${baseStorage}/auto_drivers`;
export const STORAGE_AUTO_OFFER = `${baseStorage}/auto_offer`;
export const STORAGE_AUTO_PROPOSAL_INPUT = `${baseStorage}/auto_proposal_input`;
export const AUTO_DOCUMENT_TYPE = 1;
export const fuelTypes = [
  { id: 1, description: "Gasolina" },
  { id: 2, description: "Álcool" },
  { id: 3, description: "Diesel" },
  { id: 4, description: "Eletricidade" },
  { id: 5, description: "Bi-Combustível" },
];
export const autoSalaryRange = [
  { id: 0, description: "Não informado" },
  { id: 1, description: "até R$ 3.000,00" },
  { id: 2, description: "até R$ 3.000,01 a R$ 5.000,00" },
  { id: 3, description: "de R$ 5000,01 a R$ 10.000,00" },
  { id: 4, description: "de R$ 10.000,01 a R$ 20.000,00" },
  { id: 5, description: "acima de R$ 20.000,00" },
  { id: 6, description: "do lar, sem renda a informar" },
];
