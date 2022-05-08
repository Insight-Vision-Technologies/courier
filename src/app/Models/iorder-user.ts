import { IUser } from "./iuser";

export interface IorderUser {
    orderId :number
    orderNumber :string
    reciverName :string
    senderName? :string
    senderPhone? :string
    senderEmail? :string
    senderAddress? :string
    senderCity? :string
    reciverPhone :string
    reciverEmail :string
    reciverAddress :string
    reciverCity:string
    description:string
    orderCost:number
    totalCost?:number
    time :string
    type :string
    from :string
    to :string
    amount :number
    width? :number
  height? :number
  length? :number
    status :number
    paymentStatus :number
    paymentBy :string
    userID :string
    createdOn:Date
    companyName :string
    CompanyEmail?:string
    priceCost :number
    userName : string
    user:IUser
    driverName?:string
    totalPrice?:number
    paymentMethod? :number;//cash 0 // visa 1
    expectionDate?  : Date;
    Dimenstion?:number
    rate?:number
    updatedOn?:Date
}


export interface IOrderInfo{
  orderNumber :string
  deliveryTime :string
   companyId :number
   priceId:number
   priceCost :number
    sizeCost : number
    typeCost : number
    totalCost : number
    orderCost : number




}

export interface IOrderDriver{
  driverId :number
  orderId :string
}

export interface IOrderRate{
  orderId :number
  rate:number
  orderNumber :string

}

export interface IOrderDriverInfo{
  orderId :number
  driverName:string
  driverPhone:string
}

export interface ISizeDimention{
  width :number
  height :number
  length :number
}

