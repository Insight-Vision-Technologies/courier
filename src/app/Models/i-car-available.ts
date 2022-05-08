import { ICarHistory } from './i-car-history';


export interface ICarAvailable {

    CarType:string,
    CarPlate:string,
    CarDriver:string,
    CarHistory:ICarHistory[],
    

}
