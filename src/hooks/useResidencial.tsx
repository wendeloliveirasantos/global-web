import { STORAGE_RESIDENCIAL_COTACAO, STORAGE_RESIDENCIAL_PRODUTO, STORAGE_RESIDENCIAL_TITULAR } from "@/constants"
import { useLocalStorage } from "./useLocalStorage"

export default function useResidencial() {
  const [oferta] = useLocalStorage(STORAGE_RESIDENCIAL_PRODUTO, "")
  const [cotacao] = useLocalStorage(STORAGE_RESIDENCIAL_COTACAO, "")
  const [titular] = useLocalStorage(STORAGE_RESIDENCIAL_TITULAR, "")

  return {
    oferta: oferta ? JSON.parse(oferta) : null,
    titular: titular ? JSON.parse(titular) : null,
    cotacao: cotacao ? JSON.parse(cotacao) : null
  }
}