import { Cep } from "@/types/consulta-cep";
import { ITravelDestiniesModel } from "@/types/travel-destinies";
import api from "@/utils/api"

export async function listDestinies(params: any) {
  try {
    const response = await api.get('/travels/destinies')
    
    if (params) {
      var destinies = response.data as ITravelDestiniesModel[];
      const filteredData = destinies.filter(destiny => destiny.pais.toUpperCase().includes(params.description.toUpperCase()));
      return {
        result: filteredData
      };
    }

    return {
      result: response.data
    };
  } catch (error) {
    return { error }
  }
}

export async function consultCep(cep: string) {
  try {
    const response = await api.get('/travels/consult-cep/' + cep)
    
    if (cep) {
      var resultado = response.data as Cep;
      return {
        result: resultado
      };
    }

    return {
      result: response.data
    };
  } catch (error) {
    return { error }
  }
}