import { Iproduct } from './iproduct';

export interface Iorder {

    UserName:string,
    OrderFrom:string,
    OrderTo:string,
    OrderDate:string,
    OrderPrice:string,
    Change:boolean,
    Item:Iproduct,

}

export interface IOrderPrice{
   orderPriceDetailsID : number
   typeCost : number
   sizeCost : number
   timeCost : number
   orderCost : number
   totalCost : number
   orderId : number
   orderNumber : string
   description:string
   createdOn : Date
   companyPhone?:string
}
