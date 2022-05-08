export interface IPriceComp {
  from: string;
  to: string;
  priceCost: number;
  deliveryTime: string;
  priceId:number
  companyId: string;
  Change:boolean
   DayName :string[]
   DayStart :number[]
   DayEnd :number[]
   tableTime:number[]

}


export interface IListPrice {
  priceId:number
  deliveryTime :string
  to :string
  companyId :string
  from :string
  priceCost :string
  Change:boolean

}
