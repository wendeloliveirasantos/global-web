export interface IOffersResponse {
  offers?: (IOffersEntity)[] | null;
}
export interface IOffersEntity {
  id: string;
  name: string;
  description: string;
  campaignImageCode: string;
  totalPrice: IsValueOrNetPremiumOrDeductibleOrMaximumIndemnityLimitsOrPremiumValueOrDeductibleValueOrTotalNetPremiumOrPriceOrTotalGrossPremiumOrCostOrTotalIofOrTotalOrTotalPrice;
  isOfferHighlighted: boolean;
  items?: (ItemsEntity)[] | null;
}
export interface IsValueOrNetPremiumOrDeductibleOrMaximumIndemnityLimitsOrPremiumValueOrDeductibleValueOrTotalNetPremiumOrPriceOrTotalGrossPremiumOrCostOrTotalIofOrTotalOrTotalPrice {
  amount: number;
  currency: string;
  amountFormatted: string;
}
export interface ItemsEntity {
  code: string;
  name: string;
  segment?: (SegmentEntity)[] | null;
  insurance: Insurance;
}
export interface SegmentEntity {
  id: string;
  code: string;
  description: string;
  components?: (ComponentsEntity)[] | null;
}
export interface ComponentsEntity {
  id: string;
  code: string;
  description: string;
  compositions?: (CompositionsEntity)[] | null;
}
export interface CompositionsEntity {
  id: string;
  code: string;
  description: string;
}
export interface Insurance {
  quotationId: string;
  quotationDate: string;
  quotationExpirationDate: string;
  period: Period;
  brokers?: (BrokersEntity)[] | null;
  items?: (ItemsEntity1)[] | null;
  totalGrossPremium: IsValueOrNetPremiumOrDeductibleOrMaximumIndemnityLimitsOrPremiumValueOrDeductibleValueOrTotalNetPremiumOrPriceOrTotalGrossPremiumOrCostOrTotalIofOrTotalOrTotalPrice;
  cost: IsValueOrNetPremiumOrDeductibleOrMaximumIndemnityLimitsOrPremiumValueOrDeductibleValueOrTotalNetPremiumOrPriceOrTotalGrossPremiumOrCostOrTotalIofOrTotalOrTotalPrice;
  totalIof: IsValueOrNetPremiumOrDeductibleOrMaximumIndemnityLimitsOrPremiumValueOrDeductibleValueOrTotalNetPremiumOrPriceOrTotalGrossPremiumOrCostOrTotalIofOrTotalOrTotalPrice;
  total: IsValueOrNetPremiumOrDeductibleOrMaximumIndemnityLimitsOrPremiumValueOrDeductibleValueOrTotalNetPremiumOrPriceOrTotalGrossPremiumOrCostOrTotalIofOrTotalOrTotalPrice;
  installments?: (InstallmentsEntity)[] | null;
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
  internalCode?: null;
  brokerTypeCode?: null;
}
export interface ItemsEntity1 {
  coverages?: (CoveragesEntity)[] | null;
  questionnaires?: (QuestionnairesEntity)[] | null;
  auto: Auto;
  deductibleValue: IsValueOrNetPremiumOrDeductibleOrMaximumIndemnityLimitsOrPremiumValueOrDeductibleValueOrTotalNetPremiumOrPriceOrTotalGrossPremiumOrCostOrTotalIofOrTotalOrTotalPrice;
  totalNetPremium: IsValueOrNetPremiumOrDeductibleOrMaximumIndemnityLimitsOrPremiumValueOrDeductibleValueOrTotalNetPremiumOrPriceOrTotalGrossPremiumOrCostOrTotalIofOrTotalOrTotalPrice;
  property?: null;
}
export interface CoveragesEntity {
  id: number;
  code: string;
  description: string;
  deductibleID: number;
  deductibleDescription: string;
  branchCode: string;
  branchDescription: string;
  guarantees?: (GuaranteesEntity)[] | null;
  additionals?: (AdditionalsEntity)[] | null;
  accessories?: null;
  protections?: null;
  maximumIndemnityLimits?: null;
}
export interface GuaranteesEntity {
  id: number;
  code: string;
  description: string;
  isValue: IsValueOrNetPremiumOrDeductibleOrMaximumIndemnityLimitsOrPremiumValueOrDeductibleValueOrTotalNetPremiumOrPriceOrTotalGrossPremiumOrCostOrTotalIofOrTotalOrTotalPrice;
  netPremium: IsValueOrNetPremiumOrDeductibleOrMaximumIndemnityLimitsOrPremiumValueOrDeductibleValueOrTotalNetPremiumOrPriceOrTotalGrossPremiumOrCostOrTotalIofOrTotalOrTotalPrice;
  deductible: IsValueOrNetPremiumOrDeductibleOrMaximumIndemnityLimitsOrPremiumValueOrDeductibleValueOrTotalNetPremiumOrPriceOrTotalGrossPremiumOrCostOrTotalIofOrTotalOrTotalPrice;
}
export interface AdditionalsEntity {
  id: number;
  code: string;
  description: string;
  maximumIndemnityLimits: IsValueOrNetPremiumOrDeductibleOrMaximumIndemnityLimitsOrPremiumValueOrDeductibleValueOrTotalNetPremiumOrPriceOrTotalGrossPremiumOrCostOrTotalIofOrTotalOrTotalPrice;
  premiumValue: IsValueOrNetPremiumOrDeductibleOrMaximumIndemnityLimitsOrPremiumValueOrDeductibleValueOrTotalNetPremiumOrPriceOrTotalGrossPremiumOrCostOrTotalIofOrTotalOrTotalPrice;
  deductibleValue: IsValueOrNetPremiumOrDeductibleOrMaximumIndemnityLimitsOrPremiumValueOrDeductibleValueOrTotalNetPremiumOrPriceOrTotalGrossPremiumOrCostOrTotalIofOrTotalOrTotalPrice;
}
export interface QuestionnairesEntity {
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
  price: IsValueOrNetPremiumOrDeductibleOrMaximumIndemnityLimitsOrPremiumValueOrDeductibleValueOrTotalNetPremiumOrPriceOrTotalGrossPremiumOrCostOrTotalIofOrTotalOrTotalPrice;
  billingType: QuestionOrAnswerOrFuelTypeOrTypeOrBillingType;
}
