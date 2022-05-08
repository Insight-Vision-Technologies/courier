export interface IGuest {
}

export interface IGuestOrder {

   name : string
   email : string
   addressDetails : string
   phone : string
   city : string
   country : string

   orderId :number
   orderNumber :string
   reciverName :string
   senderName? :string
   reciverPhone :string
   reciverEmail :string
   reciverAddress :string
   reciverCity:string
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
   createdOn:Date
   companyName :string
   orderCost :number
   guestID : number
   userName : string
   description?:string


}
