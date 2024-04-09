export type Product = {
  provider: string
  operator: string
  productReferenceId: string | number
  description: string
  additionalDescription: string
  amount: string | number
  coverage: Array<{
    description: string
    fullDescription: string
    amount: string | number
    orderIndex: number | null
    coverageReferenceId: string | number
  }>  
}

export interface Quote {
  products: Array<Product>
}