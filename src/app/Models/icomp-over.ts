import { ICompany } from './icompany';

export interface ICompOver {
  priceId: number;
  from: string;
  to: string;
  priceCost: number;
  deliveryTime: string;
  sizeCost:number
  typeCost:number
  totalCost:number
  companyId: number;
  companyName: string;
  orderCost : number

  company: ICompany;
}

export interface ICompOverInfo {
  from: string

  to: string
  orderId: string
  deliveryTime: string
  size:number
  width :number
  height :number
  length :number
  type:string
  orderCost : number

}
