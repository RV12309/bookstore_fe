import { IBookData } from "./books.interface";

export interface IOrder  {
    orderId: string,
    total: 0,
    paymentId: string,
    paymentProvider: string,
    paymentProviderDesc: string,
    paymentStatus: string,
    paymentStatusDesc: string,
    paymentAmount: 0,
    status: string,
    items: IBookData[]
  };