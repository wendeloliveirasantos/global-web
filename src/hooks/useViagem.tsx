import { STORAGE_VIAGEM_COTACAO, STORAGE_VIAGEM_PRODUTO, STORAGE_VIAGEM_TITULAR } from "@/constants"
import { useLocalStorage } from "./useLocalStorage"

export default function useViagem() {
  const [oferta] = useLocalStorage(STORAGE_VIAGEM_PRODUTO, "")
  const [cotacao] = useLocalStorage(STORAGE_VIAGEM_COTACAO, "")
  const [titular] = useLocalStorage(STORAGE_VIAGEM_TITULAR, "")


  return {
    oferta: oferta ? JSON.parse(oferta) : null,
    titular: titular ? JSON.parse(titular) : null,
    cotacao: cotacao ? JSON.parse(cotacao) : null,
  }
}