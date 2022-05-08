export interface ICompany {
    companyId:number
    companyName : string
    photo? : File | null
    email : string
    phone : string
    country : string
    city : string
    addressDetails?:string
    userID:string

}

export interface ICompanyTodayOrder {
   orderId : number
   orderNumber : string
   reciverAddress : string
   reciverCity : string
   senderAddress : string
   senderCity : string
   driverName : string
   from : string
   to : string
   status : number
   createdOn : Date
  expectionDate: Date;

}


export interface ICompanyAdmin {
   userID : string
   name : string
   email : string
   phone : string
   country : string
   city : string
   addressDetails : string
   dateOfBirth : string
   companyName : string
   employee : string
   rate : number


}
