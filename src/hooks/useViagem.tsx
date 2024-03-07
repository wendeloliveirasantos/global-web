import { STORAGE_VIAGEM_COTACAO, STORAGE_VIAGEM_PASSAGEIROS, STORAGE_VIAGEM_PRODUTO, STORAGE_VIAGEM_TITULAR } from "@/constants"
import { useLocalStorage } from "./useLocalStorage"

export default function useViagem() {
  const [oferta] = useLocalStorage(STORAGE_VIAGEM_PRODUTO, "")
  const [cotacao] = useLocalStorage(STORAGE_VIAGEM_COTACAO, "")
  const [titular] = useLocalStorage(STORAGE_VIAGEM_TITULAR, "")
  const [passageiros] = useLocalStorage(STORAGE_VIAGEM_PASSAGEIROS, "")

  return {
    oferta: oferta ? JSON.parse(oferta) : null,
    titular: titular ? JSON.parse(titular) : null,
    cotacao: cotacao ? JSON.parse(cotacao) : null,
    passageiros: passageiros ? JSON.parse(passageiros) : null
  }
}