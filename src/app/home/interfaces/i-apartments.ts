import { IBaseName } from "../../interfaces/i-base"


export interface IApartment extends IBaseName {
  mainImage: string
  price: number
  totalReviews: number
  rate: number
  maxGuest: number
  city: string
} 

