import { Product, Quote } from "@/types/viagem";
import api from "@/utils/api";
import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { STORAGE_VIAGEM_COTACAO } from "@/constants";
import dayjs from "dayjs";

type HookReturn = {
  products: Array<Product>;
  loading: boolean;
};

export default function useOfertasViagem(): HookReturn {
  const [cotacaoInput] = useLocalStorage(STORAGE_VIAGEM_COTACAO, "");
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Array<Product>>([]);

  async function fetchQuote() {
    const cotacao = JSON.parse(cotacaoInput) as any;
    const input = {
      destiny: cotacao.to,
      departureDate: cotacao.startDate,
      returnDate: cotacao.endDate,
      passengers: cotacao.passengers.map((p: any) => ({
        birthDate: dayjs().subtract(p.age, "year").format("YYYY-MM-DD"),
      })),
      range: cotacao.rangePremio
    };
    const response = await api.post("/travels/quotes", input);
    const sortedProducts = response.data.sort((a: { amount: number; }, b: { amount: number; }) => a.amount - b.amount);
    setProducts(sortedProducts);
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
