import { STORAGE_VIAGEM_COMPRA, STORAGE_VIAGEM_COTACAO, STORAGE_VIAGEM_PASSAGEIROS, STORAGE_VIAGEM_PRODUTO, STORAGE_VIAGEM_TITULAR } from "@/constants"

export default function removeViagem() {
  localStorage.removeItem(STORAGE_VIAGEM_PRODUTO);
  localStorage.removeItem(STORAGE_VIAGEM_COTACAO);
  localStorage.removeItem(STORAGE_VIAGEM_TITULAR);
  localStorage.removeItem(STORAGE_VIAGEM_PASSAGEIROS);
  localStorage.removeItem(STORAGE_VIAGEM_COMPRA);
}