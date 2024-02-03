type IAutoVehicleModelFuelType = {
  code: number
  description: null | string
}

type IAutoVehicleModelBrand = {
  description: string
  id: number
}

type IAutoVehicleModelCategory = {
  description: string
  code: number
}

type IAutoVehicleModel = {
  brand: IAutoVehicleModelBrand
  category: IAutoVehicleModelCategory
  description: string
  fipeCode: string
  fuelType: IAutoVehicleModelFuelType
  id: number
  insurable: boolean
  seatingCapacity: number
  yearsModel: IAutoVehicleYearMade[]
}

type IAutoVehicleYearMade = {
  year: string
}

type IAutoVehicle = {
  chassisCode: null | string
  plateCode: null | string
  yearsMade: IAutoVehicleYearMade[]
}

export type { 
  IAutoVehicle, 
  IAutoVehicleYearMade, 
  IAutoVehicleModel 
}