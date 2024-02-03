export interface IProposalInput {
  prospect: ProspectEntity[];
  businessItem: BusinessItem;
}
export interface ProspectEntity {
  name: string;
  occupationClassificationCode: number;
  salaryRangeCode: number;
  isAwareName: boolean;
  isAwareAddress: boolean;
  isPoliticallyExposedPerson: boolean;
  document: DocumentEntity[];
  contacts: ContactsEntity[];
  addresses: AddressesEntity[];
}
export interface DocumentEntity {
  type: Type;
  number: string;
}
export interface Type {
  id: string;
}
export interface ContactsEntity {
  type: Type;
  data: string;
  isAllowCampaign?: boolean | null;
}
export interface AddressesEntity {
  street: string;
  district: string;
  number: number;
  complement: string;
  referencePoint: string;
  postalCode: string;
  city: string;
  state: string;
}
export interface BusinessItem {
  offerId: string;
  insurance: Insurance;
}
export interface Insurance {
  installments: Installments;
  broker: BrokerEntity[];
  autos: AutosEntity[];
}
export interface Installments {
  numberOfInstallments: number;
  billingTypeId: number;
  installmentDueDate?: string;
}
export interface DocumentEntity1 {
  type: Type;
  number: string;
  mainName: string;
}
export interface BrokerEntity {
  sucursalCode: string;
  susepCode: string;
  isMain: boolean;
  percentageParticipation: number;
}
export interface AutosEntity {
  vehicle: Vehicle;
  insuranceRelationship?: InsuranceRelationship;
}
export interface Vehicle {
  licensePlateCode: string;
  stateLicensePlateCode: string;
  nationalVehicleRegistrationNumber: string;
  chassisCode: string;
}
export interface InsuranceRelationship {
  claimQuantity: number;
  bonusClassNumber: number;
  previousPolicy?: PreviousPolicy;
}
export interface PreviousPolicy {
  code: string;
  counterpartCode: string;
  identificationCode: string;
  endDate: string;
}
