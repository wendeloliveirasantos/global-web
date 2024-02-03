import { fuelTypes } from "@/constants";
import { IAddNewVehicleInput } from "@/context/auto";
import { DriversEntity, FuelType, IAutoOfferInput, IAutoOfferProspect, IQuestionnairesEntity } from "@/types/auto-offer-input";
import { coveragesDefault } from "@/utils/coveragesDefault";
import dayjs from "dayjs"

export function normalizeOfferInput(prospect: IAutoOfferProspect, drivers: DriversEntity[], vehicle: IAddNewVehicleInput, vehicleQuestions: IQuestionnairesEntity[]): IAutoOfferInput {
  const input: IAutoOfferInput = {
    prospect,
    search: {
      segment: [
        {
          id: 1,
          components: [
            {
              id: 1,
              compositions: [
                {
                  id: 1
                }
              ]
            }
          ]
        }
      ],
      businessItem: {
        insurance: {
          period: {
            effectiveDate: dayjs(new Date()).format("YYYY-MM-DD"),
            expirationDate: dayjs(new Date())
              .add(1, "year")
              .format("YYYY-MM-DD"),
          },
          brokers: [
            {
              sucursalCode: "",
              susepCode: "",
              isMain: true,
              percentageCommission: 15,
              percentageParticipation: 100,
            },
          ],
          autos: [
            {
              fipePercentage: 100,
              isNewVehicle: vehicle!.isNewVehicle,
              circulationPostalCode: vehicle!.postalCode,
              overnightPostalCode: vehicle!.postalCode,
              drivers,
              coverages: coveragesDefault,
              vehicle: {
                chassisCode: "",
                manufactureYear: parseInt(vehicle.manufactureYear),
                model: {
                  id: vehicle.vehicleModelId,
                  year: parseInt(vehicle.modelYear),
                  fuelType: fuelTypes.find((fuel) => fuel.id === vehicle.fuelTypeId) as FuelType
                }
              },
              questionnaires: vehicleQuestions,
            }

          ],
        },
      },
    },
  }
  return input
}