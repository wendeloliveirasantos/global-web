export interface IAutoOfferInput {
  prospect: IAutoOfferProspect;
  search: IAutoOfferSearch;
}
export interface IAutoOfferProspect {
  name: string;
  documents: DocumentsEntityOrDocument[];
  contacts: ContactsEntity[];
  addresses: AddressesEntity[];
}
export interface DocumentsEntityOrDocument {
  type: Type;
  number: string;
}
export interface Type {
  id: number;
}
export interface ContactsEntity {
  type: Type;
  data: string;
  isAllowCampaign: boolean;
}
export interface AddressesEntity {
  postalCode: string;
  street?: string;
  complement?: string;
  number?: string;
  referencePoint?: string;
}
export interface IAutoOfferSearch {
  segment: SegmentEntity[];
  businessItem: BusinessItem;
}
export interface SegmentEntity {
  id: number;
  components: ComponentsEntity[];
}
export interface ComponentsEntity {
  id: number;
  compositions: CompositionsEntityOrAdditionalsEntity[];
}
export interface CompositionsEntityOrAdditionalsEntity {
  id: number;
}
export interface BusinessItem {
  insurance: Insurance;
}
export interface Insurance {
  period: Period;
  brokers: BrokersEntity[];
  autos?: AutosEntity[];
}
export interface Period {
  effectiveDate: string;
  expirationDate: string;
}
export interface BrokersEntity {
  sucursalCode: string;
  susepCode: string;
  isMain: boolean;
  percentageCommission: number;
  percentageParticipation: number;
}
export interface AutosEntity {
  fipePercentage: number;
  isNewVehicle: boolean;
  circulationPostalCode: string;
  overnightPostalCode: string;
  vehicle: Vehicle;
  drivers: DriversEntity[];
  coverages: CoveragesEntity[];
  questionnaires: IQuestionnairesEntity[];
}
export interface InsuranceRelationship {
  claimQuantity: number;
  bonusClassNumber: number;
  previousPolicy: PreviousPolicy;
}
export interface PreviousPolicy {
  counterpartCode: string;
  code: string;
  expirationDate: string;
}
export interface Vehicle {
  chassisCode: string;
  manufactureYear: number;
  model: Model;
}
export interface Model {
  id: number;
  year: number;
  fuelType: FuelType;
}
export interface FuelType {
  id: number;
  description: string;
}
export interface DriversEntity {
  name: string;
  document: DocumentsEntityOrDocument;
  dateOfBirth: string;
  questionnaires?: IQuestionnairesEntity[];
}
export interface IQuestionnairesEntity {
  questionId: string;
  answerId: string;
}
export interface CoveragesEntity {
  id: string;
  deductibleID: number;
  guarantees: GuaranteesEntity[];
  additionals: CompositionsEntityOrAdditionalsEntity[];
  accessories: [];
  protections: [];
}
export interface GuaranteesEntity {
  id: string;
  isValue: IsValue;
}
export interface IsValue {
  amount: number;
  currency: string;
}
