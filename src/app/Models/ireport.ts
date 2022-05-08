export interface IReport {
  vehicleReportId: number;
  time: string;
  date: Date;
  cost: number;
  reportNumber: string;
  driverId: number;
  driverName: string;
  vehicleId: number;
  vehicleName: string;
}

export interface IName {
  nameID: number;
  name: string;
}
