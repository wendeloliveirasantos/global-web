import { STORAGE_RESIDENCIAL_COMPRA, STORAGE_RESIDENCIAL_COTACAO, STORAGE_RESIDENCIAL_PRODUTO, STORAGE_RESIDENCIAL_TITULAR } from "@/constants"

export default function removeResidencial() {
  localStorage.removeItem(STORAGE_RESIDENCIAL_PRODUTO);
  localStorage.removeItem(STORAGE_RESIDENCIAL_COTACAO);
  localStorage.removeItem(STORAGE_RESIDENCIAL_TITULAR);
  localStorage.removeItem(STORAGE_RESIDENCIAL_COMPRA);
}