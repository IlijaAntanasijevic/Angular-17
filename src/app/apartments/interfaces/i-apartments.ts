import { IBaseName, IUser } from "../../interfaces/i-base"


export interface IApartment extends IBaseName {
  mainImage: string
  price: number
  totalReviews: number
  rate: number
  maxGuest: number
  city: string
} 

export interface IApartmentDetail extends IApartment {
  location: string
  images: object[]
  user: IUser
  reviews: object[]
  description: string
}