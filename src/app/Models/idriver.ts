import { ICAR } from "./icar";

export interface IDriver {
    driverName : string,
    email : string,
    phone : string,
    dateOfBirth : string,
    employee : string,
    carPlate : string,
    companyId : number,
    driverId : number,
    vehicleId:number
    vehicle:ICAR,
    from:string,
    to:string,
    reverse?:boolean
    rate? :number
    companyName? :string
}

export interface IDriverCompany {
  driverName : string,
  email : string,
  phone : string,
  dateOfBirth : string,
  employee : string,
  carPlate : string,
  companyId : number,
  driverId : number,
  vehicleId:number
  from:string,
  to:string
}

export interface IDriverOrder {
  driverName : string,
  carPlate : string,
  driverId : number,
  from:string,
  to:string
orderNum:number
}
