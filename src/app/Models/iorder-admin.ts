export interface IOrderAdmin {
  orderId: number;
  orderNumber: string;

  driverName: string;

  status: number;
  createdOn: Date;
  companyName: string;
  amount: number;
  expectionDate: Date;
}
