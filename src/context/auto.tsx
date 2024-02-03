/* eslint-disable react-hooks/rules-of-hooks */
import {
  STORAGE_AUTO_VEHICLE,
  STORAGE_AUTO_INSURED,
  STORAGE_AUTO_DRIVERS,
  STORAGE_AUTO_VEHICLE_QUESTION,
  STORAGE_AUTO_OFFER,
  STORAGE_AUTO_PROPOSAL_INPUT,
} from "@/constants";
import {
  DriversEntity,
  IAutoOfferProspect,
  IQuestionnairesEntity,
} from "@/types/auto-offer-input";
import { IOffersEntityResponse } from "@/types/auto-offer-response";
import { IProposalInput } from "@/types/proposal-input";
import React, { useEffect, useState } from "react";

type IAutoContext = {
  addNewVehicle(data: IAddNewVehicleInput): void;
  addInsured(data: IAutoOfferProspect): void;
  addDrivers(data: DriversEntity[]): void;
  updateDriver(i: number, d: DriversEntity): void;
  addVehicleQuestions(data: IQuestionnairesEntity[]): void;
  clearAuto(): void;
  addOffer(input: IOffersEntityResponse): void;
  addProposalInput(input: any): void
  vehicleQuestions: IQuestionnairesEntity[];
  vehicle: IAddNewVehicleInput | null;
  drivers: DriversEntity[];
  insured: IAutoOfferProspect | null;
  offer: IOffersEntityResponse | null;
  proposalInput: IProposalInput
};

export type IAddNewVehicleInput = {
  modelYear: string;
  manufactureYear: string;
  postalCode: string;
  vehicleCategoryId: number;
  vehicleModelId: number;
  isNewVehicle: boolean;
  fuelTypeId: number;
};

export const AutoContext = React.createContext<IAutoContext | null>(null);

const AutoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [insured, setInsured] = useState<IAutoOfferProspect | null>(null);
  const [vehicle, setVehicle] = useState<IAddNewVehicleInput | null>(null);
  const [drivers, setDrivers] = useState<DriversEntity[]>([]);
  const [vehicleQuestions, setVehicleQuestions] = useState<
    IQuestionnairesEntity[]
  >([]);
  const [offer, setOffer] = useState<IOffersEntityResponse | null>(null);
  const [proposalInput, setProposalInput] = useState<IProposalInput>({
    businessItem: {
      insurance: {
        autos: [],
        broker: [],
        installments: {
          numberOfInstallments: 0,
          billingTypeId: 0,
          installmentDueDate: "",
        }
      },
      offerId: ""
    },
    prospect: []
  })

  function addNewVehicle(data: IAddNewVehicleInput) {
    localStorage.setItem(STORAGE_AUTO_VEHICLE, JSON.stringify(data));
    setVehicle(data);
  }

  function addVehicleQuestions(data: IQuestionnairesEntity[]) {
    localStorage.setItem(STORAGE_AUTO_VEHICLE_QUESTION, JSON.stringify(data));
    setVehicleQuestions(data);
  }

  function addInsured(data: IAutoOfferProspect) {
    localStorage.setItem(STORAGE_AUTO_INSURED, JSON.stringify(data));
    setInsured(data)
  }

  function addDrivers(data: DriversEntity[]) {
    localStorage.setItem(STORAGE_AUTO_DRIVERS, JSON.stringify(data));
    setDrivers(data);
  }

  function updateDriver(driverIdx: number, driver: DriversEntity) {
    const arr = [...drivers];
    arr[driverIdx] = driver;
    localStorage.setItem(STORAGE_AUTO_DRIVERS, JSON.stringify(arr));
    setDrivers(arr);
  }

  function addOffer(input: IOffersEntityResponse) {
    localStorage.setItem(STORAGE_AUTO_OFFER, JSON.stringify(input));
    setOffer(input);
  }

  function addProposalInput(input: any) {
    localStorage.setItem(STORAGE_AUTO_PROPOSAL_INPUT, JSON.stringify(input));
    setProposalInput(input)
  }

  useEffect(() => {
    const existVehicle = localStorage.getItem(STORAGE_AUTO_VEHICLE);
    const existDrivers = localStorage.getItem(STORAGE_AUTO_DRIVERS);
    const existInsured = localStorage.getItem(STORAGE_AUTO_INSURED);
    const existVehicleQuestions = localStorage.getItem(
      STORAGE_AUTO_VEHICLE_QUESTION
    );
    const existOffer = localStorage.getItem(STORAGE_AUTO_OFFER);
    const existProposalInput = localStorage.getItem(STORAGE_AUTO_PROPOSAL_INPUT);
    if (existVehicle) {
      setVehicle(JSON.parse(existVehicle));
    }
    if (existVehicleQuestions) {
      setVehicleQuestions(JSON.parse(existVehicleQuestions));
    }
    if (existDrivers) {
      setDrivers(JSON.parse(existDrivers));
    }
    if (existInsured) {
      setInsured(JSON.parse(existInsured));
    }
    if (existOffer) {
      setOffer(JSON.parse(existOffer));
    }
    if (existProposalInput) {
      setProposalInput(JSON.parse(existProposalInput));
    }
  }, []);

  function clearAuto() {
    localStorage.clear();
  }

  return (
    <AutoContext.Provider
      value={{
        addVehicleQuestions,
        addNewVehicle,
        addInsured,
        addDrivers,
        updateDriver,
        addOffer,
        addProposalInput,
        vehicle,
        drivers,
        insured,
        vehicleQuestions,
        offer,
        proposalInput,
        clearAuto,
      }}
    >
      {children}
    </AutoContext.Provider>
  );
};

export default AutoProvider;

export function useAuto() {
  const context = React.useContext(AutoContext) as IAutoContext;
  return context;
}
