import { IOffersResponse } from "@/types/auto-offer"
import { IAutoOfferInput } from "@/types/auto-offer-input"
import { IQuestionsResponse } from "@/types/auto-questionarie"
import { IProposalInput } from "@/types/proposal-input"
import api from "@/utils/api"

type IResponse = {
  result?: any
  error?: any
}

type ListCoveragesParams = {
  postalCode: string
  vehicleCategory: number | string
  questionaryType?: number
}

export async function listVehicles(params: any) {
  try {
    const response = await api.get('/auto/vehicles', {
      params
    })
    return {
      result: response.data.vehicles
    }
  } catch (error) {
    return { error }
  }
}

export async function listQuestionaries(params: ListCoveragesParams): Promise<IResponse> {
  try {
    const response = await api.get('/auto/questionaries', {
      params: {
        componentId: 1, // API do Componente (1 = AUTO)
        ...params
      }
    })
    return { result: response.data }
  } catch (error) {
    return { error }
  }
}

export async function generateOffers(params: IAutoOfferInput): Promise<IResponse> {
  try {
    const response = await api.post('/auto/offers', params)
    return { result: response.data}
  } catch (error) {
    return { error }
  }
}

export async function generateProposed(params: IProposalInput): Promise<IResponse> {
  try {
    const response = await api.post('/auto/proposals', params)
    return { result: response.data}
  } catch (error) {
    return { error }
  }
}