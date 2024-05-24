import { Product, Quote } from "@/types/residencial";
import api from "@/utils/api";
import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { STORAGE_RESIDENCIAL_COTACAO } from "@/constants";
import dayjs from "dayjs";

type HookReturn = {
  products: Array<Product>;
  loading: boolean;
};

export default function useOfertasResidencial(business: string): HookReturn {
  const [cotacaoInput] = useLocalStorage(STORAGE_RESIDENCIAL_COTACAO, "");
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Array<Product>>([]);
  async function fetchQuote() {
    const cotacao = JSON.parse(cotacaoInput) as any;
    const input = {
      business: business,
      range: 1000,
      birthDate: cotacao.birthDate
    };
    const response = await api.post("/hybrids/quotes", input);
    setProducts(response.data);
  }

  useEffect(() => {
    if (cotacaoInput) {
      fetchQuote();
    }
  }, [cotacaoInput]);

  return {
    products,
    loading,
  };
}
