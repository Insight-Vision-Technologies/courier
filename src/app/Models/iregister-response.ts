export interface IRegisterResponse {
    message : string
    isSuccess : boolean
    errors : string[]
    expireDate? : string
}

export interface IRegister {
   email:string ,
  password: string,
  confirmPassword: string,
  addressDetails: string,
  name: string,
  phone: string,
  city: string,
  country: string,
  role:string []
}

export interface ILogin {
  email:string ,
 password: string,
 username: string,

}
