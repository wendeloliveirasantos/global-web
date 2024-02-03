export interface Weather {
  offers: IOffersEntityResponse[];
}
export interface IOffersEntityResponse {
  id: string;
  name: string;
  description: string;
  campaignImageCode: string;
  totalPrice: IOfferPriceEntity;
  isOfferHighlighted: boolean;
  items: ItemsEntity[];
}
export interface IOfferPriceEntity {
  amount: number;
  currency: string;
  amountFormatted: string;
}
export interface ItemsEntity {
  code: string;
  name: string;
  segment: SegmentEntity[];
  insurance: Insurance;
  businessNotifications?: null;
  additionalDiscount: AdditionalDiscount;
  checkingAccount: CheckingAccount;
}
export interface SegmentEntity {
  id: string;
  description: string;
  components: ComponentsEntity[];
}
export interface ComponentsEntity {
  id: string;
  description: string;
  compositions: CompositionsEntity[];
}
export interface CompositionsEntity {
  id: string;
  description: string;
  code?: null;
}
export interface Insurance {
  quotationId: string;
  quotationDate: string;
  quotationExpirationDate: string;
  period: Period;
  brokers: BrokersEntity[];
  items: ItemsEntity1[];
  totalGrossPremium: IOfferPriceEntity;
  cost: IOfferPriceEntity;
  totalIof: IOfferPriceEntity;
  total: IOfferPriceEntity;
  installments: InstallmentsEntity[];
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
  code?: null;
  typeCode?: null;
}
export interface ItemsEntity1 {
  coverages: CoveragesEntity[];
  questionnaires: QuestionnairesEntity[];
  auto: Auto;
  deductibleValue: IOfferPriceEntity;
  referencedRepairShopDeductibleValue: IOfferPriceEntity;
  totalNetPremium: IOfferPriceEntity;
}
export interface CoveragesEntity {
  id: number;
  code: string;
  description: string;
  deductibleID: number;
  deductibleDescription: string;
  branchCode: string;
  branchDescription: string;
  guarantees: GuaranteesEntity[];
  additionals: AdditionalsEntity[];
  accessories?: null;
  protections?: null;
  maximumIndemnityLimits?: null;
}
export interface GuaranteesEntity {
  id: number;
  code: string;
  description: string;
  isValue: IOfferPriceEntity;
  netPremium: IOfferPriceEntity;
  deductible: IOfferPriceEntity;
}
export interface AdditionalsEntity {
  id: number;
  code: string;
  description: string;
  maximumIndemnityLimits: IOfferPriceEntity;
  premiumValue: IOfferPriceEntity;
  deductibleValue: IOfferPriceEntity;
  deductibles: DeductiblesEntity[];
  isValue?: null;
}
export interface DeductiblesEntity {
  code: string;
  description: string;
  value: IOfferPriceEntity;
}
export interface QuestionnairesEntity {
  questionId: number;
  answerId: number;
  question: QuestionOrAnswerOrFuelTypeOrTypeOrBillingType;
  answer: QuestionOrAnswerOrFuelTypeOrTypeOrBillingType;
}
export interface QuestionOrAnswerOrFuelTypeOrTypeOrBillingType {
  id: number;
  description: string;
}
export interface Auto {
  fipePercentageUsed: number;
  vehicle: Vehicle;
  drivers?: (DriversEntity)[] | null;
}
export interface Vehicle {
  chassisCode: string;
  manufactureYear: number;
  model: Model;
  plateCode: string;
  age: number;
}
export interface Model {
  id: number;
  year: number;
  fuelType: QuestionOrAnswerOrFuelTypeOrTypeOrBillingType;
  description: string;
  fipeCode: string;
  seatingCapacity: number;
  isInsurable: boolean;
  brand: Brand;
}
export interface Brand {
  description: string;
}
export interface DriversEntity {
  name: string;
  document: Document;
  dateOfBirth: string;
  questionnaires?: (QuestionnairesEntity)[] | null;
}
export interface Document {
  type: QuestionOrAnswerOrFuelTypeOrTypeOrBillingType;
  number: string;
}
export interface InstallmentsEntity {
  quantity: number;
  price: IOfferPriceEntity;
  billingType: QuestionOrAnswerOrFuelTypeOrTypeOrBillingType;
  isBestPaymentDay: boolean;
}
export interface AdditionalDiscount {
  expirationDate: string;
  percentage: number;
}
export interface CheckingAccount {
  limitAmount: IOfferPriceEntity;
}
