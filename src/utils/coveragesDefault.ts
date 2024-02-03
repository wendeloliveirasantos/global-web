import { CompositionsEntityOrAdditionalsEntity, CoveragesEntity } from "@/types/auto-offer-input";

export const coveragesDefault: CoveragesEntity[] = [
  {
    id: "3",
    deductibleID: 5,
    guarantees: [
      {
        id: "4",
        isValue: {
          amount: 1000,
          currency: "BRL"
        }
      },
      {
        id: "1",
        isValue: {
          amount: 10000,
          currency: "BRL"
        }
      },
      {
        id: "2",
        isValue: {
          amount: 10000,
          currency: "BRL"
        }
      },
      {
        id: "55",
        isValue: {
          amount: 100000,
          currency: "BRL"
        }
      },
      {
        id: "56",
        isValue: {
          amount: 100000,
          currency: "BRL"
        }
      }
    ],
    additionals: [
      {
        id: 57
      },
      {
        id: 18
      },
      {
        id: 19
      },
      {
        id: 32
      }
    ],
    accessories: [],
    protections: []
  }
]