// API responses interfaces

import { IUser } from "./models.interfaces";

/**
 * @interface IRenewTokenResponse
 * @description This is the interface for the response of the renew token endpoint
 */
export interface IRenewTokenResponse {
  token: string;
  exp: string;
  user: IUser["user"];
  header: string;
}

/**
 * @interface ILoginResponse
 * @description This is the interface for the response of the login endpoint
 */
export interface ILoginResponse {
  token: string;
  exp: string;
  user: IUser["user"];
}

/**
 * @interface IRafflesResponse
 * @description This is the interface for the response of the raffles endpoint
 */
export interface IRafflesResponse {
  raffles: {
    id: number;
    admin_status: string;
    currency: string;
    expired_date: string;
    init_date: string;
    lotery: string;
    numbers: number;
    price: number;
    // prizes: IPrize[];
    sell_status: string;
    title: string;
    uniq_identifier_serial: string;
    user: IUser["user"];
    seller: IUser["user"];
  }[],
  metadata: {
    items: number;
    count: number;
    page: number;
    pages: number;
  }
}

/**
 * @interface IGetRaffles
 * @description Interface of getRaffles request function
 */
export interface IGetRaffles {
  token: string;
  queryType?: 'newest' | 'initialized';
  page: number;
  items: number; 
}